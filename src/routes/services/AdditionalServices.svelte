<script>
	import Heading from '$lib/base/Heading.svelte';
	import GridContainer from '$lib/base/GridContainer.svelte';
	import BaseCard from '../../lib/base/BaseCard.svelte';

	export let additionalServices;
</script>

<Heading secondary>Additional Services</Heading>
<GridContainer>
	{#each additionalServices as additional (additional._id)}
		<BaseCard>
			<Heading secondary tertiary>{additional.name}</Heading>
			<p class="my-4 text-xl">{additional.description}</p>
			{#if additional.name === 'Riding Lessons'}
				<span class="text-tan text-xl">${additional.price}/hour</span>
			{:else}
				<span class="text-tan text-xl">${additional.price}/month</span>
			{/if}
		</BaseCard>
	{/each}
</GridContainer>
