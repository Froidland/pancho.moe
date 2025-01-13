<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		href?: string;
		title?: string;
		'aria-label'?: string;
	};

	let { children, href, title, 'aria-label': ariaLabel }: Props = $props();
</script>

{#if href}
	<a {href} {title} aria-label={ariaLabel} class="button transition-all">
		{@render children()}
	</a>
{:else}
	<button {title} aria-label={ariaLabel} class="button transition-all">
		{@render children()}
	</button>
{/if}

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: var(--hljs-bg);
		color: var(--primary);
		padding: 6px 14px;
		font-weight: 500;
		border-radius: var(--radius);
	}
	.button:hover {
		background-color: var(--hljs-bg-hover);
	}
</style>
