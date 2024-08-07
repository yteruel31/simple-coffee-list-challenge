<script lang="ts">
	import Stack from '$lib/components/Stack.svelte';
	import Text from '$lib/components/Text.svelte';
	import Group from '$lib/components/Group.svelte';
	import Badge from '$lib/components/Badge.svelte';

	export let name: string;
	export let rating: number;
	export let votes: number;
	export let price: string;
	export let image: string;
	export let popular: boolean;
	export let available: boolean;
</script>

<Stack --gap="16px">
	<div style:position="relative">
		{#if popular}
			<Badge
				textProps={{ size: 'sm' }}
				color="warning"
				--pos="absolute"
				--left="10px"
				--top="10px"
				--radius="20px">Popular</Badge
			>
		{/if}
		<img class="cover" src={image} alt={name} />
	</div>
	<Group justify="space-between">
		<Text>{name}</Text>
		<Badge textProps={{ size: 'sm' }} color="success">{price}</Badge>
	</Group>
	<Group justify="space-between" align="center">
		{#if rating}
			<Group align="center" --gap="5px">
				<img src="/Star_fill.svg" alt="star" />
				<div>
					<Text tag="span" color="primary">{rating}</Text>
					<Text tag="span" color="secondary">({votes} votes)</Text>
				</div>
			</Group>
		{:else}
			<Group align="center" --gap="10px">
				<img src="/Star.svg" alt="star" />
				<Text color="secondary">No ratings</Text>
			</Group>
		{/if}
		<Group align="center">
			{#if !available}
				<Text color="error">Sold out</Text>
			{/if}
		</Group>
	</Group>
</Stack>

<style>
	.cover {
		border-radius: 10px;
		width: 100%;
	}
</style>
