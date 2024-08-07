<script lang="ts">
	import type { ColorVariant } from '$lib/types';
	import { colors } from '$lib/constants';

	export let tag: 'h2' | 'p' | 'span' = 'span';
	export let color: ColorVariant = 'primary';
	export let align: 'left' | 'center' | 'right' = 'left';
	export let size: 'sm' | 'md' | 'lg' = 'md';

	const fontSizes = {
		sm: '12px',
		md: '16px',
		lg: '32px'
	};
</script>

<svelte:element
	this={tag}
	{...$$restProps}
	style:--color={colors[color]}
	style:text-align={align}
	style:font-size={fontSizes[size]}
>
	<slot />
</svelte:element>

<style>
	h2,
	p,
	span {
		color: var(--color);
		margin: 0;
		font-weight: 500;
		z-index: var(--z-index);
	}

	h2 {
		font-size: 32px;
		font-weight: 700;
	}
</style>
