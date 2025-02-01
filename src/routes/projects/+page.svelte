<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Francisco Hauva | Projects</title>
</svelte:head>

<main class="m-auto flex max-w-[900px] flex-col gap-4 px-[24px] pt-4">
	{#each data.projects as project}
		<ProjectCard {project} />
	{/each}
</main>

<style>
	main {
		min-height: calc(100dvh - var(--header-height) - var(--footer-height));
	}
</style>
