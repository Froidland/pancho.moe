<script lang="ts">
	import NavLink from './NavLink.svelte';
</script>

<header>
	<nav class="mx-auto flex h-[60px] max-w-[1072px] justify-between px-[24px] leading-[60px]">
		<div>
			<a href="/">
				<span class="text-2xl leading-[60px] font-bold">Francisco Hauva</span>
			</a>
		</div>
		<ul class="flex gap-x-[24px] text-[16px]">
			<li>
				<NavLink href="/" title="Home" aria-label="Home">Home</NavLink>
			</li>
			<li>
				<NavLink href="/projects" title="Projects" aria-label="Projects">Projects</NavLink>
			</li>
		</ul>
	</nav>
</header>
