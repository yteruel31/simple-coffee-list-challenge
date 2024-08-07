<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Text from '$lib/components/Text.svelte';
	import Stack from '$lib/components/Stack.svelte';

	export let data;
</script>

<div class="vector" />
<Stack --gap="16px" --w="500px" --m="0 auto" --p="100px 0" --z-index="10">
	<Text tag="h2" align="center" size="lg">Our Collection</Text>
	<Text tag="p" color="secondary" align="center">
		Introducing our Coffee Collection, a selection of unique coffees from different roast types and
		origins, expertly roasted in small batches and shipped fresh weekly.
	</Text>
</Stack>

<div class="grid">
	{#each data.items as item}
		<Card {...item} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 16px;
		padding: 16px;
	}

	.vector {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 30px;
		left: 50%;
		background-image: url('/vector.svg');
		background-repeat: no-repeat;
		z-index: 0;
	}
</style>
