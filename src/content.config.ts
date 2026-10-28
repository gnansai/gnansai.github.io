import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";


const threeDProjectsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/threeDProjects" }),
    schema: z.object({
        title: z.string(),
        dateCompleted: z.string(),
        thumbnailImage: z.object({
            url: z.string(),
            alt: z.string()
        }),
        toolsUsed: z.array(z.string()),
        category: z.string(),
    })
});

export const collections = {
    "threeDProjects": threeDProjectsCollection,
};
