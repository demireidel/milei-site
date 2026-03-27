import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ExpandableSection } from "../ExpandableSection";

describe("ExpandableSection", () => {
  it("renders label", () => {
    render(<ExpandableSection label="Test Section">Content</ExpandableSection>);
    expect(screen.getByText("Test Section")).toBeDefined();
  });

  it("toggles content visibility on click", () => {
    render(<ExpandableSection label="Test">Hidden content</ExpandableSection>);
    const button = screen.getByRole("button");
    expect(button.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");
  });

  it("generates a default ID via useId when none provided", () => {
    render(<ExpandableSection label="Test">Content</ExpandableSection>);
    const button = screen.getByRole("button");
    expect(button.getAttribute("aria-controls")).toBeTruthy();
  });
});
