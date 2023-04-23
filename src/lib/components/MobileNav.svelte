<script>
	import { createEventDispatcher } from 'svelte';
	import Hamburger from '$lib/icons/Hamburger.svelte';

	const dispatch = createEventDispatcher();
	export let isMobileNavShowing = false;
</script>

<nav class="flex flex-row justify-between bg-green text-cream font-playfair">
	<div>
		<button on:click={() => dispatch('toggle')}>
			<Hamburger height={32} width={32} />
		</button>
		{#if isMobileNavShowing}
			<div class="absolute right-0 top-[3.5rem] z-40 w-full bg-green bg-opacity-90 text-right p-5">
				<ul class="mr-8">
					<li><a href="/horses" on:click={() => dispatch('toggle')}>Our Horses</a></li>
					<li><a href="/facility" on:click={() => dispatch('toggle')}>Facilities</a></li>
					<li><a href="/services" on:click={() => dispatch('toggle')}>Services</a></li>
					<li><a href="/contact" on:click={() => dispatch('toggle')}>Contact Us</a></li>
				</ul>
			</div>
		{/if}
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
