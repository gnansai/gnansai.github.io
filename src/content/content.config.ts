import { z, defineCollection } from "astro:content";


const threeDprojectsCollection = defineCollection({
    type: 'content',
   
    schema: z.object({
        title: z.string(),
        description: z.string(),
        dataCompleted:z.date(),
        thumbnailImage: z.object({
            url: z.string(),
            alt: z.string()
        }),
        toolsUsed: z.array(z.string()),
        
    })
});

export const collections = {
    "threeDprojects": threeDprojectsCollection,
};