import React from "react";
import { DefaultLayout } from "@/components/layout/default-layout";
import { ProductListComponent } from "@/components/products";

const ProductPage = () => {
  return (
    <DefaultLayout>
      <ProductListComponent />
    </DefaultLayout>
  );
};

export default ProductPage;
