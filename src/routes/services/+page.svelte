<script>
	import Heading from '$lib/base/Heading.svelte';
	import BaseCard from '$lib/base/BaseCard.svelte';

	import { PortableText } from '@portabletext/svelte';
	import DefaultListItem from '$lib/components/DefaultListItem.svelte';
	import AdditionalServices from './AdditionalServices.svelte';

	export let data;
	export let services;
	export let additionalServices;
	services = data.services;
	additionalServices = data.additionalServices;
</script>

<svelte:head>
	<title>Services | Velvet Acres</title>
</svelte:head>

{#if services}
	<Heading>Services</Heading>
	<div class="flex flex-col md:flex-row max-w-3xl mx-auto gap-10">
		{#each services as service (service._id)}
			<BaseCard>
				<Heading secondary tertiary>{service.name}</Heading>
				<span class="text-tan text-xl">${service.price}/month</span>
				<div class="text-left pt-3 text-xl">
					<PortableText
						value={service.description}
						components={{
							listItem: {
								bullet: DefaultListItem,
								normal: DefaultListItem
							}
						}}
					/>
				</div>
			</BaseCard>
		{/each}
	</div>
{:else}
	<h3>Please check back later to see our services!</h3>
{/if}

{#if additionalServices}
	<AdditionalServices {additionalServices} />
{/if}
