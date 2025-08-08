import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
	try {
		const docs = await getCollection('docs');
		
		const semesters = new Set<string>();
		
		docs.forEach(doc => {
			const pathParts = doc.id.split('/');
			if (pathParts.length > 0 && pathParts[0].includes('-semester')) {
				semesters.add(pathParts[0]);
			}
		});

		const semesterList = Array.from(semesters)
			.sort()
			.map(semester => {
				const semesterId = semester.replace('-semester', '');
				return {
					id: semester,
					name: semester === '2nd-semester' ? '2nd Semester' : '3rd Semester',
					apiUrl: `/api/subjects/${semesterId}.json`
				};
			});

		return new Response(JSON.stringify({
			semesters: semesterList
		}), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to fetch semesters' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
};