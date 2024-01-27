import {
  AnnualizedReturns,
  MinMax,
  PerformanceData,
  RecentReturns,
} from "../types/rates";

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
  const roundedPercentage = (number * 100).toFixed(decimalPlaces);
  const plusSign = number >= 0 ? "+" : "";
  return `${plusSign}${roundedPercentage}%`;
};

export const numberToColor = (number): string => {
  return number < 0 ? "red" : "green";
};

export const performanceToChart = (data: AnnualizedReturns | RecentReturns) => {
  const result = Object.keys(data)
    .filter((e) => e !== "DAY")
    .map((e) => {
      const interval = data[e];
      if (e !== "DAY") {
        return {
          name: e === "3M" ? "3-MONTH" : e[1] === "Y" ? `${e[0]}YEAR` : e,
          Bitcoin: parseFloat((interval.BTC * 100).toFixed(2)),
          Gold: parseFloat((interval.AU * 100).toFixed(2)),
          Ethereum: parseFloat((interval.ETH * 100).toFixed(2)),
          Silver: parseFloat((interval.AG * 100).toFixed(2)),
        };
      }
    });
  return result;
};

export const getMaxMinChart = (performanceData: PerformanceData): MinMax => {
  const { recent, annualized } = performanceData;
  const totalValues = [recent, annualized].map((performance) =>
    Object.keys(performance)
      .filter((e) => e !== "DAY")
      .map((e) => [
        performance[e].BTC,
        performance[e].AU,
        performance[e].AG,
        performance[e].ETH,
      ])
  );
  const allValues = [].concat(...[].concat(...totalValues)).map((e) => e * 100);
  let minValue = 0;
  let maxValue = 0;
  for (const num of allValues) {
    if (num < 0 && num <= minValue) {
      minValue = Math.floor(num / 5) * 5;
    } else if (num > 0 && num >= maxValue) {
      maxValue = Math.ceil(num / 5) * 5;
    }
  }
  return { minValue, maxValue };
};
