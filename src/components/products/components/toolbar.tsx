"use client";
import * as React from "react";
import { ChevronDown, CirclePlus } from "lucide-react";
import { type Table as TableType } from "@tanstack/table-core";
import Link from "next/link";
import {
  Button,
  Input,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components";
import { useUI } from "@/contexts/ui-contenxt";

type DataTableProps<T> = {
  table: TableType<T>;
};

export const Toolbar = <T,>({ table }: DataTableProps<T>) => {
  const { openDrawer } = useUI();

  return (
    <div className="flex flex-row justify-between items-center py-4">
      <div>
        <Input
          placeholder="Filter product names..."
          value={""}
          onChange={(e) => console.log(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="flex flex-row items-center gap-2">
        <div>
          <Link href={"/products/add"}>
            <CirclePlus />
          </Link>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto flex items-center space-x-2"
            >
              <span>Columns</span> <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
