import { chartData } from "@/data/chartData";
import { useState } from "react";
import ChartAreaInteractive from "./Dashboard/ChartAreaInteractive";
import SectionCards from "./Dashboard/SectionCards";
import TimeRangeSelector from "./Dashboard/TimeRangeSelector";

const timeRangeOptions = [
  { value: "all", label: "All time" },
  { value: "12m", label: "12 months" },
  { value: "30d", label: "30 days" },
  { value: "7d", label: "7 days" },
]

export default function AdminDashboard() {

  const [timeRange, setTimeRange] = useState(timeRangeOptions[0].value);


  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <TimeRangeSelector
          options={timeRangeOptions}
          currentTimeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />
        <SectionCards timeRange={timeRange} />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive timeRange={timeRange} timeRangeOptions={timeRangeOptions} chartData={chartData} />
        </div>
      </div>
    </div>
  )
}
