import { render, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import React from "react";
import { useAnimatedNumber } from "../useAnimatedNumber";

const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

let rafQueue: Array<(time: number) => void> = [];
let mockNow = 0;

beforeEach(() => {
  mockNow = 0;
  rafQueue = [];

  vi.stubGlobal("performance", { now: vi.fn(() => mockNow) });

  vi.stubGlobal(
    "requestAnimationFrame",
    vi.fn((cb: FrameRequestCallback) => {
      rafQueue.push(cb);
      return rafQueue.length - 1;
    })
  );
  vi.stubGlobal("cancelAnimationFrame", vi.fn());

  // IntersectionObserver must be a real constructable — use a class
  class MockIO {
    private cb: IntersectionObserverCallback;
    constructor(cb: IntersectionObserverCallback) {
      this.cb = cb;
    }
    observe(el: Element) {
      mockObserve(el);
      // Trigger intersection immediately
      this.cb(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver
      );
    }
    disconnect() {
      mockDisconnect();
    }
  }

  vi.stubGlobal("IntersectionObserver", MockIO);
});

afterEach(() => {
  vi.unstubAllGlobals();
  mockObserve.mockReset();
  mockDisconnect.mockReset();
});

/** Flush all pending RAF callbacks at a given timestamp. */
function flushRAF(time: number) {
  mockNow = time;
  const cbs = [...rafQueue];
  rafQueue = [];
  cbs.forEach((cb) => cb(time));
}

interface Props {
  target: number;
  duration?: number;
  decimals?: number;
  onResult?: (r: { value: number; display: string }) => void;
}

function TestComponent({ target, duration, decimals, onResult }: Props) {
  const { ref, value, display } = useAnimatedNumber({ target, duration, decimals });
  React.useEffect(() => {
    onResult?.({ value, display });
  });
  return (
    <div
      ref={ref}
      data-testid="animated"
      data-value={value}
      data-display={display}
    />
  );
}

describe("useAnimatedNumber", () => {
  it("starts at 0 before animation frames run", () => {
    let captured = { value: -1, display: "" };
    render(
      <TestComponent
        target={100}
        duration={1000}
        onResult={(r) => { captured = r; }}
      />
    );

    // IntersectionObserver fires → first RAF queued but not yet flushed
    expect(captured.value).toBe(0);
  });

  it("animates to target after animation completes", () => {
    let captured = { value: -1, display: "" };
    render(
      <TestComponent
        target={50}
        duration={100}
        onResult={(r) => { captured = r; }}
      />
    );

    act(() => flushRAF(0));   // start=0, p=0 → value=0, queues next frame
    act(() => flushRAF(200)); // p=2 → clamped to 1 → value=50

    expect(captured.value).toBe(50);
  });

  it("has an intermediate value during animation", () => {
    let captured = { value: -1, display: "" };
    render(
      <TestComponent
        target={100}
        duration={1000}
        onResult={(r) => { captured = r; }}
      />
    );

    act(() => flushRAF(0));   // start=0, p=0 → value=0
    act(() => flushRAF(500)); // p=0.5 → eased > 0

    expect(captured.value).toBeGreaterThan(0);
    expect(captured.value).toBeLessThanOrEqual(100);
  });

  it("formats display as '0' before animation for integers", () => {
    let captured = { value: -1, display: "" };
    render(
      <TestComponent
        target={14500}
        duration={1000}
        onResult={(r) => { captured = r; }}
      />
    );

    expect(captured.display).toBe("0");
  });

  it("formats display as '0.0' before animation for decimals=1", () => {
    let captured = { value: -1, display: "" };
    render(
      <TestComponent
        target={2.4}
        duration={1000}
        decimals={1}
        onResult={(r) => { captured = r; }}
      />
    );

    expect(captured.display).toBe("0.0");
  });

  it("disconnects observer on unmount", () => {
    const { unmount } = render(
      <TestComponent target={100} />
    );

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });
});
