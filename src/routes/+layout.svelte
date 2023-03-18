<script>
	import '../styles.css';
	import Navbar from '$components/Navbar.svelte';
</script>

<Navbar />
<slot />

<style>
	* {
		font-family: 'Lato', sans-serif;
	}
</style>
