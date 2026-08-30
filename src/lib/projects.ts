export type Project = {
	slug: string;
	name: string;
	tagline: string;
	description: string[];
	tech: string[];
	links: { live?: string; github?: string };
	/** paths under /static, e.g. '/projects/ajoguard-1.png' — empty until screenshots are provided */
	screenshots: { src: string; caption?: string }[];
};

const GITHUB = 'https://github.com/ochochecharles';

export const projects: Project[] = [
	{
		slug: 'ajoguard',
		name: 'AjoGuard',
		tagline: 'Tamper-evident reconciliation engine for informal savings groups',
		description: [
			"AjoGuard is a pure backend system that brings trust and verifiable record-keeping to Nigeria's rotating savings associations (Ajo / Esusu / ROSCAs). Informal savings groups routinely lose track of who paid what — AjoGuard gives them tamper-evident, verifiable records without requiring anyone to install an app.",
			'Contributions enter through a web form or a Telegram bot, and a channel-agnostic ingestion normaliser processes them identically regardless of source. Contribution processing is idempotent — duplicates are caught via SHA-256 detection — and background jobs run with retries and a dead-letter queue.',
			'Every state change is captured in HMAC-signed audit logs, so records cannot be silently altered. The system is multi-tenant, so multiple savings groups can run independently on one deployment.'
		],
		tech: [
			'NestJS',
			'PostgreSQL',
			'Supabase',
			'Drizzle ORM',
			'Redis',
			'BullMQ',
			'Telegram Bot API',
			'Google OAuth',
			'PDFKit',
			'Helmet',
			'Swagger',
			'Bull Board'
		],
		links: { live: 'https://ajoguard.vercel.app/', github: GITHUB },
		screenshots: [
			{
				src: '/projects/ajoguard-1.png',
				caption: 'Landing page — "Run your ajo with total transparency."'
			},
			{
				src: '/projects/ajoguard-2.png',
				caption: 'Group dashboard — balances, members, and recent contributions at a glance.'
			},
			{
				src: '/projects/ajoguard-3.png',
				caption: 'Telegram bot — logging contributions with PAY commands and group alerts.'
			}
		]
	},
	{
		slug: 'task-manager',
		name: 'Task Management API + Frontend',
		tagline: 'Full-featured task/project manager with four-role authorization',
		description: [
			'A complete task and project management system: a Go API paired with a SvelteKit client. Authentication is Google OAuth2 combined with JWT, and authorization is enforced through a four-role system — owner, member, creator, and assignee.',
			'The API is built with Go, Chi, sqlc, and goose migrations on Neon Postgres. An in-app notification system keeps members updated on assignment and status changes.',
			'The frontend is SvelteKit 5 with TypeScript and Tailwind CSS.'
		],
		tech: [
			'Go',
			'Chi',
			'sqlc',
			'goose',
			'Neon Postgres',
			'Google OAuth2',
			'JWT',
			'SvelteKit 5',
			'TypeScript',
			'Tailwind CSS'
		],
		links: { live: 'https://task-management-frontend-one.vercel.app/', github: GITHUB },
		screenshots: [
			{
				src: '/projects/task-manager-1.png',
				caption: 'Landing page — Google sign-in and task ownership at a glance.'
			},
			{
				src: '/projects/task-manager-2.png',
				caption: 'Project overview — create projects and manage members.'
			},
			{
				src: '/projects/task-manager-3.png',
				caption: 'Project detail — tasks with priority, assignment, and status controls.'
			}
		]
	},
	{
		slug: 'sentcheck',
		name: 'SentCheck',
		tagline: 'Never cold-email the same person twice',
		description: [
			'SentCheck indexes everything you send from Gmail and Outlook, so you never contact the same person twice by mistake.',
			'Paste an email address and it checks whether that exact address was already contacted, using a strict normalized match that collapses case, +tags, and Gmail dot-variants to the same key — so john.doe+work@gmail.com and JOHNDOE@gmail.com are recognized as the same person.',
			'Mail is ingested through the Gmail API and Microsoft Graph with OAuth2. The tool currently runs locally and is not deployed.'
		],
		tech: [
			'NestJS',
			'Node 24',
			'PostgreSQL',
			'Drizzle ORM',
			'Gmail API',
			'Microsoft Graph',
			'OAuth2',
			'Vanilla JS'
		],
		links: { github: GITHUB },
		screenshots: [
			{
				src: '/projects/sentcheck-1.png',
				caption: 'Main UI — connect Gmail/Outlook, check an address, review recent sends.'
			}
		]
	},
	{
		slug: 'audit-log',
		name: '@ochoche/audit-log',
		tagline: 'NestJS audit logging with full traceability for every action',
		description: [
			'A NestJS audit logging system, ORM-agnostic in design (built with Prisma + PostgreSQL), that gives applications accountability and traceability for every action.',
			'A NestJS interceptor automatically logs CREATE, UPDATE, DELETE, and GET actions — capturing the entity type and ID, the before and after state, the IP address, device info, a GeoIP-based location, and a timestamp.',
			'The result is a complete, queryable history of who did what, from where, and when.'
		],
		tech: ['NestJS', 'Prisma', 'PostgreSQL', 'GeoIP', 'Interceptors'],
		links: { github: GITHUB },
		screenshots: []
	}
];
