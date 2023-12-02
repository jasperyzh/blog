// https://zod.dev/ - TypeScript-first schema validation with static type inference
import { z, defineCollection } from "astro:content";

import { numberToDate } from "../components/_Utils";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().max(160, "For best SEO results, please keep the description under 160 characters."),
        pubDate: z.number().transform((num) => numberToDate(num)),
        draft: z.boolean().default(false),
        // tag: z.string().transform((str) => str.split(', ')).optional()
    })
})

export const collections = { 'blog': blogCollection };