import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  AnnualizedReturns,
  MinMax,
  PerformanceData,
  RecentReturns,
} from "../types/rates";
import { performanceToChart } from "../lib/formatters";

type Props = {
  data: AnnualizedReturns | RecentReturns;
  width: string;
  minMax: MinMax;
};

const CustomTooltip = ({ active, payload }) => {
  const tooltipStyle = {
    backgroundColor: "white", // White background
    border: "1px solid black", // Black border
    padding: "8px", // Adjust padding as needed
  };
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={tooltipStyle}>
        {payload.map((entry, index) => (
          <p
            key={index}
            className="custom-tooltip-item"
            style={{ color: entry.color }} // Apply the color from payload
          >
            <span className="custom-tooltip-label">{entry.name}: </span>
            <span className="custom-tooltip-value">{entry.value}%</span>
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const yAxisFormatter = (value) => `${value}%`;

const PerformanceChart = ({ data, width, minMax }: Props) => {
  const { minValue, maxValue } = minMax;
  return (
    <>
      <div style={{ width, height: "500px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={performanceToChart(data)}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              tickFormatter={yAxisFormatter}
              domain={[minValue, maxValue]}
            />
            <Tooltip content={<CustomTooltip active='' payload='' />} />
            <Bar dataKey="Bitcoin" fill="#F7931A" />
            <Bar dataKey="Gold" fill="gold" />
            <Bar dataKey="Ethereum" fill="#5E8DF7" />
            <Bar dataKey="Silver" fill="silver" />
            <Bar dataKey="S&P 500" fill="green" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PerformanceChart;
