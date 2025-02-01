<script lang="ts">
	import GitHubIcon from '$lib/components/icons/GitHubIcon.svelte';
	import type { Project } from '$lib/server/db/schema';
	import DynamicIcon from './DynamicIcon.svelte';

	type Props = {
		project: Project;
	};

	let { project }: Props = $props();
</script>

<article
	class="flex w-full gap-3 rounded-xl border-1 border-solid border-zinc-700 bg-zinc-800 px-6 py-4 shadow transition-all"
>
	<div class="flex flex-col gap-1">
		<div class="flex items-center gap-2">
			{#if project.url}
				<a class="font-bold transition-all hover:text-blue-300" href={project.url} target="_blank"
					>{project.title}</a
				>
			{:else}
				<h2 class="font-bold">{project.title}</h2>
			{/if}
			{#if project.repositoryUrl}
				<a href={project.repositoryUrl} title="View on GitHub" target="_blank">
					<GitHubIcon class="transition-all hover:text-white" size="18px" />
				</a>
				<div class="border-secondary/50 h-[75%] border-r-1 border-solid"></div>
			{/if}
			<ul class="flex gap-1">
				{#each project.technologies as tech}
					<li>
						<DynamicIcon name={tech} size="18px" />
					</li>
				{/each}
			</ul>
		</div>
		<p class="text-secondary text-[16px]">{project.description}</p>
	</div>
</article>
