<footer class="centered-footer">
	<span>© 2025 </span>
	<a href="/">Francisco Hauva</a>
	<span> | Powered by </span>
	<a href="https://svelte.dev/">Svelte</a>
	<span> and heavily inspired by</span>
	<a href="https://github.com/adityatelange/hugo-PaperMod/">PaperMod</a>.
	<span>Source code available </span>
	<a href="https://github.com/Froidland/pancho.moe">here</a>.
</footer>

<style>
	.centered-footer {
		max-width: calc(var(--main-width) + var(--gap) * 2);
		margin: auto;
		padding: calc((var(--footer-height) - var(--gap)) / 2) var(--gap);
		text-align: center;
		line-height: 24px;
		font-size: 12px;
		color: var(--secondary);
	}

	a {
		border-bottom: 1px solid;
	}

	a:hover {
		color: var(--secondary-hover);
	}
</style>
