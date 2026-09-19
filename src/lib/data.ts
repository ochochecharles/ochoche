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

export const contactLinks: { label: string; url: string; icon: string; scale?: number }[] = [
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
	},
	{
		label: 'WhatsApp',
		url: 'https://wa.me/2347049859565',
		icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
		scale: 0.85
	}
];

export { projects };
