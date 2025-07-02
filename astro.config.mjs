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
			title: 'Knowledge Hub | CSE23',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: '2nd Semester',
					items: [
						{
							label: 'Data Structures & Algorithms',
							autogenerate: { directory: '2nd-semester/data-structures-algorithms' },
							collapsed: true,
						},
						{
							label: 'Computer Organization and Digital Design',
							autogenerate: { directory: '2nd-semester/computer-organization' },
							collapsed: true,
						},
						{
							label: 'Methods of Mathematics',
							autogenerate: { directory: '2nd-semester/methods-of-mathematics' },
							collapsed: true,
						},
						{
							label: 'Program Construction',
							autogenerate: { directory: '2nd-semester/program-construction' },
							collapsed: true,
						},
						{
							label: 'Theory of Electricity',
							autogenerate: { directory: '2nd-semester/theory-of-electricity' },
							collapsed: true,
						},
						{
							label: 'Communication Skills',
							autogenerate: { directory: '2nd-semester/communication-skills' },
							collapsed: true,
						},
					],
				},
				{
					label: '3rd Semester',
					items: [
						{
							label: 'AI (Artificial Intelligence)',
							autogenerate: { directory: '3rd-semester/ai' },
							collapsed: true,
						},
						{
							label: 'Computer Architecture',
							autogenerate: { directory: '3rd-semester/computer-architecture' },
							collapsed: true,
						},
						{
							label: 'Thermodynamics',
							autogenerate: { directory: '3rd-semester/thermodynamics' },
							collapsed: true,
						},
						{
							label: 'Database Systems',
							autogenerate: { directory: '3rd-semester/database-systems' },
							collapsed: true,
						},
						{
							label: 'Differential Equations (DE)',
							autogenerate: { directory: '3rd-semester/differential-equations' },
							collapsed: true,
						},
						{
							label: 'Operating Systems',
							autogenerate: { directory: '3rd-semester/operating-systems' },
							collapsed: true,
						},
						{
							label: 'Communication Skills',
							autogenerate: { directory: '3rd-semester/communication-skills' },
							collapsed: true,
						},
						{
							label: 'Data Communication & Networking',
							autogenerate: { directory: '3rd-semester/data-communication-networking' },
							collapsed: true,
						},
						{
							label: 'Applied Statistics',
							autogenerate: { directory: '3rd-semester/applied-statistics' },
							collapsed: true,
						},
					],
				},
			],
		}),
	],
});