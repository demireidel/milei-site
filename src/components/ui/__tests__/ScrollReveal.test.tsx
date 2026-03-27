import { render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ScrollReveal } from "../ScrollReveal";

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", vi.fn(function() {
    return {
      observe: vi.fn(),
      disconnect: vi.fn(),
      unobserve: vi.fn(),
    };
  }));
  vi.stubGlobal("matchMedia", vi.fn(() => ({
    matches: false,
    media: "",
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })));
});

describe("ScrollReveal", () => {
  it("renders children", () => {
    const { getByText } = render(<ScrollReveal>Hello</ScrollReveal>);
    expect(getByText("Hello")).toBeDefined();
  });

  it("renders as custom element", () => {
    const { container } = render(<ScrollReveal as="section">Content</ScrollReveal>);
    expect(container.querySelector("section")).not.toBeNull();
  });

  it("applies hidden styles initially", () => {
    const { container } = render(<ScrollReveal variant="fade-up">Content</ScrollReveal>);
    const el = container.firstElementChild as HTMLElement;
    expect(el.style.opacity).toBe("0");
  });
});
