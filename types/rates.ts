import { number } from "prop-types";

export type PmRates = {
  AG: number;
  AU: number;
};

export type CryptoRates = {
  BTC: number;
  ETH: number;
};

export type Rates = PmRates & CryptoRates;

export type RecentReturns = {
  "3M": Rates;
  YTD: Rates;
  DAY: Rates;
};

export type AnnualizedReturns = {
  "1Y": Rates;
  "3Y": Rates;
  "5Y": Rates;
  "7Y": Rates;
};

export type PerformanceTime = "1Y" | "3Y" | "5Y" | "7Y" | "3M" | "YTD" | "DAY";

export type PerformanceData = {
  current: Rates;
  annualized: AnnualizedReturns;
  recent: RecentReturns;
};

export type MinMax = {
  minValue: number;
  maxValue: number;
};
