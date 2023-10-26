<script>
	import Button from '$lib/components/Button.svelte';

	const professionals = [
		{
			name: 'Krishna',
			description: `With over 9 years of dedicated experience in education across primary and secondary schools, Krishna embarked on an inspiring journey that led to the creation of The Bee's Knees Forest School. The defining moment occurred in 2015 when the concept of 'democratic education' ignited a passion for offering students the power to choose what they learn. Having worked in mainstream education supporting students with special needs, it became evident that traditional classroom walls and standardised curricula fell short of meeting these students' unique requirements. The quest for alternative education practices led to exploration of Montessori, Steiner, Reggio Emilia, and, ultimately, the Forest School ethos. Becoming a Level 3 Forest School Leader after immersive training, Krishna's path became clear. She began working in various settings, from establishing a Forest School from the ground up to collaborating with educational institutions. However, the pure delight of being in the forest every day, witnessing the sheer joy on children's faces, and witnessing those profound 'light bulb' moments ignited an unwavering sense of purpose.Now, armed with a wealth of educational expertise, the dream of The Bee's Knees Forest School is to provide this unique joy to as many children as possible, while also ensuring that educators find true reward through their love for teaching. This vision is the culmination of a heartfelt journey dedicated to redefining the way we learn and grow.`,
			image:
				'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			primaryColor: '#353000',
			secondaryColor: '#fff9ba',
			tertiaryColor: '#69FF93',
			buttonColor: '#BFFFBA'
		},
		{
			name: 'Shailen',
			description: `Our Co-Founder's journey with nature began at a young age, spending countless hours outdoors in the garden throughout childhood. This early connection with the natural world eventually led to a deep-seated passion for the environment and the pursuit of knowledge.With a degree in biology from Imperial College London, our Co-Founder's commitment to understanding the intricacies of the natural world only deepened. This dedication translated into hands-on experiments, including running hydroponic setups and nurturing microgreens, as well as creating intricate underwater ecosystems.The unwavering love for nature has grown into a firm belief that every child should have the opportunity to experience and benefit from the wonders of the great outdoors. Sharing a common passion for using the outdoors as a wellspring of inspiration, our Co-Founder actively supports the day-to-day activities of The Bee's Knees Forest School.Their genuine commitment to instilling a love for nature and a passion for learning is a cornerstone of our mission, enriching the lives of the children we serve.`,
			image:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			primaryColor: '#054900',
			secondaryColor: '#BFFFBA',
			tertiaryColor: '#69FF93',
			buttonColor: '#BFFFBA'
		}
	];
</script>

<section id="about" class="container pt-4 overflow-hidden h-full">
	<div class="flex gap-6 h-full max-md:flex-col">
		<div class="w-full max-md:w-full h-full flex flex-col gap-5">
			<div class="">
				<h1 class="max-md:leading-[35px] max-md:text-2xl text-3xl leading-[50px] text-primary">
					A little about Bee's Knees Forest School
				</h1>
				<p class="mt-1 max-md:text-sm text-base text-muted-foreground leading-8">
					At The Bee's Knees Forest School, our mission is to rekindle the unbreakable bond between
					children and nature, empowering them to learn from the world's greatest teacher - the
					great outdoors. We believe in nurturing young minds by cultivating a sense of wonder and
					curiosity, encouraging children to educate themselves in a way that is free, independent,
					and uninfluenced, teaching them not what to think, but how to think.
					<br />
					Our Forest School is a place where fun and organic learning come together, providing an environment
					where children can play, explore, and grow in harmony with the natural world. We are committed
					to helping children reap the profound benefits that outdoor experiences offer, cultivating
					essential life skills and emotional resilience that are increasingly vital in a world marked
					by growing mental health challenges among our youth.
					<br />
					The Bee's Knees Forest School is dedicated to creating a space where children can thrive and
					flourish, unburdened by the constraints of modern life, and where they can develop a deep appreciation
					for the wonders of nature. Through this mission, we aim to equip the next generation with the
					tools they need to navigate life's challenges and uncertainties with grace, strength, and an
					enduring connection to the world around them.
				</p>
			</div>
		</div>
	</div>
</section>

<section id="team" class="container mt-4 h-fit scroll-mt-16 block">
	<h2
		class="max-md:leading-[36px] max-md:w-full max-md:text-2xl text-3xl leading-[50px] text-primary mb-4"
	>
		Our team of professionals
	</h2>
	<div class="space-y-6">
		{#each professionals as professional, index}
			<div
				class={`flex gap-4 max-md:flex-col-reverse h-full  ${
					index % 2 != 0 ? 'md:flex-row-reverse' : ''
				}`}
			>
				<div
					class="p-8 w-4/5 h-fit max-md:w-full max-md:p-3 rounded-xl flex flex-col justify-between"
					style={`background-color: ${professional.secondaryColor};`}
				>
					<div
						class="max-md:flex hidden max-md:mb-4 w-1/4 max-md:w-full max-md:h-[200px] h-auto rounded-xl overflow-hidden"
					>
						<img src={professional.image} alt="" class="w-full h-full object-cover" />
					</div>
					<div class="space-y-2 h-fit">
						<h1
							class="max-md:text-2xl max-md:leading-[34px] text-2xl leading-[42px]"
							style={`color: ${professional.primaryColor};`}
						>
							{professional.name}
						</h1>
						<p
							class="leading-7 opacity-90 max-md:text-sm max-md:leading-6"
							style={`color: ${professional.primaryColor};`}
						>
							{professional.description}
						</p>
					</div>
				</div>
				<div class="max-md:hidden rounded-xl w-1/5 overflow-hidden">
					<img src={professional.image} alt="" class="w-full h-full object-cover" />
				</div>
			</div>
		{/each}
	</div>
</section>
