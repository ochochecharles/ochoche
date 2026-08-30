<script lang="ts">
	import { profile, skills, education, projects, contactLinks } from '$lib/data';
</script>

<svelte:head>
	<title>{profile.name} — {profile.role}</title>
	<meta
		name="description"
		content="{profile.name} — {profile.role} in {profile.location}. NestJS, TypeScript, Go, PostgreSQL."
	/>
</svelte:head>

<!-- Hero -->
<section class="pt-12 pb-10">
	<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">{profile.name}</h1>
	<p class="mt-2 text-lg text-accent">{profile.role} · {profile.location}</p>
	<div class="mt-5 space-y-3 text-[15px] leading-relaxed text-muted">
		{#each profile.summary as para (para)}<p>{para}</p>{/each}
	</div>
	<div class="mt-6 flex items-center gap-4">
		{#each contactLinks as link (link.label)}
			<a
				href={link.url}
				target={link.url.startsWith('http') ? '_blank' : undefined}
				rel="noreferrer"
				aria-label={link.label}
				title={link.label}
				class="text-muted transition-colors hover:text-accent"
			>
				<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"
					><path d={link.icon} /></svg
				>
			</a>
		{/each}
	</div>
</section>

<!-- Skills -->
<section class="border-t border-border py-10">
	<h2 class="mb-5 text-sm font-semibold tracking-widest text-muted uppercase">Skills</h2>
	<div class="space-y-4">
		{#each skills as group (group.group)}
			<div class="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
				<span class="w-28 shrink-0 text-sm font-medium">{group.group}</span>
				<div class="flex flex-wrap gap-1.5">
					{#each group.items as item (item)}
						<span class="rounded-md bg-chip px-2 py-0.5 font-mono text-xs text-muted">{item}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Projects -->
<section class="border-t border-border py-10">
	<h2 class="mb-5 text-sm font-semibold tracking-widest text-muted uppercase">Projects</h2>
	<div class="grid gap-4 sm:grid-cols-2">
		{#each projects as project (project.slug)}
			<a
				href="/projects/{project.slug}"
				class="group flex flex-col rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
			>
				<h3 class="font-semibold">{project.name}</h3>
				<p class="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{project.tagline}</p>
				<div class="mt-4 flex flex-wrap gap-1.5">
					{#each project.tech.slice(0, 4) as t (t)}
						<span class="rounded-md bg-chip px-2 py-0.5 font-mono text-xs text-muted">{t}</span>
					{/each}
					{#if project.tech.length > 4}
						<span class="rounded-md bg-chip px-2 py-0.5 font-mono text-xs text-muted"
							>+{project.tech.length - 4}</span
						>
					{/if}
				</div>
				<span class="mt-4 text-sm font-medium text-accent">View project →</span>
			</a>
		{/each}
	</div>
</section>

<!-- Education -->
<section class="border-t border-border py-10">
	<h2 class="mb-5 text-sm font-semibold tracking-widest text-muted uppercase">Education</h2>
	<div class="flex items-baseline justify-between">
		<div>
			<h3 class="font-semibold">{education.degree}</h3>
			<p class="text-sm text-muted">{education.school}</p>
		</div>
		<span class="text-sm text-muted">{education.year}</span>
	</div>
	<ul class="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
		{#each education.notes as note (note)}<li>{note}</li>{/each}
	</ul>
</section>
