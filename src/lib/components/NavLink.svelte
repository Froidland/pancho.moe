<script lang="ts">
	import { page } from '$app/state';
	import clsx from 'clsx';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		href: string;
		title?: string;
		'aria-label'?: string;
	};

	let { children, href, title, 'aria-label': ariaLabel }: Props = $props();

	function isCurrentRoute(route: string) {
		if (route === page.route.id) {
			return true;
		}

		return false;
	}
</script>

<a {href} {title} aria-label={ariaLabel}>
	{#if href.startsWith('/')}
		<span
			class={clsx(
				isCurrentRoute(href) && 'font-medium underline decoration-2 underline-offset-4',
				'hover:text-secondary',
			)}>{@render children()}</span
		>
	{:else}
		<span class="hover:text-secondary">
			{@render children()}
		</span>
	{/if}
</a>
