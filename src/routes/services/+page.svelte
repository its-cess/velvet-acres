<script>
	import Heading from '$lib/base/Heading.svelte';
	import BaseCard from '$lib/base/BaseCard.svelte';
	import GridContainer from '$lib/base/GridContainer.svelte';
	import { onMount } from 'svelte';

	export let data;
	export let services;
	services = data.services;
	console.log(services);
	// console.log(services[0].description[0].children[0].text);
</script>

<Heading>Services</Heading>
<div class="flex flex-col md:flex-row max-w-3xl mx-auto gap-10">
	{#each services as service (service._id)}
		<BaseCard>
			<Heading secondary tertiary>{service.name}</Heading>
			<span class="text-tan text-xl">${service.price}/month</span>
		</BaseCard>
	{/each}
</div>
<Heading secondary>Additional Services</Heading>
<GridContainer>
	<p>Add a BaseCard component and map over the Additional Services provided here.</p>
</GridContainer>
