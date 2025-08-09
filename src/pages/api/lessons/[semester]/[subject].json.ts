import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params }) => {
	try {
		const { semester, subject } = params;
		
		if (!semester || !subject) {
			return new Response(JSON.stringify({ error: 'Semester and subject parameters are required' }), {
				status: 400,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}

		const docs = await getCollection('docs');
		const semesterFilter = `${semester}-semester`;
		
		const lessons = docs
			.filter(doc => {
				const pathParts = doc.id.split('/');
				return pathParts.length > 1 && 
					   pathParts[0] === semesterFilter && 
					   pathParts[1] === subject &&
					   !doc.id.includes('/index');
			})
			.map(doc => {
				const pathParts = doc.id.split('/');
				const fileName = pathParts[pathParts.length - 1]
					.replace(/\.(md|mdx)$/, '');
				
				const lessonTitle = doc.data.title || fileName
					.split('-')
					.map(word => word.charAt(0).toUpperCase() + word.slice(1))
					.join(' ');

				// Remove .md extension from URLs
				const cleanId = doc.id.replace(/\.md$/, '');
				
				return {
					id: doc.id,
					slug: cleanId,
					title: lessonTitle,
					description: doc.data.description || '',
					htmlUrl: `/api/lesson/${cleanId}`,
					webUrl: `/lesson/${cleanId}`
				};
			})
			.sort((a, b) => a.title.localeCompare(b.title));

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

		return new Response(JSON.stringify({
			semester: {
				id: semesterFilter,
				name: semester === '2nd' ? '2nd Semester' : '3rd Semester'
			},
			subject: {
				id: subject,
				name: subjectNames[subject] || subject
			},
			lessons: lessons
		}), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to fetch lessons' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
};

export async function getStaticPaths() {
	const docs = await getCollection('docs');
	const semesterSubjects = new Map<string, Set<string>>();
	
	docs.forEach(doc => {
		const pathParts = doc.id.split('/');
		if (pathParts.length > 1 && pathParts[0].includes('-semester')) {
			const semester = pathParts[0].replace('-semester', '');
			const subject = pathParts[1];
			
			if (!semesterSubjects.has(semester)) {
				semesterSubjects.set(semester, new Set());
			}
			semesterSubjects.get(semester)!.add(subject);
		}
	});

	const paths: { params: { semester: string; subject: string } }[] = [];
	
	semesterSubjects.forEach((subjects, semester) => {
		subjects.forEach(subject => {
			paths.push({ params: { semester, subject } });
		});
	});

	return paths;
}