import {
    type SubmitHandler,
    Controller,
    useFormContext
  } from "react-hook-form";
import { Category } from "@/types";

export const useCategoryForm = () => {
    const methods = useFormContext<Category>();
      const { formState: { errors } } = methods;


      console.log(errors);

    const onSubmit: SubmitHandler<Category> = (data) => {
        console.log("Submitted");
        console.log(data);
      };

    return { methods, onSubmit,  Controller };

}