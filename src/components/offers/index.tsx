"use client";
import * as React from "react";
import { DataTable } from "@/components/data-table";
import { useDataTable } from "@/components/data-table/useDataTable";
import { categoriesListColumns as columns } from "./components/columns";
import { Toolbar } from "./components/toolbar";
import { Offer } from "@/types";

export function OffersListComponent() {
  const data: Offer[] = [
    {
      id: "p1",
      brand_name: "Offer 1",
      description: "Offer 2 description",
      vendor_id: 1,
    },
    {
      id: "p2",
      brand_name: "Offer 2",
      description: "Offer 2 descrtiption",
      vendor_id: 1,
    },
  ];

  const { table } = useDataTable(data, columns);

  return (
    <div className="w-full px-2">
      <Toolbar table={table} />
      <DataTable<Offer> table={table} columns={columns} />
    </div>
  );
}
