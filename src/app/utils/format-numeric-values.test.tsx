import { formatNumericValue } from './format-numeric-values';

describe("formatNumericValue", () => {
  describe("population unit", () => {
    it("formats population in trillions", () => {
      expect(formatNumericValue(1e12, "population")).toBe("1T");
      expect(formatNumericValue(1.5e12, "population")).toBe("1.5T");
    });

    it("formats population in billions", () => {
      expect(formatNumericValue(1e9, "population")).toBe("1B");
      expect(formatNumericValue(2.3e9, "population")).toBe("2.3B");
    });

    it("formats population in millions", () => {
      expect(formatNumericValue(1e6, "population")).toBe("1M");
      expect(formatNumericValue(4.7e6, "population")).toBe("4.7M");
    });

    it("formats population in thousands", () => {
      expect(formatNumericValue(1e3, "population")).toBe("1K");
      expect(formatNumericValue(9.9e3, "population")).toBe("9.9K");
    });

    it("formats population below 1000 without abbreviation", () => {
      expect(formatNumericValue(500, "population")).toBe("500");
    });
  });

  describe("kilometers unit (km)", () => {
    it("formats number in kilometers with locale formatting", () => {
      expect(formatNumericValue(1234, "km")).toBe("1,234 km");
    });
  });

  describe("percentage unit (%)", () => {
    it("adds '%' symbol to number", () => {
      expect(formatNumericValue(85, "%")).toBe("85%");
      expect(formatNumericValue(99.9, "%")).toBe("99.9%");
    });
  });

  describe("default unit", () => {
    it("returns number with given unit appended", () => {
      expect(formatNumericValue(50, "days")).toBe("50 days");
      expect(formatNumericValue(100, "mL")).toBe("100 mL");
    });

    it("trims unnecessary spaces if no unit is provided", () => {
      expect(formatNumericValue(75)).toBe("75");
    });
  });

  it("handles string numbers and converts them correctly", () => {
    expect(formatNumericValue("12345", "population")).toBe("12.3K");
  });

  it("returns '-' for non-numeric values", () => {
    expect(formatNumericValue("abc")).toBe("-");
  });
});
