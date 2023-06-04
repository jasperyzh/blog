// https://zod.dev/ - TypeScript-first schema validation with static type inference
import { z, defineCollection } from "astro:content";
import { numberToDate } from "../layouts/_Utils";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        // pubDate: z.number(),
        // pubDate: z.number().transform((num) => numberDate(num).printDate()),
        pubDate: z.number().transform((num) => numberToDate(num)),
        author: z.enum(["jy", "Anon", "Someone"]),
        image: z.object({
            src: z.string(),
            alt: z.string().optional(),
        }).default({
            src: "/placeholder-post.jpg",
            alt: "Welcome to my Blog Image."
        }),
        description: z.string().max(160, "For best SEO results, please keep the description under 160 characters."),
        draft: z.boolean().default(false),
        category: z.enum(["Wisdom", "CSS", "Reference Docs", "Astro", "General", "WebDev"]),
        tag: z.array(z.string()).optional()
    })
})

export const collections = { 'blog': blogCollection };

/* from default astroblog template
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        updatedDate: z
            .string()
            .optional()
            .transform((str) => (str ? new Date(str) : undefined)),
        heroImage: z.string().optional(),
    }),
});

export const collections = { blog };
 */