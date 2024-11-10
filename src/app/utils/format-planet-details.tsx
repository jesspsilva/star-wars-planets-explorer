import Badge from "@/app/components/badge/badge";
import { EPlanetClimates } from "@/app/types/climates";
import { EPlanetTerrains } from "@/app/types/terrains";
import getClimateColor from "@/app/utils/climates-colors";
import getTerrainColor from "@/app/utils/terrains-colors";

import IconWithTooltip from "../components/icon-with-tooltip/icon-with-tooltip";

import { formatNumericValue } from "./format-numeric-values";
import { planetDetailsConfig } from "./planet-details-config";

export const formatPlanetDetails = (
  value: string | null | undefined,
  key: string,
  isDesktop = false
) => {
  if (value === null || value === undefined) return "-";

  if (key === "name") {
    return value;
  }

  if (key === "terrain" || key === "climate") {
    const valuesArray = value.split(",").map((val) => val.trim());

    return (
      <div className="flex gap-2 flex-wrap lg:justify-start justify-end">
        {valuesArray.map((val: string) => {
          return (
            <Badge
              label={val}
              key={val}
              colors={
                key === "terrain"
                  ? getTerrainColor(val as EPlanetTerrains)
                  : getClimateColor(val as EPlanetClimates)
              }
            />
          );
        })}
      </div>
    );
  }

  if (value === "unknown") {
    return isDesktop ? <IconWithTooltip tooltipText="Unknown" /> : "Unknown";
  }

  const header = planetDetailsConfig.find((config) => config.key === key);
  const unit = header ? header.unit : "";

  return formatNumericValue(value as string, unit);
};
