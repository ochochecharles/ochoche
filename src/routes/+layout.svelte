<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { profile, contactLinks } from '$lib/data';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen flex-col">
	<header class="sticky top-0 z-10 border-b border-border bg-bg/85 backdrop-blur">
		<nav class="mx-auto flex max-w-3xl items-center justify-between px-5 py-3">
			<a href="/" class="text-sm font-semibold tracking-tight"
				>{profile.name}<span class="text-accent">.</span></a
			>
			<ThemeToggle />
		</nav>
	</header>

	<main class="mx-auto w-full max-w-3xl flex-1 px-5">
		{@render children()}
	</main>

	<footer class="border-t border-border">
		<div class="mx-auto flex max-w-3xl items-center justify-between px-5 py-6 text-sm text-muted">
			<span>© {new Date().getFullYear()} {profile.name}</span>
			<div class="flex items-center gap-4">
				{#each contactLinks as link (link.label)}
					<a
						href={link.url}
						target={link.url.startsWith('http') ? '_blank' : undefined}
						rel="noreferrer"
						aria-label={link.label}
						title={link.label}
						class="transition-colors hover:text-accent"
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
							><path d={link.icon} /></svg
						>
					</a>
				{/each}
			</div>
		</div>
	</footer>
</div>
