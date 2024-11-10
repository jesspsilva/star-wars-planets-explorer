export const formatNumericValue = (
  value: string | number,
  unit: string = ""
) => {
  const numValue = Number(value);
  if (isNaN(numValue)) return "-";

  if (unit === "population") {
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 1,
    });
    return formatter.format(numValue);
  }

  if (unit === "km") {
    return new Intl.NumberFormat("en-US", {
      style: "unit",
      unit: "kilometer",
    }).format(numValue);
  }

  if (unit === "%") {
    return `${numValue}${unit}`.trim();
  }

  return `${numValue} ${unit}`.trim();
};
