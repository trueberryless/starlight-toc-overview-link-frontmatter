import { z } from "astro/zod";

export const extendedTableOfContentSchema = z.object({
  topic: z.string().optional(),
});

export type ExtendedTableOfContentFrontmatterSchema = z.input<typeof extendedTableOfContentSchema>;
