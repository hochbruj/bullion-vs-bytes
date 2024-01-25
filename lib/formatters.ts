export const numberToDollar = (number, digits = 0) => {
  const roundedNumber = parseFloat(number.toFixed(digits));
  return roundedNumber.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
};

export const numberToPercent = (number, decimalPlaces = 2) => {
  // Multiply the number by 100 and round it to the specified decimal places
  console.log(number);
  console.log(typeof number);
  const roundedPercentage = (number * 100).toFixed(decimalPlaces);
  const plusSign = number >= 0 ? "+" : "";
  return `${plusSign}${roundedPercentage}%`;
};

export const numberToColor = (number): string => {
  return number < 0 ? "red" : "green";
};
