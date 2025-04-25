import { describe, expect, test } from "vitest";
import { getHour, calculateTotal } from "../modules/hour";

describe("hour", () => {
  describe("base values", () => {
    describe("moon", () => {
      test("alone with value of 1", () => {
        expect(calculateTotal(1, 0, 0)).toBe(-1);
      });

      test("alone with value of 2", () => {
        expect(calculateTotal(2, 0, 0)).toBe(1);
      });
    });

    describe("sun", () => {
      test("alone with value of 1", () => {
        expect(calculateTotal(0, 1, 0)).toBe(1);
      });

      test("alone with value of 2", () => {
        expect(calculateTotal(0, 2, 0)).toBe(2);
      });
    });

    describe("earth", () => {
      test("alone with value of 1", () => {
        expect(calculateTotal(0, 0, 1)).toBe(3);
      });

      test("alone with value of 2", () => {
        expect(calculateTotal(0, 0, 2)).toBe(6);
      });
    });
  });

  describe("powers", () => {
    describe("moon", () => {
      test("when value of 1", () => {
        expect(calculateTotal(1, 1, 0)).toBe(1 + 1 - 2);
      });

      test("when value of 2", () => {
        expect(calculateTotal(2, 1, 0)).toBe((2 + 1) / 2);
      });
    });

    describe("sun", () => {
      test("when value of 1", () => {
        expect(calculateTotal(0, 1, 1)).toBe(1 + 0);
      });

      test("when value of 2", () => {
        expect(calculateTotal(0, 2, 1)).toBe(2 + 1 * 2 + 2);
      });
    });

    describe("earth", () => {
      test("when value of 1", () => {
        expect(calculateTotal(0, 0, 1)).toBe(1 + 2);
      });

      test("when value of 2", () => {
        expect(calculateTotal(0, 2, 1)).toBe(6);
      });
    });
  });

  describe("results", () => {
    test("mortin", () => {
      expect(getHour(1, 0, 0)).toBe("mortin");
    });

    test("aprenoon", () => {
      expect(getHour(0, 0, 1)).toBe("aprenoon");
    });

    test("soirning", () => {
      expect(getHour(0, 0, 0)).toBe("soirning");
    });

    test("nuight", () => {
      expect(getHour(0, 0, 2)).toBe("nuight");
    });
  });
});
