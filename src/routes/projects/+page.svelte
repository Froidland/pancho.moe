<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectCardSkeleton from '$lib/components/ProjectCardSkeleton.svelte';
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
	{#await data.streamed.projects}
		<ProjectCardSkeleton />
		<ProjectCardSkeleton />
		<ProjectCardSkeleton />
	{:then projects}
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	{/await}
</main>

<style>
	main {
		min-height: calc(100dvh - var(--header-height) - var(--footer-height));
	}
</style>
