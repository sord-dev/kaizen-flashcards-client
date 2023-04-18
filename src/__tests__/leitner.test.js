import { describe, it, expect } from 'vitest'
import { getNextReviewDate } from '../utils'

describe("getNextReviewDate", () => {
  describe("when the card is new", () => {
    it("returns the current date", () => {
      const currentDate = new Date("2023-04-14");
      const result = getNextReviewDate(0, currentDate);
      const expected = new Date("2023-04-14");
      expect(result).toEqual(expected);
    });
  });

  describe("when the card is bad", () => {
    it("returns tomorrow's date", () => {
      const currentDate = new Date("2023-04-14");
      const result = getNextReviewDate(1, currentDate);
      const expected = new Date("2023-04-15");
      expect(result).toEqual(expected);
    });
  });

  describe("when the card is ok", () => {
    it("returns a date 3 days from now", () => {
      const currentDate = new Date("2023-04-14");
      const result = getNextReviewDate(2, currentDate);
      const expected = new Date("2023-04-17");
      expect(result).toEqual(expected);
    });
  });

  describe("when the card is good", () => {
    it("returns a date 6 days from now", () => {
      const currentDate = new Date("2023-04-14");
      const result = getNextReviewDate(3, currentDate);
      const expected = new Date("2023-04-20");
      expect(result).toEqual(expected);
    });
  });
});

