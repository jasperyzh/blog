// https://zod.dev/ - TypeScript-first schema validation with static type inference
import { z, defineCollection } from "astro:content";

import { SITE_TITLE } from "../consts";
import { numberToDate } from "../layouts/_Utils";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        pubDate: z.number().transform((num) => numberToDate(num)),
        image: z.object({
            src: z.string(),
            alt: z.string().optional(),
        }).default({
            src: "/placeholder.jpg",
            alt: `Welcome to ${SITE_TITLE}, enjoy this placeholder image!`
        }),
        description: z.string().max(160, "For best SEO results, please keep the description under 160 characters."),
        draft: z.boolean().default(false),
        // tag: z.array(z.string()).optional()
        tag: z.string().transform((str) => str.split(', ')).optional()

    })
})

export const collections = { 'blog': blogCollection };