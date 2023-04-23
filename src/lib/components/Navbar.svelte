<script>
	import MobileNav from './MobileNav.svelte';

	let isMobileNavOpen = false;
</script>

<nav class="flex flex-row justify-between items-center px-7 py-3 bg-green text-cream font-playfair">
	<div>
		<a href="/">
			<h2 class="text-2xl playfair hover:text-dark-green hover:text-3xl">Velvet Acres</h2>
		</a>
	</div>
	<ul class="hidden md:flex gap-10">
		<li><a href="/horses">Our Horses</a></li>
		<li><a href="/facility">Facilities</a></li>
		<li><a href="/services">Services</a></li>
		<li><a href="/contact">Contact Us</a></li>
	</ul>

	<!-- HAMBURGER MENU FOR MOBILE -->
	<div class="block md:hidden">
		<MobileNav
			isMobileNavShowing={isMobileNavOpen}
			on:toggle={() => (isMobileNavOpen = !isMobileNavOpen)}
		/>
	</div>
</nav>

<style lang="postcss">
	ul li a {
		@apply text-xl font-lato text-cream;
	}

	ul li a:hover {
		@apply text-tan text-2xl font-bold;
	}
</style>
