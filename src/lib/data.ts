import { projects } from './projects';

export type { Project } from './projects';

export const profile = {
	name: 'Ochoche',
	role: 'Backend Developer',
	location: 'Nigeria',
	summary: [
		"I'm a backend developer based in Nigeria, self-taught, building with NestJS and TypeScript while learning Go. I care more about how software behaves under real conditions than how it looks in a demo, real auth, real deployments, real edge cases, not tutorial shortcuts. Every project I ship, I treat like something someone else is actually going to depend on."
	]
};

export const skills: { group: string; items: string[] }[] = [
	{ group: 'Languages', items: ['TypeScript', 'Go', 'JavaScript', 'SQL'] },
	{ group: 'Backend', items: ['NestJS', 'Chi (Go)', 'Node.js'] },
	{
		group: 'Data',
		items: ['PostgreSQL', 'Neon', 'Supabase', 'Drizzle ORM', 'sqlc', 'goose', 'Redis']
	},
	{ group: 'Infra & Tools', items: ['Docker', 'BullMQ', 'Render', 'Vercel', 'Google OAuth'] },
	{ group: 'Frontend', items: ['SvelteKit (Svelte 5)', 'Tailwind CSS'] },
	{ group: 'Dev Tools', items: ['Postman', 'DBeaver', 'Git'] }
];

export const education = {
	degree: 'BSc Computer Science',
	school: 'Benue State University',
	year: '2025',
	notes: [
		'Self-taught backend development beyond the degree.',
		'No professional employment history yet — all projects self-directed, deployed, and running.'
	]
};

export const contactLinks = [
	{
		label: 'GitHub',
		url: 'https://github.com/ochochecharles',
		icon: 'M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z'
	},
	{
		label: 'Email',
		url: 'mailto:mccharles769@gmail.com',
		icon: 'M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm.8 2L12 12.4 19.2 7H4.8zM20 9.2l-8 5.9-8-5.9V18h16V9.2z'
	},
	{
		label: 'LinkedIn',
		url: 'https://www.linkedin.com/in/charles-adakole-740199388',
		icon: 'M4.98 3.5A2.49 2.49 0 112.5 6a2.48 2.48 0 012.48-2.5zM3 8.75h4v11.75H3zM9.5 8.75h3.83v1.6h.05a4.2 4.2 0 013.78-2.08c4.04 0 4.79 2.66 4.79 6.12v6.11h-4v-5.42c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.52h-4z'
	}
];

export { projects };
