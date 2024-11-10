import { render, screen } from "@testing-library/react";

import { mockClimatesColors } from "@mocks/climates-colors";
import { mockTerrainColors } from "@mocks/terrains-colors";

import { formatPlanetDetails } from "./format-planet-details";

import type { IPlanateDetailsColors } from "@/app/types/colors";

jest.mock("@/app/utils/terrains-colors", () => mockTerrainColors);
jest.mock("@/app/utils/climates-colors", () => mockClimatesColors);

jest.mock("@/app/components/badge/badge", () => {
  return function MockBadge({ label, colors }: { label: string; colors: IPlanateDetailsColors }) {
    return (
      <div
        data-testid="mock-badge"
        data-label={label}
        data-colors={JSON.stringify(colors)}
      />
    );
  };
});

jest.mock("../components/icon-with-tooltip/icon-with-tooltip", () => {
  return function MockIconWithTooltip({
    tooltipText,
  }: {
    tooltipText: string;
  }) {
    return <div data-testid="mock-icon-tooltip" data-tooltip={tooltipText} />;
  };
});

describe("formatPlanetDetails", () => {
  it('should return "-" for null and undefined values', () => {
    expect(formatPlanetDetails(null, "key")).toBe("-");
    expect(formatPlanetDetails(undefined, "key")).toBe("-");
  });

  it("should return the name value as-is", () => {
    expect(formatPlanetDetails("Tatooine", "name")).toBe("Tatooine");
  });

  it("should render badges for single terrain", () => {
    render(formatPlanetDetails("desert", "terrain"));

    const badge = screen.getByTestId("mock-badge");
    expect(badge).toHaveAttribute("data-label", "desert");
    expect(JSON.parse(badge.getAttribute("data-colors") || "{}")).toEqual({
      background: "#FFF1E6",
      border: "#B87A33",
    });
  });

  it("should render multiple badges for comma-separated terrains", () => {
    render(formatPlanetDetails("desert, mountains, canyons", "terrain"));

    const badges = screen.getAllByTestId("mock-badge");
    expect(badges).toHaveLength(3);
    expect(badges[0]).toHaveAttribute("data-label", "desert");
    expect(badges[1]).toHaveAttribute("data-label", "mountains");
    expect(badges[2]).toHaveAttribute("data-label", "canyons");
  });

  it("should render badges for single climate", () => {
    render(formatPlanetDetails("arid", "climate"));

    const badge = screen.getByTestId("mock-badge");
    expect(badge).toHaveAttribute("data-label", "arid");
    expect(JSON.parse(badge.getAttribute("data-colors") || "{}")).toEqual({
      background: "#B5BBB6",
      border: "#021807",
    });
  });

  it("should render multiple badges for comma-separated climates", () => {
    render(formatPlanetDetails("arid, temperate, tropical", "climate"));

    const badges = screen.getAllByTestId("mock-badge");
    expect(badges).toHaveLength(3);
    expect(badges[0]).toHaveAttribute("data-label", "arid");
    expect(badges[1]).toHaveAttribute("data-label", "temperate");
    expect(badges[2]).toHaveAttribute("data-label", "tropical");
  });

  it("should render IconWithTooltip for unknown value on desktop", () => {
    render(formatPlanetDetails("unknown", "population", true));

    const icon = screen.getByTestId("mock-icon-tooltip");
    expect(icon).toHaveAttribute("data-tooltip", "Unknown");
  });

  it('should render "Unknown" text for unknown value on mobile', () => {
    expect(formatPlanetDetails("unknown", "population", false)).toBe("Unknown");
  });

  describe("numeric value formatting", () => {
    beforeEach(() => {
      jest.mock("./planet-details-config", () => ({
        planetDetailsConfig: [
          { key: "population", unit: "people" },
          { key: "diameter", unit: "km" },
        ],
      }));
    });

    it("should format numeric values with appropriate units", () => {
      const formattedValue = formatPlanetDetails("1000000", "population");
      expect(formattedValue).toContain("1M");
    });

    it("should handle numeric values without units", () => {
      const formattedValue = formatPlanetDetails("42", "unknown-key");
      expect(formattedValue).toBe("42");
    });
  });
});
