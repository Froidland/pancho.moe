<script lang="ts">
	import FooterLink from './FooterLink.svelte';
</script>

<footer
	class="m-auto max-w-[768px] px-[24px] py-[18px] text-center text-[12px] leading-[24px] text-secondary"
>
	<p>
		© 2025
		<FooterLink href="/" title="Home" aria-label="Home">Francisco Hauva</FooterLink>
		| Powered by
		<FooterLink href="https://svelte.dev/" title="Svelte website" aria-label="Svelte website"
			>Svelte</FooterLink
		>
		and heavily inspired by
		<FooterLink
			href="https://github.com/adityatelange/hugo-PaperMod/"
			title="Hugo PaperMod repository"
			aria-label="Hugo PaperMod repository">PaperMod</FooterLink
		>. Source code available
		<FooterLink
			href="https://github.com/Froidland/pancho.moe"
			title="pancho.moe repository"
			aria-label="pancho.moe repository">here</FooterLink
		>.
	</p>
</footer>
