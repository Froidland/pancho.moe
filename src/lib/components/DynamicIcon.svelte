<script lang="ts">
	type Props = {
		name: string;
		size?: string;
		class?: string;
	};

	let { name, size = '1em', class: className = '' }: Props = $props();
</script>

<!-- TODO: There's probably a better way of doing something like this, figure it out :D -->
<img
	src="/svg/{name.toLowerCase()}.svg"
	alt="{name} icon"
	title={name}
	width={size}
	height={size}
	class={className}
/>
