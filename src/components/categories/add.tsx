"use client";
import * as React from "react";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components";
import { CategoryForm } from "./components/category-form";
import { useCategoryForm } from "./components/useCategoryForm";

export const AddCategoryComponent = () => {
  const { methods, onSubmit } = useCategoryForm();
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Card className="mx-2">
        <CardHeader>
          <CardTitle>Create category</CardTitle>
        </CardHeader>
        <CardContent className="grid w-1/2 items-center gap-4">
          <CategoryForm />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit">Save</Button>
        </CardFooter>
      </Card>
    </form>
  );
};
