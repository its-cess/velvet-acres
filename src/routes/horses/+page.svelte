<script>
	import Heading from '$lib/base/Heading.svelte';
	import GridContainer from '$lib/base/GridContainer.svelte';
	import BaseCard from '$lib/base/BaseCard.svelte';

	let horses = [
		{
			id: 1,
			name: 'Red',
			age: 30,
			breed: 'Arabian',
			sex: 'Gelding',
			bio: 'Loves sticking his tongue out during retirement!'
		},
		{
			id: 2,
			name: 'Max',
			age: 4,
			breed: 'Andalusian/Friesian',
			sex: 'Gelding',
			bio: 'Is curious about everything.'
		},
		{
			id: 3,
			name: 'Simba',
			age: 10,
			breed: 'Arabian',
			sex: 'Gelding',
			bio: 'Is scared of everything.'
		},
		{
			id: 4,
			name: 'Peanut',
			age: 20,
			breed: 'Arabian',
			sex: 'Gelding',
			bio: 'Will jump everything!!'
		}
	];
</script>

<Heading>Our Horses</Heading>
<GridContainer>
	{#each horses as horse (horse.id)}
		<BaseCard>
			<Heading secondary justify tertiary>{horse.name}</Heading>
			<span class="text-lg">{horse.breed}</span>,
			<span class="text-sm font-bold">{horse.age}</span>
			<br />
			<span>{horse.sex}</span>
			<p class="pt-3">{horse.bio}</p>
		</BaseCard>
	{/each}
</GridContainer>
