"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  Tag,
  Eye,
  BarChart,
  Package,
  CheckCircle,
} from "lucide-react";

const cardData = [
  {
    title: "Total Orders",
    value: "₹45,231.89",
    change: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    title: "Total Products",
    value: "2350",
    change: "+180.1% from last month",
    icon: Users,
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19% from last month",
    icon: CreditCard,
  },
  {
    title: "Active Now",
    value: "+573",
    change: "+201 since last hour",
    icon: Activity,
  },
  {
    title: "Total Coupons",
    value: "1500",
    change: "+5% from last month",
    icon: Tag,
  },
  {
    title: "Order Summary",
    value: "1,200 orders processed",
    change: "+10% from last month",
    icon: Package,
  },
  {
    title: "Total Visitors",
    value: "25,000",
    change: "+10% from last month",
    icon: Eye,
  },
  {
    title: "Total Campaigns",
    value: "50",
    change: "+12 from last month",
    icon: BarChart,
  },
  {
    title: "Paused Campaigns",
    value: "5",
    change: "-2 from last month",
    icon: CheckCircle,
  },
  {
    title: "Active Campaigns",
    value: "30",
    change: "+5 from last month",
    icon: BarChart,
  },
  {
    title: "Completed Campaigns",
    value: "15",
    change: "+3 from last month",
    icon: CheckCircle,
  },
  {
    title: "Top Products",
    value: "4",
    change: "Trending",
    icon: Tag,
  },
];

export const MultipleCard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {cardData.map((card, index) => (
        <Card key={index} x-chunk={`dashboard-01-chunk-${index}`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">{card.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
