import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";


const threeDProjectsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/threeDProjects" }),
    schema: z.object({
        title: z.string(),
        dateCompleted: z.string().optional(),
        thumbnailImage: z.object({
            url: z.string(),
            alt: z.string()
        }).optional(),
        toolsUsed: z.array(z.string()),
        category: z.string(),
        // Web demos: the card links to liveUrl, or to postUrl when there is no live demo.
        liveUrl: z.string().url().optional(),
        postUrl: z.string().url().optional(),
        artstationUrl: z.string().url().optional(),
        // YouTube / Sketchfab embed URLs, shown at the top of the project page.
        embeds: z.array(z.string().url()).default([]),
    })
});

export const collections = {
    "threeDProjects": threeDProjectsCollection,
};
