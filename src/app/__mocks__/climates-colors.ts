export const mockClimatesColors = jest.fn((terrain: string) => {
  const climateColorStyles: {
    [key: string]: { border: string; background: string };
  } = {
    arid: { border: "#021807", background: "#B5BBB6" },
  };
  return (
    climateColorStyles[terrain.toLowerCase()] || {
      border: "#666873",
      background: "#EBECED",
    }
  );
});
