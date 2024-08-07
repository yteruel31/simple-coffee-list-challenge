<script lang="ts">
	import { colors } from '$lib/constants';
	import type { ColorVariant } from '$lib/types';
	import Text from '$lib/components/Text.svelte';
	import type { ComponentProps } from 'svelte';

	export let color: ColorVariant = 'primary';
	export let textProps: ComponentProps<Text> | undefined = undefined;
</script>

<div {...$$restProps} style:--color={colors[color]}>
	<Text color="text" {...textProps}>
		<slot />
	</Text>
</div>

<style>
	div {
		position: var(--pos);
		top: var(--top);
		left: var(--left);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		border-radius: var(--radius, 5px);
		background-color: var(--color);
		color: var(--c-background-dark);
		font-size: 14px;
		font-weight: 600;
		padding: 4px 8px;
	}
</style>
