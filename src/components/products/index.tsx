"use client";
import * as React from "react";
import { DataTable } from "@/components/data-table";
import { useDataTable } from "@/components/data-table/useDataTable";
import { productsListColumns as columns } from "./components/columns";
import { Toolbar } from "./components/toolbar";
import { Category } from "@/types";

export function ProductListComponent() {
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

  const p = [
    {
      "s.no": 1,
      image: "https://example.com/product1.jpg",
      name: "Sample Product 1",
      code: "SP001",
      quantity: 100,
      price: 29.99,
      status: "In Stock",
    },
    {
      "s.no": 2,
      image: "https://example.com/product2.jpg",
      name: "Sample Product 2",
      code: "SP002",
      quantity: 50,
      price: 49.99,
      status: "Out of Stock",
    },
    {
      "s.no": 3,
      image: "https://example.com/product3.jpg",
      name: "Sample Product 3",
      code: "SP003",
      quantity: 200,
      price: 19.99,
      status: "In Stock",
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
