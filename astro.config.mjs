// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://learn.cse23.org', // Replace with your actual domain
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax],
	},
	integrations: [sitemap()],
});