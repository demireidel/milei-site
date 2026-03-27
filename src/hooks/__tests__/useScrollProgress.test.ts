import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useRef } from "react";
import { useScrollProgress } from "../useScrollProgress";

beforeEach(() => {
  // Mock matchMedia — default: no reduced motion
  vi.stubGlobal("matchMedia", vi.fn((query: string) => ({
    matches: query.includes("reduce") ? false : false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })));

  // Mock requestAnimationFrame to run synchronously
  vi.stubGlobal("requestAnimationFrame", vi.fn((cb: FrameRequestCallback) => {
    cb(0);
    return 0;
  }));
  vi.stubGlobal("cancelAnimationFrame", vi.fn());
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("useScrollProgress", () => {
  it("returns 0 when element top is at viewport top", () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(document.createElement("div"));
      vi.spyOn(ref.current, "getBoundingClientRect").mockReturnValue({
        top: 0, height: 500, bottom: 500, left: 0, right: 0, width: 0, x: 0, y: 0,
        toJSON: vi.fn(),
      });
      return useScrollProgress(ref);
    });

    expect(result.current).toBe(0);
  });

  it("returns >0 when element has scrolled partially off screen", () => {
    const mockEl = document.createElement("div");
    vi.spyOn(mockEl, "getBoundingClientRect").mockReturnValue({
      top: -100, height: 500, bottom: 400, left: 0, right: 0, width: 0, x: 0, y: 0,
      toJSON: vi.fn(),
    });

    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(mockEl);
      return useScrollProgress(ref);
    });

    // -top / height = 100/500 = 0.2
    expect(result.current).toBeCloseTo(0.2);
  });

  it("caps at 1.0 when element fully scrolled off screen", () => {
    const mockEl = document.createElement("div");
    vi.spyOn(mockEl, "getBoundingClientRect").mockReturnValue({
      top: -600, height: 500, bottom: -100, left: 0, right: 0, width: 0, x: 0, y: 0,
      toJSON: vi.fn(),
    });

    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(mockEl);
      return useScrollProgress(ref);
    });

    expect(result.current).toBe(1);
  });

  it("returns 0 and skips listener when reduced motion is enabled", () => {
    vi.stubGlobal("matchMedia", vi.fn(() => ({
      matches: true,
      media: "",
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })));

    const addSpy = vi.spyOn(window, "addEventListener");

    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(document.createElement("div"));
      return useScrollProgress(ref);
    });

    expect(result.current).toBe(0);
    expect(addSpy).not.toHaveBeenCalledWith("scroll", expect.any(Function), expect.anything());
  });

  it("removes scroll listener on unmount", () => {
    const removeSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(document.createElement("div"));
      return useScrollProgress(ref);
    });

    unmount();
    expect(removeSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
  });
});
