import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AnimatedNumber } from "../AnimatedNumber";

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", vi.fn(function() {
    return {
      observe: vi.fn(),
      disconnect: vi.fn(),
      unobserve: vi.fn(),
    };
  }));
});

describe("AnimatedNumber", () => {
  it("renders the label", () => {
    render(<AnimatedNumber target={100} suffix="%" label="Test" />);
    expect(screen.getByText("Test")).toBeDefined();
  });

  it("does not have aria-live on the visible number", () => {
    const { container } = render(<AnimatedNumber target={100} suffix="%" label="Test" />);
    const statNumber = container.querySelector(".stat-number");
    expect(statNumber?.getAttribute("aria-live")).toBeNull();
  });
});
