<script lang="ts">
	import { cn } from '$lib';
	import { CLUBS } from '../../data/clubs';
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
					Welcome to our enriching After-School Clubs, where young minds embark on exciting journeys
					of exploration and discovery. Designed to spark curiosity and nurture a deep connection to
					the natural world, our clubs offer a wide range of engaging activities for students.
					Whether it's delving into the wonders of nature, igniting creativity through art,
					understanding the vital importance of the environment, or learning valuable outdoor
					skills, our clubs are a gateway to unforgettable experiences. Led by passionate educators
					and set against the backdrop of each school's beautiful outdoor facilities, these clubs
					provide the perfect opportunity for children to learn, grow, and make lasting memories.
					Join us in fostering a love for learning, a respect for the environment, and the joy of
					discovery right here at our school. Enrol your child today and let the adventure begin!
				</p>
			</div>
		</div>
	</div>
</section>

<section class="container mt-6 space-y-6">
	{#each CLUBS as club, index}
		<div
			class={`w-full flex gap-4 max-md:flex-col-reverse h-auto  ${
				index % 2 != 0 ? 'md:flex-row-reverse' : ''
			}`}
		>
			<div
				class="p-8 w-[70%] max-md:w-full max-md:p-3 rounded-xl flex flex-col justify-between"
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
						class="leading-7 opacity-90 max-md:text-sm max-md:leading-6 line-clamp-[12]"
						style={`color: ${club.primaryColor};`}
					>
						{club.description}...
					</p>
					<div>
						<a href={`/clubs/${club.id}`}>
							<Button
								classname="!mt-auto"
								style={`background-color: ${club.primaryColor}; color: ${club.buttonColor}`}
								>Read More</Button
							>
						</a>
					</div>
				</div>

			</div>
			<div
				class="max-md:hidden max-md:w-full max-md:h-[200px] w-[30%] h-auto rounded-xl overflow-hidden bg-slate-600"
			>
				<img src={club.image} alt="" class="w-full h-full object-cover" />
			</div>
		</div>
	{/each}
</section>
