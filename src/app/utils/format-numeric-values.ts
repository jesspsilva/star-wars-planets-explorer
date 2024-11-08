export const formatNumericValue = (
  value: string | number | null | undefined,
  unit: string = ""
) => {
  const numValue = Number(value);
  if (isNaN(numValue)) return "-";

  if (unit === "population") {
    if (numValue >= 1e12) return (numValue / 1e12).toFixed(1) + "T"; // Trillions
    if (numValue >= 1e9) return (numValue / 1e9).toFixed(1) + "B"; // Billions
    if (numValue >= 1e6) return (numValue / 1e6).toFixed(1) + "M"; // Millions
    if (numValue >= 1e3) return (numValue / 1e3).toFixed(1) + "K"; // Thousands
  }

  if (unit === "km") {
    return new Intl.NumberFormat('pt-PT', { 
      style: 'unit', 
      unit: 'kilometer'
    }).format(numValue);
  }

  return `${numValue} ${unit}`.trim();
};
