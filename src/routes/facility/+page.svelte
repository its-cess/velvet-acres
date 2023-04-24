<script>
	import { PortableText } from '@portabletext/svelte';
	import Heading from '$lib/base/Heading.svelte';
	import DefaultListItem from '$lib/components/DefaultListItem.svelte';
	import Slideshow from './Slideshow.svelte';

	export let data;
	export let facilities;
	facilities = data.facility;
</script>

<svelte:head>
	<title>Facilities | Velvet Acres</title>
</svelte:head>

<Heading>The Facilities</Heading>
<div class="flex flex-col md:flex-row items-center md:m-4 gap-8 md:justify-center">
	<div class="ml-6 m-y-0 p-5 md:p-3 text-xl md:text-2xl">
		{#each facilities as facility (facility._id)}
			<PortableText
				value={facility.description}
				components={{
					listItem: {
						bullet: DefaultListItem,
						normal: DefaultListItem
					}
				}}
			/>
		{/each}
	</div>
	<div>
		<img
			class="h-[300px] rounded-lg shadow-md"
			src="/images/dressage.svg"
			alt="Buckskin horse doing dressage"
		/>
	</div>
</div>
<!-- large carousel of facility pictures -->
<Slideshow />
