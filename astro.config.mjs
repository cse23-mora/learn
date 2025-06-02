// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax],
	},
	integrations: [
		starlight({
			title: 'CSE23 Knowledge Base',
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				{
					label: 'Data Structures & Algorithms',
					autogenerate: { directory: 'data-structures-algorithms' },
					collapsed: true,
				},
				{
					label: 'Computer Organization and Digital Design',
					autogenerate: { directory: 'computer-organization' },
					collapsed: true,
				},
				{
					label: 'Methods of Mathematics',
					autogenerate: { directory: 'methods-of-mathematics' },
					collapsed: true,
				},
				{
					label: 'Program Construction',
					autogenerate: { directory: 'program-construction' },
					collapsed: true,
				},
				{
					label: 'Theory of Electricity',
					autogenerate: { directory: 'theory-of-electricity' },
					collapsed: true,
				},
			],
		}),
	],
});
