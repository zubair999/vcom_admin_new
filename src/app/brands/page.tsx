import React from "react";
import { DefaultLayout } from "@/components/layout/default-layout";
import { BrandsListComponent } from "@/components/brands";

const BrandPage = () => {
  return (
    <DefaultLayout>
      <BrandsListComponent />
    </DefaultLayout>
  );
};

export default BrandPage;
