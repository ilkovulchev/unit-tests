import { expect, it, describe } from "vitest";
import { add } from "./math";

describe("add()", () => {
  it("Should summarize all number values in an array", () => {
    const result = add([1, 2, 3]);

    expect(result).toBe(6);
  });

  it("Should yield NaN if at least one invalid number is provided", () => {
    const result = add([1, 2, "invalid"]);

    expect(result).toBeNaN();
  });
});

describe("add2()", () => {
  it("Should yield a correct sym f an array of numeric string values is provided", () => {
    const result = add(["1", "2", "3"]);

    expect(result).toBe(6);
  });

  it("Should throw an error if no value is passed into the function", () => {
    const result = () => {
      add();
    };
    expect(result).toThrow();
  });

  it("Should throw an error if provided with multiple arguments instead of an array", () => {
    const result = () => {
      add(1, 2, 3);
    };
    expect(result).toThrow();
  });
});
