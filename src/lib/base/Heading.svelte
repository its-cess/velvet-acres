<script>
	export let secondary = undefined;
	export let justify = undefined;
	export let tertiary = undefined;
</script>

<h1
	class="text-dark-green font-playfair {secondary ? 'text-2xl' : 'text-3xl'} {justify
		? 'text-left'
		: 'text-center'} {tertiary ? '' : 'py-6 md:py-10'}"
>
	<slot />
</h1>
