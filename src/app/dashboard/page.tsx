"use client";
import { DefaultLayout } from "@/components/layout/default-layout";
import { MultipleCard } from "../../components/dashboard/multiple-card";
import { Transaction } from "../../components/dashboard/transaction";
import { RecentSales } from "../../components/dashboard/recent-sales";
import { Chart } from "../../components/dashboard/chart";

export const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <div className="flex min-h-screen w-full flex-col">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <MultipleCard />
            <div className="grid gap-4 md:gap-8 xl:grid-cols-2 2xl:grid-cols-3">
              <Transaction />
              <RecentSales />
              <Chart />
            </div>
          </main>
        </div>
      </div>
    </DefaultLayout>
  );
};
