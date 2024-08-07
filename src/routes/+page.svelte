<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Text from '$lib/components/Text.svelte';
	import Stack from '$lib/components/Stack.svelte';

	export let data;
</script>

<div class="vector" />
<div class="container">
	<Stack --gap="16px" --m="0 auto" --z-index="10">
		<Text tag="h2" align="center" size="lg">Our Collection</Text>
		<Text tag="p" color="secondary" align="center">
			Introducing our Coffee Collection, a selection of unique coffees from different roast types
			and origins, expertly roasted in small batches and shipped fresh weekly.
		</Text>
	</Stack>
</div>

<div class="grid">
	{#each data.items as item}
		<Card {...item} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 48px;
	}

	.vector {
		position: absolute;
		width: 50%;
		height: 50%;
		top: 30px;
		left: 50%;
		background-image: url('/vector.svg');
		background-repeat: no-repeat;
		z-index: 0;
	}

	.container {
		width: 100%;
		padding: 100px 0;
	}

	@media (min-width: 768px) {
		.vector {
			width: 100%;
			height: 100%;
		}

		.grid {
			padding: 16px;
		}
	}
</style>
