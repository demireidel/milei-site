import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Footer } from "../Footer";

vi.mock("next/link", () => ({
  default: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));

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

describe("Footer", () => {
  it("renders footer navigation", () => {
    render(<Footer />);
    expect(screen.getByRole("navigation", { name: /navegación del pie de página/i })).toBeDefined();
  });

  it("marks the flag as decorative with aria-hidden", () => {
    const { container } = render(<Footer />);
    const flag = container.querySelector("[aria-hidden='true']");
    expect(flag).not.toBeNull();
  });
});
