import React from "react";
import { DefaultLayout } from "@/components/layout/default-layout";
import { CategoriesListComponent } from "@/components/categories";

const CategoriesPage = () => {
  return (
    <DefaultLayout>
      <CategoriesListComponent />
    </DefaultLayout>
  );
};

export default CategoriesPage;
