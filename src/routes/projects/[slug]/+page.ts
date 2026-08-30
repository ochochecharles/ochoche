import { error } from '@sveltejs/kit';
import { projects } from '$lib/data';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => projects.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
	const index = projects.findIndex((p) => p.slug === params.slug);
	if (index === -1) error(404, 'Project not found');

	const project = projects[index];
	const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
	const next = index < projects.length - 1 ? projects[index + 1] : projects[0];

	return { project, prev, next, position: index + 1, total: projects.length };
};
