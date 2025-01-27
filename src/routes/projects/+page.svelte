<script lang="ts">
	import GitHubIcon from '$lib/components/icons/GitHubIcon.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Francisco Hauva | Projects</title>
</svelte:head>

<main class="m-auto flex max-w-[1072px] flex-col gap-4 px-[24px] pt-4">
	{#each data.projects as project}
		<article
			class="flex w-full gap-3 rounded-xl border-1 border-solid border-zinc-700 bg-zinc-800 px-4 py-2 shadow-xl transition-all"
		>
			{#if project.thumbnailUrl}
				<img src={project.thumbnailUrl} class="max-w-[140px]" />
			{:else}
				<!-- TODO: Fallback empty state image or icon -->
			{/if}
			<div class="flex flex-col gap-1">
				<div class="flex items-center gap-2">
					{#if project.url}
						<a class="font-bold transition-all hover:text-white" href={project.url}
							>{project.title}</a
						>
					{:else}
						<h2 class="font-bold">{project.title}</h2>
					{/if}
					{#if project.repositoryUrl}
						<a href={project.repositoryUrl}>
							<GitHubIcon class="transition-all hover:text-white" size="24px" />
						</a>
					{/if}
					<!-- TODO: languages and technologies icons -->
				</div>
				<p class="text-justify">{project.description}</p>
			</div>
		</article>
	{/each}
</main>

<style>
	main {
		min-height: calc(100dvh - var(--header-height) - var(--footer-height));
	}
</style>
