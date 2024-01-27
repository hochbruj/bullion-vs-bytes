import { PerformanceData } from "../types/rates";
import {
  numberToColor,
  numberToDollar,
  numberToPercent,
} from "../lib/formatters";

type Props = {
  performanceData: PerformanceData;
};

const CurrentTable = ({ performanceData }: Props) => {
  return (
    <table className="border bg-gray-50 rounded-lg overflow-hidden">
      <tbody>
        <tr className="border-b">
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <div className="flex items-center">
              <img
                src="/assets/bitcoin.png"
                className="w-12 h-12 rounded-full mr-4"
                alt="Bitcoin icon"
              />
              <div className="text-xl font-bold">Bitcoin</div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-700">
            {numberToDollar(performanceData.current.BTC)}
          </td>
          <td
            className={`py-4 pr-6 whitespace-nowrap text-lg text-${numberToColor(
              performanceData.recent.DAY.BTC
            )}-600`}
          >
            {numberToPercent(performanceData.recent.DAY.BTC)}
          </td>
        </tr>
        <tr className="border-b">
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <div className="flex items-center">
              <img
                src="/assets/gold.png"
                className="w-12 h-12 rounded-full mr-4"
                alt="Gold icon"
              />
              <div className="text-xl font-bold">Gold</div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-700">
            {numberToDollar(performanceData.current.AU)} / oz
          </td>
          <td
            className={`py-4 pr-6 whitespace-nowrap text-lg text-${numberToColor(
              performanceData.recent.DAY.AG
            )}-600`}
          >
            {numberToPercent(performanceData.recent.DAY.AU)}
          </td>
        </tr>
        <tr className="border-b">
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <div className="flex items-center">
              <img
                src="/assets/ethereum.png"
                className="w-12 h-12 rounded-full mr-4"
                alt="Ethereum icon"
              />
              <div className="text-xl font-bold">Ethereum</div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-700">
            {numberToDollar(performanceData.current.ETH)}
          </td>
          <td
            className={`py-4 pr-6 whitespace-nowrap text-lg text-${numberToColor(
              performanceData.recent.DAY.ETH
            )}-600`}
          >
            {numberToPercent(performanceData.recent.DAY.ETH)}
          </td>
        </tr>
        <tr className="border-b">
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <div className="flex items-center">
              <img
                src="/assets/silver.png"
                className="w-12 h-12 rounded-full mr-4"
                alt="Silver icon"
              />
              <div className="text-xl font-bold">Silver</div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-700">
            {numberToDollar(performanceData.current.AG, 2)} / oz
          </td>
          <td
            className={`py-4 pr-6 whitespace-nowrap text-lg text-${numberToColor(
              performanceData.recent.DAY.AG
            )}-600`}
          >
            {numberToPercent(performanceData.recent.DAY.AG)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CurrentTable;
