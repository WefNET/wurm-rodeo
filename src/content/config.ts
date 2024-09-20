// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    author: z.string(),
    published: z.date(),
  })
});

const skillingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    skillName: z.string(),
    seoDescription: z.string(),
    image: z.string().optional(),
    author: z.string(),
    authorLink: z.string().optional(),
    published: z.date(),
    isTopList: z.boolean()
  })
});

const salesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    material: z.string(),
    description: z.string().optional(),
    categories: z.array(z.string()),
    casts: z.array(z.string()),
    castsRecord: z.array(z.record(z.string(), z.number())),
    cost: z.number()
  })
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
  'skills': skillingCollection,
  'sales': salesCollection
};