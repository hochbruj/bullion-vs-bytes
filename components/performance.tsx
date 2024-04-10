import { getMaxMinChart } from "../lib/formatters";
import { PerformanceData } from "../types/rates";
import PerformanceChart from "./performance-chart";
import PerformanceTable from "./performance-table";

type Props = {
  performanceData: PerformanceData;
};
const Performance = ({ performanceData }: Props) => {
  const minMax = getMaxMinChart(performanceData);
  return (
    <>
      <h2 className="mb-12 mt-20 text-5xl font-bold tracking-tighter leading-tight">
        Performance
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="p-1 ">
          <h4 className="mb-12 text-lg text-center">Recent Returns</h4>
          <div className="ml-8">
            <PerformanceChart
              data={performanceData.recent}
              width="400px"
              minMax={minMax}
            />
          </div>
          <PerformanceTable data={performanceData.recent} />
        </div>
        {/* Column 2 */}
        <div className="p-1 col-span-1">
          <h4 className="mb-12 text-lg text-center">
            Average Annualized Returns
          </h4>
          <div className="ml-14">
            <PerformanceChart
              data={performanceData.annualized}
              width="600px"
              minMax={minMax}
            />
          </div>
          <PerformanceTable data={performanceData.annualized} />
        </div>
      </div>
    </>
  );
};

export default Performance;
