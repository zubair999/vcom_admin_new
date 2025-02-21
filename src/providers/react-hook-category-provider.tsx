"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CategorySchema } from "@/zod/categories";

interface ReactHookProviderProps {
  children: React.ReactNode;
}

export const ReactHookCategoryFormProvider: React.FC<
  ReactHookProviderProps
> = ({ children }) => {
  const methods = useForm({ resolver: zodResolver(CategorySchema) });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
