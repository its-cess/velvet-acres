<script>
	let images = [
		{
			id: '1',
			path: '/images/arena.svg',
			description: 'Covered indoor riding arena'
		},
		{
			id: '2',
			path: '/images/barn.svg',
			description: 'Barn aisleway with stalls on both sides'
		},
		{
			id: '3',
			path: '/images/pasture.svg',
			description: 'Green pasture with white four board fencing'
		},
		{
			id: '4',
			path: '/images/tack.svg',
			description: 'Wall with lots of hanging bridles'
		}
	];

	const slideLeft = () => {
		images = [images[images.length - 1], ...images.slice(0, images.length - 1)];
	};

	const slideRight = () => {
		images = [...images.slice(1, images.length), images[0]];
	};
</script>

<div class="flex min-h-[420px] mt-5 items-center">
	<div class="arrow ml-2 lg:ml-20">
		<button on:click={slideLeft}>&#10094</button>
	</div>
	<div class="flex z-0 justify-center items-center w-full overflow-hidden">
		{#each images as image (image.id)}
			<img
				src={image.path}
				alt={image.description}
				class="absolute w-[600px] max-h-[500px] md:h-auto object-cover rounded-lg shadow-md"
			/>
		{/each}
	</div>
	<div class="arrow mr-2 lg:mr-20">
		<button on:click={slideRight}>&#10095</button>
	</div>
</div>

<style lang="postcss">
	.arrow {
		@apply flex z-50 p-2 px-4 rounded-full bg-green bg-opacity-60 h-fit justify-center cursor-pointer text-cream text-4xl;
	}

	.arrow:hover {
		@apply bg-opacity-80 text-white;
	}
</style>
