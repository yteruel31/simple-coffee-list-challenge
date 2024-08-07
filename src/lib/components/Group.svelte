<script lang="ts">
	export let justify:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly' = 'flex-start';
	export let align: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline' = 'flex-start';
</script>

<div {...$$restProps} style:justify-content={justify} style:align-items={align}>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		gap: var(--gap);
		width: var(--w);
		margin: var(--m);
		padding: var(--p);
	}
</style>
