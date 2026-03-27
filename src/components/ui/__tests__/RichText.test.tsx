import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { RichText } from "../RichText";

describe("RichText", () => {
  it("renders plain text without markup", () => {
    const { container } = render(<RichText text="Hello world" />);
    expect(container.textContent).toBe("Hello world");
  });

  it("renders **bold** as <strong>", () => {
    const { container } = render(<RichText text="This is **bold** text" />);
    const strong = container.querySelector("strong");
    expect(strong).not.toBeNull();
    expect(strong?.textContent).toBe("bold");
  });

  it("handles multiple bold segments", () => {
    const { container } = render(<RichText text="**one** and **two**" />);
    const strongs = container.querySelectorAll("strong");
    expect(strongs).toHaveLength(2);
  });
});
