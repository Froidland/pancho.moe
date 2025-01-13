<svelte:head>
	<title>Francisco Hauva | Projects</title>
</svelte:head>

<main class="main">
	<div class="profile">
		<div class="py-3">
			<h1 class="text-4xl font-bold">Work in progress</h1>
		</div>
		<div>Projects will soon be listed here...</div>
	</div>
</main>

<style>
	.main {
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
