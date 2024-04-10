import { PerformanceData } from "../types/rates";
import {
  numberToColor,
  numberToDollar,
  numberToPercent,
} from "../lib/formatters";

type Props = {
  performanceData: PerformanceData;
};

const changeRow = (change: number): any => {
  return change < 0 ? (
    <td className={`py-4 pr-6 whitespace-nowrap text-lg text-red-600`}>
      {numberToPercent(change)}
    </td>
  ) : (
    <td className={`py-4 pr-6 whitespace-nowrap text-lg text-green-600`}>
      {numberToPercent(change)}
    </td>
  );
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
          {changeRow(performanceData.recent.DAY.BTC)}
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
          {changeRow(performanceData.recent.DAY.AU)}
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
          {changeRow(performanceData.recent.DAY.ETH)}
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
          {changeRow(performanceData.recent.DAY.AG)}
        </tr>
      </tbody>
    </table>
  );
};

export default CurrentTable;
