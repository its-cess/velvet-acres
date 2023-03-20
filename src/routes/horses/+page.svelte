<script>
	import Heading from '$lib/base/Heading.svelte';
	import GridContainer from '$lib/base/GridContainer.svelte';
	import BaseCard from '$lib/base/BaseCard.svelte';

	import sanityClient from '../../sanityClient';
	import imageUrlBuilder from '@sanity/image-url';

	export let data;
	export let horses;
	horses = data.horses;

	const builder = imageUrlBuilder(sanityClient);

	function urlFor(source) {
		return builder.image(source);
	}
</script>

<Heading>Our Horses</Heading>
<GridContainer>
	{#each horses as horse (horse._id)}
		<BaseCard>
			<img
				class="rounded-md mx-auto pb-3 drop-shadow-md"
				src={urlFor(horse.image).width(350).url()}
				alt={horse.registeredName}
			/>
			<Heading tertiary>{horse.registeredName}</Heading>
			<Heading secondary tertiary>"{horse.barnName}"</Heading>
			<span class="text-lg">{horse.breed}</span>
			<!-- add age after breed. need to calculate from bday. -->
			<br />
			<span>{horse.sex}</span>
			<p class="pt-3">{horse.bio}</p>
		</BaseCard>
	{/each}
</GridContainer>
