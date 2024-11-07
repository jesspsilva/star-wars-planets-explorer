import { EPlanetTerrains } from "@/app/types/terrains";

import type { IPlanateDetailsColors } from "@/app/types/colors";

export default function getTerrainStyles(
  terrain: EPlanetTerrains
): IPlanateDetailsColors {
  const terrainColorStyles: {
    [key in EPlanetTerrains]: IPlanateDetailsColors;
  } = {
    [EPlanetTerrains.DESERT]: { border: "#B87A33", background: "#FFF1E6" },
    [EPlanetTerrains.ACID_POOLS]: { border: "#8B8F40", background: "#FAFBD9" },
    [EPlanetTerrains.CLIFFS]: { border: "#8B6343", background: "#F4E5D7" },
    [EPlanetTerrains.SAVANNAHS]: { border: "#A28023", background: "#FEF6E1" },
    [EPlanetTerrains.ROCK]: { border: "#6B6B6B", background: "#EFE2C1" },
    [EPlanetTerrains.MOUNTAINS]: { border: "#021807", background: "#B5BBB6" },
    [EPlanetTerrains.SCRUBLANDS]: { border: "#4A6B8C", background: "#EAF0F6" },
    [EPlanetTerrains.GLACIERS]: { border: "#66B3DC", background: "#EBF2F7" },
    [EPlanetTerrains.CANYONS]: { border: "#B85F33", background: "#FFEEE6" },
    [EPlanetTerrains.TUNDRA]: { border: "#75A1BF", background: "#F5FAFF" },
    [EPlanetTerrains.ROCKY_CANYONS]: {
      border: "#94563B",
      background: "#F9E5DB",
    },
    [EPlanetTerrains.FUNGUS_FORESTS]: {
      border: "#8B4B8B",
      background: "#F6E6F6",
    },
    [EPlanetTerrains.JUNGLES]: { border: "#2D7A2D", background: "#E6F4E6" },
    [EPlanetTerrains.SAVANNAS]: { border: "#B88C33", background: "#FFF3E6" },
    [EPlanetTerrains.CITYSCAPE]: { border: "#4A6B8C", background: "#EAF0F6" },
    [EPlanetTerrains.GRASSY_HILLS]: {
      border: "#5C8C33",
      background: "#F0F9E6",
    },
    [EPlanetTerrains.SEAS]: { border: "#374954", background: "#E2F1F7" },
    [EPlanetTerrains.ROCKY_DESERTS]: {
      border: "#6A5134",
      background: "#D1CAC3",
    },
    [EPlanetTerrains.BARREN]: { border: "#DC904A", background: "#F3DBC4" },
    [EPlanetTerrains.AIRLESS_ASTEROID]: {
      border: "#595959",
      background: "#E6E6E6",
    },
    [EPlanetTerrains.FIELDS]: { border: "#8C8C33", background: "#F9F9E6" },
    [EPlanetTerrains.CAVES]: { border: "#404040", background: "#E0E0E0" },
    [EPlanetTerrains.SWAMPS]: { border: "#3B4D33", background: "#E8EDE6" },
    [EPlanetTerrains.ASH]: { border: "#000", background: "#D3D2D1" },
    [EPlanetTerrains.CITIES]: { border: "#595959", background: "#E6E6E6" },
    [EPlanetTerrains.MESAS]: { border: "#B85F33", background: "#FFEEE6" },
    [EPlanetTerrains.MOUNTAIN_RANGES]: {
      border: "#4D6666",
      background: "#E6EDED",
    },
    [EPlanetTerrains.URBAN]: { border: "#313030", background: "#C2BFBF" },
    [EPlanetTerrains.PLAINS]: { border: "#8C7A33", background: "#F9F4E6" },
    [EPlanetTerrains.VERDANT]: { border: "#2D7A3D", background: "#E6F4E9" },
    [EPlanetTerrains.MOUNTAIN]: { border: "#595959", background: "#E6E6E6" },
    [EPlanetTerrains.GRASSLANDS]: { border: "#5C8C33", background: "#F0F9E6" },
    [EPlanetTerrains.PLATEAUS]: { border: "#8B563B", background: "#F9E5DB" },
    [EPlanetTerrains.VINES]: { border: "#4D3B1D", background: "#EDE8E3" },
    [EPlanetTerrains.VOLCANOES]: { border: "#E4270E", background: "#FFE6E3" },
    [EPlanetTerrains.ICE_CANYONS]: { border: "#6AA1BF", background: "#F0F9FF" },
    [EPlanetTerrains.TOXIC_CLOUDSEA]: {
      border: "#733373",
      background: "#F1E6F1",
    },
    [EPlanetTerrains.DESERTS]: { border: "#4E3315", background: "#E1CBBA" },
    [EPlanetTerrains.ICE_CAVES]: { border: "#6AA1BF", background: "#F0F9FF" },
    [EPlanetTerrains.ROCK_ARCHES]: { border: "#736659", background: "#F1EBE6" },
    [EPlanetTerrains.HILLS]: { border: "#4EBA3E", background: "#E9F4E6" },
    [EPlanetTerrains.ROCKY]: { border: "#654214", background: "#F0DED4" },
    [EPlanetTerrains.RIVERS]: { border: "#2D7AA6", background: "#E6F4FA" },
    [EPlanetTerrains.ROCKY_ISLANDS]: {
      border: "#8B6543",
      background: "#F9EDE6",
    },
    [EPlanetTerrains.JUNGLE]: { border: "#356635", background: "#F5F8F5" },
    [EPlanetTerrains.GAS_GIANT]: { border: "#4D7A8C", background: "#EAF4F7" },
    [EPlanetTerrains.VALLEYS]: { border: "#443D3D", background: "#EDEDED" },
    [EPlanetTerrains.SWAMP]: { border: "#3B4D33", background: "#E8EDE6" },
    [EPlanetTerrains.ISLANDS]: { border: "#BB7A08", background: "#E0D2BA" },
    [EPlanetTerrains.FORESTS]: { border: "#2D7A4D", background: "#E6F4EC" },
    [EPlanetTerrains.LAVA_RIVERS]: { border: "#9F190A", background: "#FFE6E3" },
    [EPlanetTerrains.REEFS]: { border: "#2D7A73", background: "#E6F4F2" },
    [EPlanetTerrains.BOGS]: { border: "#594D33", background: "#EDE9E6" },
    [EPlanetTerrains.OCEAN]: { border: "#2D7AA6", background: "#E6F4FA" },
    [EPlanetTerrains.LAKES]: { border: "#102C3D", background: "#D1E6F1" },
    [EPlanetTerrains.UNKNOWN]: { border: "#666873", background: "#EBECED" },
    [EPlanetTerrains.RAINFORESTS]: { border: "#094909", background: "#E8F1E8" },
    [EPlanetTerrains.OCEANS]: { border: "#103E58", background: "#C2D6DF" },
    [EPlanetTerrains.GRASS]: { border: "#5C8C33", background: "#F0F9E6" },
    [EPlanetTerrains.SINKHOLES]: { border: "#4D6659", background: "#EAF0ED" },
  };

  return (
    terrainColorStyles[terrain] || { border: "#666873", background: "#EBECED" }
  );
}
