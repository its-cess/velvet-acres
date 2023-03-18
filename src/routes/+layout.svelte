<script>
	import '../styles.css';
	import Navbar from '$components/Navbar.svelte';
</script>

<div class="container">
	<Navbar />
	<slot />
</div>

<style>
	* {
		font-family: 'Lato', sans-serif;
	}
</style>
