import { EPlanetClimates } from "@/app/types/climates";

import type { IPlanateDetailsColors } from "@/app/types/colors";

export default function getClimateStyles(
  climate: EPlanetClimates
): IPlanateDetailsColors {
  const climateColorStyles: {
    [key in EPlanetClimates]: IPlanateDetailsColors;
  } = {
    [EPlanetClimates.FRIGID]: {
      border: "#2B7A99",
      background: "#E6F4F9",
    },
    [EPlanetClimates.TROPICAL]: {
      border: "#B38600",
      background: "#FFF7E6",
    },
    [EPlanetClimates.FROZEN]: {
      border: "#4D8C99",
      background: "#F0FBFF",
    },
    [EPlanetClimates.MOIST]: {
      border: "#2D7A33",
      background: "#E6F4E7",
    },
    [EPlanetClimates.POLLUTED]: {
      border: "#595959",
      background: "#E6E6E6",
    },
    [EPlanetClimates.UNKNOWN]: {
      border: "#666873",
      background: "#EBECED",
    },
    [EPlanetClimates.SUBARTIC]: {
      border: "#2B6A8C",
      background: "#E6F0F6",
    },
    [EPlanetClimates.TEMPERATE]: {
      border: "#2B7A8C",
      background: "#E6F4F6",
    },
    [EPlanetClimates.ARTIFICIAL_TEMPERATE]: {
      border: "#4D8C4D",
      background: "#ECF6EC",
    },
    [EPlanetClimates.MURKY]: {
      border: "#404040",
      background: "#E0E0E0",
    },
    [EPlanetClimates.HUMID]: {
      border: "#2D7AA6",
      background: "#E6F4FA",
    },
    [EPlanetClimates.ARTIC]: {
      border: "#5999A6",
      background: "#F2FBFB",
    },
    [EPlanetClimates.SUPERHEATED]: {
      border: "#B32D0F",
      background: "#FFE6E0",
    },
    [EPlanetClimates.HOT]: {
      border: "#B35900",
      background: "#FFF0E6",
    },
    [EPlanetClimates.ROCKY]: {
      border: "#595959",
      background: "#E6E6E6",
    },
    [EPlanetClimates.ARID]: {
      border: "#8C7A33",
      background: "#F6F2E6",
    },
    [EPlanetClimates.WINDY]: {
      border: "#2B7A99",
      background: "#E6F4F9",
    },
  };

  return (
    climateColorStyles[climate] || { border: "#666873", background: "#EBECED" }
  );
}
