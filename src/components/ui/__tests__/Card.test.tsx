import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "../Card";

describe("Card", () => {
  it("renders children", () => {
    const { getByText } = render(<Card>Hello Card</Card>);
    expect(getByText("Hello Card")).toBeDefined();
  });

  it("applies surface-card-accent class when accent prop is true", () => {
    const { container } = render(<Card accent={true}>Content</Card>);
    const cardEl = container.firstElementChild as HTMLElement;
    expect(cardEl.className).toContain("surface-card-accent");
  });

  it("applies surface-card class when accent prop is false", () => {
    const { container } = render(<Card accent={false}>Content</Card>);
    const cardEl = container.firstElementChild as HTMLElement;
    expect(cardEl.className).toContain("surface-card");
    expect(cardEl.className).not.toContain("surface-card-accent");
  });
});
