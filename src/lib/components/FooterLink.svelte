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

<a
	{href}
	{title}
	aria-label={ariaLabel}
	class="border-b border-solid border-secondary hover:border-[#b4b5b6] hover:text-[#b4b5b6]"
>
	{@render children()}
</a>
