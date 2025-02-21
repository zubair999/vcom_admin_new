import { z } from 'zod';





export const ImageSchema = z.object({
  date_created: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: "Invalid date format for date_created",
  }),
  date_created_gmt: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: "Invalid date format for date_created_gmt",
  }),
  date_modified: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: "Invalid date format for date_modified",
  }),
  date_modified_gmt: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: "Invalid date format for date_modified_gmt",
  }),
  src: z.string().url(),
  name: z.string(),
  alt: z.string().optional().nullable(), // Optional and nullable alt text
});

export type Image = z.infer<typeof ImageSchema>;
