// 1. Import utilities from `astro:content`
import type { categoryLabel } from 'astro/runtime/client/dev-toolbar/apps/audit/rules/index.js';
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
    ql: z.number(),
    rarity: z.number().optional(),
    description: z.string().optional(),
    category: z.array(z.string()),
    castsRecord: z.array(z.record(z.string(), z.number())),
    cost: z.number(),
    storageLocation: z.string().optional()
  })
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
  'skills': skillingCollection,
  'sales': salesCollection
};