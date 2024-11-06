export const formatPopulation = (value: string) => {
  if (value === "unknown") return "Unknown";

  const numValue = Number(value);
  if (isNaN(numValue)) return "-";

  if (numValue >= 1e12) return (numValue / 1e12).toFixed(1) + "T"; // Trillions
  if (numValue >= 1e9) return (numValue / 1e9).toFixed(1) + "B"; // Billions
  if (numValue >= 1e6) return (numValue / 1e6).toFixed(1) + "M"; // Millions
  if (numValue >= 1e3) return (numValue / 1e3).toFixed(1) + "K"; // Thousands

  return numValue.toString(); // For values less than 1,000
};
