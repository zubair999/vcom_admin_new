import { z } from 'zod';
import { ImageSchema } from "@/zod";

export const CategorySchema = z.object({
    name: z.string().min(1, { message: "Category is required" }),
    description: z.string().optional().default(''),
    parent_id: z.number().optional().default(0),
    meta_title: z.string().optional().default(''), 
    meta_description: z.string().optional().default(''),
    image: ImageSchema.optional(),
    status: z.string().optional(),
  });



export type AddCategoryFormInputs = z.infer<typeof CategorySchema>;