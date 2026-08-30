<script lang="ts">
	let dark = $state(
		typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
	);

	function toggle() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		try {
			localStorage.setItem('theme', dark ? 'dark' : 'light');
		} catch {
			// private browsing — ignore
		}
	}
</script>

<button
	onclick={toggle}
	aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
	title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
	class="rounded-full border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
>
	{#if dark}
		<!-- sun -->
		<svg
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
		>
			<circle cx="12" cy="12" r="4" />
			<path
				d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
			/>
		</svg>
	{:else}
		<!-- moon -->
		<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
			<path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
		</svg>
	{/if}
</button>
