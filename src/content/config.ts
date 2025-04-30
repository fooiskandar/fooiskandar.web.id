//import { defineCollection, z } from 'astro:content'

//const postsCollection = defineCollection({
//  schema: z.object({
//    title: z.string(),
//    published: z.date(),
//    updated: z.date().optional(),
//    draft: z.boolean().optional().default(false),
//    description: z.string().optional().default(''),
//    image: z.string().optional().default(''),
//    tags: z.array(z.string()).optional().default([]),
//    category: z.string().optional().default(''),
//    lang: z.string().optional().default(''),

    /* For internal use */
 //   prevTitle: z.string().default(''),
 //   prevSlug: z.string().default(''),
 //   nextTitle: z.string().default(''),
 //   nextSlug: z.string().default(''),
//  }),
//})
//export const collections = {
//  posts: postsCollection,
//}

import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    published: z.date(),
    draft: z.boolean().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
  }),
})
export const collections = {
  posts: postsCollection,
}
