<script>
	import Heading from '$lib/base/Heading.svelte';
	import GridContainer from '$lib/base/GridContainer.svelte';
	import BaseCard from '$lib/base/BaseCard.svelte';

	import sanityClient from '../../sanityClient';
	import imageUrlBuilder from '@sanity/image-url';

	import { calculateAge } from '$lib/utils/ageHelpers';

	export let data;
	export let horses;
	horses = data.horses;

	const builder = imageUrlBuilder(sanityClient);

	function urlFor(source) {
		return builder.image(source);
	}
</script>

<svelte:head>
	<title>Our Horses | Velvet Acres</title>
</svelte:head>

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
			<br />
			<span>{horse.sex},</span>
			<span class="ml-2">
				<span class="text-xl text-dark-green font-playfair">{calculateAge(horse.birthday)}</span>
				years old
			</span>
			<p class="pt-3">{horse.bio}</p>
		</BaseCard>
	{/each}
</GridContainer>
