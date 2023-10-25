<script lang="ts">
	import { cn } from '$lib';
	import { CLUBS } from '$lib/clubs';
	import Button from '$lib/components/Button.svelte';

	const getTitle = (title: string, highlightedWord: string, color: string) => {
		const index = title.indexOf(highlightedWord);
		const firstPart = title.substring(0, index);
		const secondPart = title.substring(index + highlightedWord.length);
		return (
			firstPart +
			`<span style="background-color:${color}; padding:4px; border-radius:4px;">` +
			highlightedWord +
			'</span>' +
			secondPart
		);
	};
</script>

<section id="clubs" class="container overflow-hidden">
	<div class="flex gap-10 h-full mt-3">
		<div class="w-full">
			<div class="">
				<h1 class="max-md:text-2xl text-3xl leading-[50px] text-primary">Our Clubs</h1>
				<p class="max-md:text-sm max-md:leading-6 mt-1 text-base text-muted-foreground leading-7">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet placeat
					doloribus. Consectetur, ducimus nulla, veniam at similique quia error, fuga nisi iste id
					aperiam reiciendis adipisci aut dolor architecto? Unde esse consequatur accusamus
					voluptates, reprehenderit tempora libero assumenda earum quas modi ex neque iusto non quis
					rerum ea cum optio voluptatum. Ea eaque at saepe numquam impedit aliquid rerum! rerum ea
					cum optio voluptatum. Ea eaque at saepe numquam impedit aliquid rerum! rerum ea cum optio
					voluptatum. Ea eaque at saepe numquam impedit aliquid rerum!
				</p>
			</div>
		</div>
	</div>
</section>

<section class="container mt-6 space-y-6">
	{#each CLUBS as club, index}
		<div
			class={`w-full flex gap-4 max-md:flex-col-reverse h-full  ${
				index % 2 != 0 ? 'md:flex-row-reverse' : ''
			}`}
		>
			<div
				class="p-8 w-[80%] max-md:w-full max-md:p-3 h-full rounded-xl flex flex-col justify-between"
				style={`background-color: ${club.secondaryColor};`}
			>
				<div
					class="max-md:flex hidden max-md:mb-4 w-1/4 max-md:w-full max-md:h-[200px] h-auto rounded-xl overflow-hidden"
				>
					<img src={club.image} alt="" class="w-full h-full object-cover" />
				</div>
				<div class="space-y-2">
					<h1
						class="max-md:text-2xl max-md:leading-[34px] text-2xl leading-[42px]"
						style={`color: ${club.primaryColor};`}
					>
						{@html getTitle(club.title, club.highlightedWord, club.tertiaryColor)}
					</h1>
					<p
						class="leading-7 pb-4 opacity-90 max-md:text-sm max-md:leading-6"
						style={`color: ${club.primaryColor};`}
					>
						{club.description.substring(0, 400)}...
					</p>
				</div>
				<div>
					<a href={`/clubs/${club.id}`}>
						<Button
							classname="!mt-auto"
							style={`background-color: ${club.primaryColor}; color: ${club.secondaryColor}`}
							>Read More</Button
						>
					</a>
				</div>
			</div>
			<div
				class="max-md:hidden w-[20%] max-md:w-full max-md:h-[200px] h-auto rounded-xl overflow-hidden bg-slate-200"
			>
				<img src={club.image} alt="" class="w-full h-full object-cover" />
			</div>
		</div>
	{/each}
</section>
