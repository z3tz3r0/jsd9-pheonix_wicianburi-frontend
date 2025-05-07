import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "var(--color-chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--color-chart-2)",
  },
};

function ChartAreaInteractive({ timeRange, timeRangeOptions, chartData }) {

  const filteredData = React.useMemo(() => {
    if (!chartData) return [];

    const referenceDate = new Date("2024-06-30");
    if (timeRange === "all") return chartData;

    let daysToSubtract;
    switch (timeRange) {
      case "12m":
        daysToSubtract = 365;
        break;
      case "30d":
        daysToSubtract = 30;
        break;
      case "7d":
        daysToSubtract = 7;
        break;
      default:
        return chartData;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return chartData.filter((item) => {
      const date = new Date(item.date);
      return date >= startDate && date <= referenceDate;
    });
  }, [timeRange, chartData]) // Recalculate when timeRange or chartData changes


  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Total Visitors</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:block hidden">
            Showing data for: {timeRangeOptions.find(opt => opt.value === timeRange)?.label || 'Selected Period'}
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    try {
                      // Assuming value is always "YYYY-MM-DD"
                      const [year, month, day] = value.split("-").map(Number);
                      // Note: JavaScript months are 0-indexed (0=Jan, 11=Dec)
                      const dateObj = new Date(year, month - 1, day);
                      if (isNaN(dateObj.getTime())) {
                        // Check if the date is valid
                        console.error(
                          "Resulting dateObj is invalid for value:",
                          value
                        );
                        return "Invalid Date";
                      }
                      return dateObj.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                    } catch (e) {
                      console.error(
                        "Error parsing date for tooltip:",
                        value,
                        e
                      );
                      return "Invalid Date"; // Fallback
                    }
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}


export default ChartAreaInteractive;