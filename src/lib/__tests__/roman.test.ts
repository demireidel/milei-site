import { describe, it, expect } from "vitest";
import { toRoman } from "../roman";

describe("toRoman", () => {
  it.each([
    [1, "I"], [2, "II"], [3, "III"], [4, "IV"], [5, "V"],
    [6, "VI"], [9, "IX"], [10, "X"], [14, "XIV"],
    [40, "XL"], [50, "L"], [90, "XC"], [100, "C"],
    [400, "CD"], [500, "D"], [900, "CM"], [1000, "M"],
    [2024, "MMXXIV"],
  ])("converts %i to %s", (input, expected) => {
    expect(toRoman(input)).toBe(expected);
  });

  it("returns string for non-positive numbers", () => {
    expect(toRoman(0)).toBe("0");
    expect(toRoman(-1)).toBe("-1");
  });
});
