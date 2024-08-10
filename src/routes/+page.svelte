<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Text from '$lib/components/Text.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import Button from '$lib/components/Button.svelte';
	import Center from '$lib/components/Center.svelte';

	type State = 'all' | 'available';

	export let data;

	let state: State = 'all';
	let filteredItems = data.items;

	const handleClick = (_state: State) => {
		state = _state;
	};

	$: filteredItems =
		state === 'all' ? data.items : data.items.filter((item) => item.available);
</script>

<div>
	<div class="vector" />
	<div class="container">
		<Stack --gap="16px" --m="0 auto" --z-index="10">
			<Text tag="h2" align="center" size="lg">Our Collection</Text>
			<Text tag="p" color="secondary" align="center">
				Introducing our Coffee Collection, a selection of unique coffees from
				different roast types and origins, expertly roasted in small batches and
				shipped fresh weekly.
			</Text>
		</Stack>
	</div>
</div>

<div style:margin-bottom="20px">
	<Center>
		<Button
			on:click={() => handleClick('all')}
			color={state === 'all' ? 'secondary' : 'text'}>All products</Button
		>
		<Button
			on:click={() => handleClick('available')}
			color={state === 'available' ? 'secondary' : 'text'}>Available now</Button
		>
	</Center>
</div>

<div class="grid">
	{#each filteredItems as item (item.id)}
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
		height: 10%;
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
			height: 20%;
		}

		.grid {
			padding: 16px;
		}
	}
</style>
