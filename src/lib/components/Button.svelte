<script lang="ts">
	import { colors } from '$lib/constants';
	import type { ColorVariant } from '$lib/types';

	export let color: ColorVariant = 'primary';
	export let textColor: ColorVariant = 'text';
</script>

<button
	style:--color={colors[color]}
	style:--text-color={colors[textColor]}
	{...$$restProps}
	on:click
>
	<slot />
</button>

<style>
	button {
		background-color: var(--color);
		color: var(--text-color);
		font-size: 16px;
		font-weight: 500;
		padding: 10px 16px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
</style>
