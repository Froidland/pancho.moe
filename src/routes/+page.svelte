<script lang="ts">
	import FileSaveRoundedIcon from '$lib/components/icons/FileSaveRoundedIcon.svelte';
	import BlueSkyHoverableIcon from '$lib/components/icons/hoverable/BlueSkyHoverableIcon.svelte';
	import GithubHoverableIcon from '$lib/components/icons/hoverable/GithubHoverableIcon.svelte';
	import GmailHoverableIcon from '$lib/components/icons/hoverable/GmailHoverableIcon.svelte';
	import LinkedInHoverableIcon from '$lib/components/icons/hoverable/LinkedInHoverableIcon.svelte';
	import ProtonMailHoverableIcon from '$lib/components/icons/hoverable/ProtonMailHoverableIcon.svelte';
	import TwitterHoverableIcon from '$lib/components/icons/hoverable/TwitterHoverableIcon.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<svelte:head>
	<title>Francisco Hauva | Home</title>
</svelte:head>

<main>
	<div class="profile">
		<div>
			<h1 class="text-4xl font-bold">Hey there :D</h1>
		</div>
		<!-- TODO: Make the icon buttons a separate generic component -->
		<ul class="flex gap-x-[12px] py-3">
			<li>
				<a href="mailto:phauva@gmail.com" title="Gmail" aria-label="Gmail">
					<GmailHoverableIcon size="2.5rem" />
				</a>
			</li>
			<li>
				<a href="mailto:phauva@proton.me" title="Protonmail" aria-label="Protonmail">
					<ProtonMailHoverableIcon size="2.5rem" />
				</a>
			</li>
			<li>
				<a href="https://github.com/Froidland" title="Github" aria-label="Github">
					<GithubHoverableIcon size="2.5rem" />
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/francisco-hauva/"
					title="Linkedin"
					aria-label="Linkedin"
				>
					<LinkedInHoverableIcon size="2.5rem" />
				</a>
			</li>
			<li>
				<a href="https://twitter.com/NotPanchowo" title="Twitter" aria-label="Twitter">
					<TwitterHoverableIcon size="2.5rem" />
				</a>
			</li>
			<li>
				<a href="https://bsky.app/profile/pancho.moe" title="Bluesky" aria-label="Bluesky">
					<BlueSkyHoverableIcon size="2.5rem" />
				</a>
			</li>
		</ul>
		<Button
			href="https://url.pancho.moe/public_resume"
			title="Download resume/cv"
			aria-label="Download resume/cv"
		>
			<FileSaveRoundedIcon size="2rem" /> Resume / CV
		</Button>
	</div>
</main>

<style>
	main {
		position: relative;
		min-height: calc(100dvh - var(--header-height) - var(--footer-height));
		max-width: calc(var(--main-width) + var(--gap) * 2);
		margin: auto;
		padding: var(--gap);
	}

	.profile {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: calc(100dvh - var(--header-height) - var(--footer-height) - (var(--gap) * 2));
		text-align: center;
	}
</style>
