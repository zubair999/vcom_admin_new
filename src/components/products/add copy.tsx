"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";

type ProductFormInputs = {
  productName: string;
  price: string;
  category: string;
  stockStatus: string;
};

export const AddProductComponent: React.FC = () => {
  const { control, handleSubmit } = useForm<ProductFormInputs>();

  const onSubmit = (data: ProductFormInputs) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <h1 className="text-2xl font-bold">Add Product</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Controller
            name="productName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                placeholder="Product Name"
                className="border p-2"
              />
            )}
          />
          <Controller
            name="price"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input {...field} placeholder="Price" className="border p-2" />
            )}
          />
          <Controller
            name="category"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input {...field} placeholder="Category" className="border p-2" />
            )}
          />
          <Controller
            name="stockStatus"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                placeholder="Stock Status"
                className="border p-2"
              />
            )}
          />
          <button type="submit" className="bg-blue-500 text-white p-2">
            Add Product
          </button>
        </form>
      </main>
    </div>
  );
};
