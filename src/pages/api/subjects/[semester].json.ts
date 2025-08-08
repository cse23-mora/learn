import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params }) => {
	try {
		const { semester } = params;
		
		if (!semester) {
			return new Response(JSON.stringify({ error: 'Semester parameter is required' }), {
				status: 400,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}

		const docs = await getCollection('docs');
		
		const subjects = new Set<string>();
		const semesterFilter = `${semester}-semester`;
		
		docs.forEach(doc => {
			const pathParts = doc.id.split('/');
			if (pathParts.length > 1 && pathParts[0] === semesterFilter) {
				subjects.add(pathParts[1]);
			}
		});

		// Subject names mapping
		const subjectNames: Record<string, string> = {
			'data-structures-algorithms': 'Data Structures & Algorithms',
			'computer-organization': 'Computer Organization and Digital Design',
			'methods-of-mathematics': 'Methods of Mathematics',
			'program-construction': 'Program Construction',
			'theory-of-electricity': 'Theory of Electricity',
			'communication-skills': 'Communication Skills',
			'ai': 'AI (Artificial Intelligence)',
			'computer-architecture': 'Computer Architecture',
			'thermodynamics': 'Thermodynamics',
			'database-systems': 'Database Systems',
			'differential-equations': 'Differential Equations (DE)',
			'operating-systems': 'Operating Systems',
			'data-communication-networking': 'Data Communication & Networking',
			'applied-statistics': 'Applied Statistics'
		};

		const subjectList = Array.from(subjects)
			.sort()
			.map(subject => ({
				id: subject,
				name: subjectNames[subject] || subject,
				apiUrl: `/api/lessons/${semester}/${subject}.json`
			}));

		return new Response(JSON.stringify({
			semester: {
				id: semesterFilter,
				name: semester === '2nd' ? '2nd Semester' : '3rd Semester'
			},
			subjects: subjectList
		}), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to fetch subjects' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
};

export async function getStaticPaths() {
	const docs = await getCollection('docs');
	const semesters = new Set<string>();
	
	docs.forEach(doc => {
		const pathParts = doc.id.split('/');
		if (pathParts.length > 0 && pathParts[0].includes('-semester')) {
			const semester = pathParts[0].replace('-semester', '');
			semesters.add(semester);
		}
	});

	return Array.from(semesters).map(semester => ({
		params: { semester }
	}));
}