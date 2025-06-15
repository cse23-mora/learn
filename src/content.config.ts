import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
export const collections = {
	  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
