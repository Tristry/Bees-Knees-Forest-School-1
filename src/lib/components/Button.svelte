<script lang="ts">
	export let variant = 'PRIMARY';
	export let classname = '';
	export let style = ''
	const variants: any = {
		PRIMARY: 'bg-primary rounded-full py-[12px] px-5 cursor-pointer text-primary-foreground text-sm hover:bg-primary/90 transition-all',
		WHITE: 'bg-white rounded-full py-[6px] px-2 cursor-pointer text-secondary-foreground text-sm transition-all',
		GREEN: 'bg-[#054900] rounded-full py-[12px] px-5 cursor-pointer text-primary-foreground text-sm hover:bg-primary/90 transition-all',
	};
</script>

<button class={`bg-primary rounded-full cursor-pointer ${variants[variant]} ${classname}`} style={style}>
	<slot />
</button>
