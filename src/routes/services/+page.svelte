<script>
	import Heading from '$lib/base/Heading.svelte';
	import BaseCard from '$lib/base/BaseCard.svelte';
	import GridContainer from '$lib/base/GridContainer.svelte';
</script>

<Heading>Services</Heading>
<div class="flex flex-col md:flex-row max-w-3xl mx-auto gap-10">
	<BaseCard>Full Care Board</BaseCard>
	<BaseCard>Partial Care Board</BaseCard>
</div>
<Heading secondary>Additional Services</Heading>
<GridContainer>
	<p>Add a BaseCard component and map over the Additional Services provided here.</p>
</GridContainer>
