"use client";
import * as React from "react";
import { Brand } from "@/types";
import { DataTable } from "@/components/data-table";
import { useDataTable } from "@/components/data-table/useDataTable";
import { categoriesListColumns as columns } from "./components/columns";
import { Toolbar } from "./components/toolbar";

export function TemplateListComponent() {
  const data: Brand[] = [
    {
      id: "p1",
      brand_name: "Template 1",
      description: "brand 1 description",
      vendor_id: 1,
    },
    {
      id: "p2",
      brand_name: "Template 2",
      description: "brand 2 description",
      vendor_id: 2,
    },
  ];

  const { table } = useDataTable(data, columns);

  return (
    <div className="w-full px-2">
      <Toolbar table={table} />
      <DataTable<Brand> table={table} columns={columns} />
    </div>
  );
}
