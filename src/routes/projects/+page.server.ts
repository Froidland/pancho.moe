import { db } from '$lib/server/db';

export async function load() {
	const projects = db.query.projects.findMany({
		orderBy: (projects, { asc, desc }) => [desc(projects.priority), asc(projects.id)],
	});

	return {
		streamed: {
			projects,
		},
	};
}
