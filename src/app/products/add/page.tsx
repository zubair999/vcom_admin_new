import React from "react";
import { DefaultLayout } from "@/components/layout/default-layout";
import MyForm from "@/components/products/add";

const AddProductPage: React.FC = () => {
  return (
    <DefaultLayout>
      <MyForm />
    </DefaultLayout>
  );
};

export default AddProductPage;
