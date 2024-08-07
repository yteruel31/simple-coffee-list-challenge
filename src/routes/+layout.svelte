<script>
	import '../app.css';
	import 'normalize.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main>
	<div class="main-container">
		<div class="container">
			<div class="sub-container">
				<slot />
			</div>
		</div>
	</div>
	<img alt="background image" src="/bg-cafe.jpg" />
</main>

<style>
	:global(body) {
		background-color: var(--c-background-darkest);
	}

	img {
		top: 0;
		left: 0;
		height: 300px;
		width: 100%;
		object-fit: cover;
	}

	.main-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding-top: 150px;
		padding-bottom: 100px;
	}

	.container {
		max-width: min(88%, 1400px);
		margin-left: auto;
		margin-right: auto;
		background-color: var(--c-background-dark);
		border-radius: 10px;
		z-index: 2;
	}

	.sub-container {
		position: relative;
		padding: 0 10px 30px;
	}

	@media (min-width: 768px) {
		.sub-container {
			padding: 0 120px 50px;
		}
	}
</style>
