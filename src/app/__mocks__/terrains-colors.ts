export const mockTerrainColors = jest.fn((terrain: string) => {
  const terrainColorStyles: {
    [key: string]: { border: string; background: string };
  } = {
    desert: { border: "#B87A33", background: "#FFF1E6" },
  };
  return (
    terrainColorStyles[terrain.toLowerCase()] || {
      border: "#666873",
      background: "#EBECED",
    }
  );
});
