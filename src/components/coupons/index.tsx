"use client";
import * as React from "react";
import { Category } from "@/types";
import { DataTable } from "@/components/data-table";
import { useDataTable } from "@/components/data-table/useDataTable";
import { categoriesListColumns as columns } from "./components/columns";
import { Toolbar } from "./components/toolbar";

export function CategoriesListComponent() {
  const data: Category[] = [
    {
      id: "p1",
      name: "Apple iPhone 14",
      category: "Smartphones",
      price: 799,
      stock: 120,
    },
    {
      id: "p2",
      name: "Samsung Galaxy S23",
      category: "Smartphones",
      price: 899,
      stock: 200,
    },
    {
      id: "p3",
      name: "MacBook Air M2",
      category: "Laptops",
      price: 1199,
      stock: 85,
    },
    {
      id: "p4",
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: 349,
      stock: 60,
    },
    {
      id: "p5",
      name: "Dell XPS 13",
      category: "Laptops",
      price: 1299,
      stock: 45,
    },
  ];

  const { table } = useDataTable(data, columns);

  return (
    <div className="w-full px-2">
      <Toolbar table={table} />
      <DataTable<Category> table={table} columns={columns} />
    </div>
  );
}
