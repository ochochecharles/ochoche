<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.project.name} — Ochoche</title>
	<meta name="description" content={data.project.tagline} />
</svelte:head>

<article class="pt-10 pb-12">
	<a href="/" class="text-sm text-muted transition-colors hover:text-accent">← Back to resume</a>

	<p class="mt-8 text-sm font-medium text-muted">Project {data.position} of {data.total}</p>
	<h1 class="mt-1 text-3xl font-bold tracking-tight">{data.project.name}</h1>
	<p class="mt-2 text-lg text-accent">{data.project.tagline}</p>

	<!-- Screenshots -->
	{#if data.project.screenshots.length > 0}
		<div class="mt-8 space-y-4">
			{#each data.project.screenshots as shot (shot.src)}
				<figure>
					<img
						src={shot.src}
						alt={shot.caption ?? data.project.name + ' screenshot'}
						class="w-full rounded-xl border border-border"
						loading="lazy"
					/>
					{#if shot.caption}
						<figcaption class="mt-1.5 text-center text-xs text-muted">{shot.caption}</figcaption>
					{/if}
				</figure>
			{/each}
		</div>
	{:else}
		<div
			class="mt-8 flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-border bg-chip text-sm text-muted"
		>
			Screenshots coming soon
		</div>
	{/if}

	<!-- Description -->
	<div class="mt-8 space-y-4 text-[15px] leading-relaxed">
		{#each data.project.description as para (para)}<p>{para}</p>{/each}
	</div>

	<!-- Tech -->
	<section class="mt-8">
		<h2 class="mb-3 text-sm font-semibold tracking-widest text-muted uppercase">Built with</h2>
		<div class="flex flex-wrap gap-1.5">
			{#each data.project.tech as t (t)}
				<span class="rounded-md bg-chip px-2 py-0.5 font-mono text-xs text-muted">{t}</span>
			{/each}
		</div>
	</section>

	<!-- Links -->
	<div class="mt-8 flex flex-wrap gap-3">
		{#if data.project.links.live}
			<a
				href={data.project.links.live}
				target="_blank"
				rel="noreferrer"
				class="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
			>
				↗ Live demo
			</a>
		{/if}
		{#if data.project.links.github}
			<a
				href={data.project.links.github}
				target="_blank"
				rel="noreferrer"
				class="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
			>
				View on GitHub
			</a>
		{/if}
	</div>

	<!-- Prev / Next navigation -->
	<nav class="mt-12 flex items-stretch justify-between gap-4 border-t border-border pt-6">
		<a
			href="/projects/{data.prev.slug}"
			class="group min-w-0 flex-1 rounded-lg border border-border p-4 transition-colors hover:border-accent"
		>
			<span class="text-xs text-muted">← Previous</span>
			<p class="mt-1 truncate text-sm font-medium group-hover:text-accent">{data.prev.name}</p>
		</a>
		<a
			href="/projects/{data.next.slug}"
			class="group min-w-0 flex-1 rounded-lg border border-border p-4 text-right transition-colors hover:border-accent"
		>
			<span class="text-xs text-muted">Next →</span>
			<p class="mt-1 truncate text-sm font-medium group-hover:text-accent">{data.next.name}</p>
		</a>
	</nav>
</article>
