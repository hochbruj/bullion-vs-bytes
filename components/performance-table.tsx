import { AnnualizedReturns, RecentReturns } from "../types/rates";
import { performanceToChart } from "../lib/formatters";

type Props = {
  data: AnnualizedReturns | RecentReturns;
};

const keyColorMap = {
  Bitcoin: "bg-orange-400",
  Gold: "bg-amber-300",
  Ethereum: "bg-blue-500",
  Silver: "bg-stone-400",
  'S&P 500': 'bg-green-700'
};

const PerformanceTable = ({ data }: Props) => {
  const tableData = performanceToChart(data);
  const keys = Object.keys(tableData[0]).slice(1);
  return (
    <div className="container mx-auto">
      <table className="mt-4 border-collapse border-t border-b border-grey-300">
        <tbody>
          {keys.map((key) => (
            <tr
              key={key + tableData[0].name}
              className="border-t border-b border-grey-300 hover:bg-gray-100"
            >
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 ${keyColorMap[key]} rounded-full mr-2`}
                  ></div>
                  <span>{key}</span>
                </div>
              </td>
              {tableData.map((e) => (
                <td className="w-32 text-center">{e[key]}%</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceTable;
