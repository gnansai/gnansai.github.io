import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";


const threeDProjectsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/threeDProjects" }),
});

export const collections = {
    "threeDProjects": threeDProjectsCollection,
};
