<script lang="ts">
</script>

<div {...$$restProps}>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
		margin: var(--m);
		padding: var(--p);
		z-index: var(--z-index);
	}
</style>
