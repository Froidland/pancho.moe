<script lang="ts">
	let { size }: { size: string } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="-2 -2 28 28"
	class="icon-button protonmail transition-all"
	><path
		fill="currentColor"
		d="m15.24 8.998l3.656-3.073v15.81H2.482C1.11 21.735 0 20.609 0 19.223V6.944l7.58 6.38a2.186 2.186 0 0 0 2.871-.042l4.792-4.284zm-5.456 3.538l1.809-1.616a2.44 2.44 0 0 1-1.178-.533L.905 2.395A.552.552 0 0 0 0 2.826v2.811l8.226 6.923a1.186 1.186 0 0 0 1.558-.024M23.871 2.463a.55.55 0 0 0-.776-.068l-3.199 2.688v16.653h1.623c1.371 0 2.481-1.127 2.481-2.513V2.824a.55.55 0 0 0-.129-.36z"
	></path></svg
>

<style>
	.protonmail:hover {
		color: hsl(252, 100%, 75%);
	}
</style>
