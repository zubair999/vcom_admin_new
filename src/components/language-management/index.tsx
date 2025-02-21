"use client";
import * as React from "react";
import { Language } from "@/types";
import { DataTable } from "@/components/data-table";
import { useDataTable } from "@/components/data-table/useDataTable";
import { languageListColumns as columns } from "./components/columns";
import { Toolbar } from "./components/toolbar";

export function LanguageListComponent() {
  const data: Language[] = [
    {
      id: "p1",
      name: "Apple iPhone 14",
      language: "Language 1",
      price: 799,
      stock: 120,
    },
    {
      id: "p1",
      name: "Apple iPhone 14",
      language: "Language 1",
      price: 799,
      stock: 120,
    },
  ];

  const { table } = useDataTable(data, columns);

  return (
    <div className="w-full px-2">
      <Toolbar table={table} />
      <DataTable<Language> table={table} columns={columns} />
    </div>
  );
}
