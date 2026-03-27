import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { NavBar } from "../NavBar";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

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
});

describe("NavBar", () => {
  it("renders the navigation", () => {
    render(<NavBar />);
    expect(screen.getByRole("navigation", { name: /navegación principal/i })).toBeDefined();
  });

  it("toggles mobile menu on hamburger click", () => {
    render(<NavBar />);
    const hamburger = screen.getByRole("button", { name: /abrir menú/i });
    fireEvent.click(hamburger);
    expect(screen.getByRole("navigation", { name: /menú móvil/i })).toBeDefined();
  });

  it("has aria-expanded on hamburger button", () => {
    render(<NavBar />);
    const hamburger = screen.getByRole("button", { name: /abrir menú/i });
    expect(hamburger.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(hamburger);
    expect(hamburger.getAttribute("aria-expanded")).toBe("true");
  });
});
