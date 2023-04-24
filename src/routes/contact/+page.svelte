<script>
	import Heading from '$lib/base/Heading.svelte';
</script>

<svelte:head>
	<title>Contact Us | Velvet Acres</title>
</svelte:head>

<main class="h-[300px] md:h-[400px] lg:h-[650px] bg-fixed bg-contactUs bg-contain bg-no-repeat">
	<div
		class="relative top-8 md:top-12 lg:top-32 w-fit mx-auto bg-white bg-opacity-[.60] p-4 md:p-8 lg:p-12 rounded-full"
	>
		<Heading>Contact Us</Heading>
	</div>
</main>

<div class="flex flex-col-reverse lg:flex-row justify-center items-center">
	<img class="flex-grow-0 -m-24 lg:m-0" src="/images/velvet-acres.svg" alt="Velvet Acres logo" />
	<div class="flex-grow-0 py-8">
		<div class="px-10 text-2xl md:text-3xl">
			<p>We are located at:</p>
			<span>
				1234 Main Street
				<br />
				New Richmond, OH 45155
			</span>
			<p>Phone Number:</p>
			<span> (877) 555-1234 </span>
			<p>Please call to schedule a tour and check our availability.</p>
		</div>
	</div>
</div>

<style lang="postcss">
	p {
		@apply mt-6;
	}
	span {
		@apply font-playfair;
	}
</style>
