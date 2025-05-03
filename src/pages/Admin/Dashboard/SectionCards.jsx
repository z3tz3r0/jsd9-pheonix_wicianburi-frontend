import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const getCardDataForRange = (range) => {
  console.log("Fetching/calculating card data for range:", range);
  // In a real app, fetch data from an API or process existing data
  // based on the 'range' (e.g., 'all', '12m', '30d', '7d')
  // Return mock data for now:
  if (range === '7d') {
    return {
      totalRevenue: { value: "$150.00", change: "+5.2%", trend: "up", periodDesc: "last 7 days" },
      newCustomers: { value: "85", change: "-10%", trend: "down", periodDesc: "last 7 days" },
      activeAccounts: { value: "45,100", change: "+1.5%", trend: "up", periodDesc: "last 7 days" },
    };
  } else if (range === '30d') {
    return {
      totalRevenue: { value: "$1,250.00", change: "+12.5%", trend: "up", periodDesc: "last 30 days" },
      newCustomers: { value: "1,234", change: "-20%", trend: "down", periodDesc: "last 30 days" },
      activeAccounts: { value: "45,678", change: "+12.5%", trend: "up", periodDesc: "last 30 days" },
    };
  }
  // Add cases for '12m' and 'all'
  return { // Default/All time mock data
    totalRevenue: { value: "$15,000.00", change: "+8.0%", trend: "up", periodDesc: "all time" },
    newCustomers: { value: "5,500", change: "+15%", trend: "up", periodDesc: "all time" },
    activeAccounts: { value: "50,000", change: "+10%", trend: "up", periodDesc: "all time" },
  };
};


function SectionCards({ timeRange }) {
  const [cardData, setCardData] = React.useState(getCardDataForRange(timeRange));
  React.useEffect(() => {
    // Update card data when timeRange changes
    const newData = getCardDataForRange(timeRange);
    setCardData(newData);
  }, [timeRange]); // Dependency array includes timeRange

  // Use cardData to render dynamic values
  const { totalRevenue, newCustomers, activeAccounts } = cardData;
  return (
    <div className="*:data-[slot=card]:shadow-xs @2xl/main:grid-cols-3 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      {/* Total Revenue Card */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {totalRevenue.value} {/* Dynamic Value */}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 text-xs rounded-lg">
              {totalRevenue.trend === 'up' ? <TrendingUpIcon className="size-3" /> : <TrendingDownIcon className="size-3" />}
              {totalRevenue.change} {/* Dynamic Change */}
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium line-clamp-1">
            {totalRevenue.trend === 'up' ? "Trending up" : "Trending down"} {/* Dynamic Text */}
            {totalRevenue.trend === 'up' ? <TrendingUpIcon className="size-4" /> : <TrendingDownIcon className="size-4" />}
          </div>
          <div className="text-muted-foreground">
            For the {totalRevenue.periodDesc} {/* Dynamic Period */}
          </div>
        </CardFooter>
      </Card>

      {/* New Customers Card (Apply similar dynamic updates) */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>New Customers</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {newCustomers.value}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 text-xs rounded-lg">
              {newCustomers.trend === 'up' ? <TrendingUpIcon className="size-3" /> : <TrendingDownIcon className="size-3" />}
              {newCustomers.change}
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium line-clamp-1">
            {newCustomers.trend === 'up' ? "Trending up" : "Trending down"}
            {newCustomers.trend === 'up' ? <TrendingUpIcon className="size-4" /> : <TrendingDownIcon className="size-4" />}
          </div>
          <div className="text-muted-foreground">
            For the {newCustomers.periodDesc}
          </div>
        </CardFooter>
      </Card>

      {/* Active Accounts Card (Apply similar dynamic updates) */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {activeAccounts.value}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 text-xs rounded-lg">
              {activeAccounts.trend === 'up' ? <TrendingUpIcon className="size-3" /> : <TrendingDownIcon className="size-3" />}
              {activeAccounts.change}
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium line-clamp-1">
            {activeAccounts.trend === 'up' ? "Trending up" : "Trending down"}
            {activeAccounts.trend === 'up' ? <TrendingUpIcon className="size-4" /> : <TrendingDownIcon className="size-4" />}
          </div>
          <div className="text-muted-foreground">
            For the {activeAccounts.periodDesc}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SectionCards;