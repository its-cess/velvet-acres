<script>
	export let secondary;
	export let justify;
	export let tertiary;
</script>

<h1
	class="text-dark-green playfair {secondary ? 'text-2xl' : 'text-3xl'} {justify
		? 'text-left'
		: 'text-center'} {tertiary ? '' : 'py-10'}"
>
	<slot />
</h1>
