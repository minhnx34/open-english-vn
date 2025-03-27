import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const resources = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    image: z.string().optional().default('/open-english-vn/images/resources/default-resource.png'),
    category: z.enum([
      'Letters and Sounds',
      'Punctuation',
      'Words and Spelling',
      'Learning to Read',
      'Writing',
      'Stories',
      'Grammar',
      'Speaking',
      'Listening',
      'Reading',
      'Vocabulary',
      'IELTS',
      'TOEFL',
      'General',
    ]),
    tags: z.array(z.string()),
    free: z.boolean().default(false),
  }),
});


const quiz = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),  // Add this line
    title: z.string(),
    description: z.string().optional(),
    questions: z.array(
      z.object({
        question: z.string(),
        options: z.array(z.string()),
        answer: z.string(),
      })
    ),
  }),
});


export const collections = {
  blog,
  resources,
  quiz, // Include quiz collection
};