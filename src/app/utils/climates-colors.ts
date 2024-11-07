import { EPlanetClimates } from "@/app/types/climates";

export default function getClimateStyles(climate: EPlanetClimates): string {
  const climateStyles: { [key in EPlanetClimates]: string } = {
    [EPlanetClimates.FRIGID]: "#A0D3E0",
    [EPlanetClimates.TROPICAL]: "#FFCC00",
    [EPlanetClimates.FROZEN]: "#E0F7FA",
    [EPlanetClimates.MOIST]: "#A8D8A0",
    [EPlanetClimates.POLLUTED]: "#B0B0B0",
    [EPlanetClimates.UNKNOWN]: "#B5B7C0",
    [EPlanetClimates.SUBARTIC]: "#A0C4D4",
    [EPlanetClimates.TEMPERATE]: "#A8D8E0",
    [EPlanetClimates.ARTIFICIAL_TEMPERATE]: "#D0E0D0",
    [EPlanetClimates.MURKY]: "#7D7D7D",
    [EPlanetClimates.HUMID]: "#A0D1E7",
    [EPlanetClimates.ARTIC]: "#E0F0F0",
    [EPlanetClimates.SUPERHEATED]: "#FF5733",
    [EPlanetClimates.HOT]: "#FF8C00",
    [EPlanetClimates.ROCKY]: "#B8B8B8",
    [EPlanetClimates.ARID]: "#D8CBA0",
    [EPlanetClimates.WINDY]: "#A0D3E0",
  };

  return climateStyles[climate] || "#B5B7C0";
}