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
	<a {href} {title} aria-label={ariaLabel} class="button">
		{@render children()}
	</a>
{:else}
	<button {title} aria-label={ariaLabel} class="button">
		{@render children()}
	</button>
{/if}

<style>
	.button {
		@apply inline-flex items-center justify-center rounded bg-[#2e2e33] px-[14px] py-[6px] font-medium text-[#dbdbdc] transition-all hover:bg-[#3d3d43];
	}
</style>
