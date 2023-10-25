<script>
	const professionals = [
		{
			name: 'John Doe 1',
			designation: 'Something about the teacher. Maybe the qualifications or something',
			image:
				'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			name: 'John Doe 2',
			designation: 'Something about the teacher. Maybe the qualifications or something',
			image:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		}
	];
</script>

<section
	id="about"
	class="container pt-4 overflow-hidden h-[calc(100vh-350px)] max-h-[calc(100vh-200px)] max-md:h-full max-md:max-h-none"
>
	<div class="flex  max-md:gap-6 h-full max-md:flex-col">
		<div class="w-3/5 max-md:w-full h-full flex flex-col gap-5">
			<div class="">
				<h1 class="max-md:leading-[35px] max-md:text-2xl text-3xl leading-[50px] text-primary">
					A little about Bee's Knees Forest School
				</h1>
				<p class="mt-1 text-sm text-muted-foreground leading-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet placeat doloribus. Consectetur, ducimus nulla, veniam at similique quia error, fuga nisi iste id
					aperiam reiciendis adipisci aut dolor architecto? Unde esse consequatur accusamus voluptates, reprehenderit tempora libero assumenda earum quas modi ex neque iusto non quis rerum ea cum optio voluptatum. Ea eaque at saepe numquam impedit aliquid rerum! rerum ea cum optio voluptatum. Ea eaque at saepe numquam impedit aliquid rerum! 
				</p>
			</div>
			<div class="max-md:hidden flex space-x-10 h-[338px] mt-auto">
				<div class="rounded-lg w-1/2 h-full overflow-hidden">
					<img
						src="https://cdn.discordapp.com/attachments/1020025379840327741/1160133351429111808/anarkyyy_A_bunch_of_adventurous_kids_sitting_in_a_campfilre_in__6f8d45ae-0882-4ea7-9fb4-1c69f373b81c.png?ex=653cc7e1&is=652a52e1&hm=f633480e989ea0ac12c0d2edd294b4f163c324ea483036df3d75dbb83ad5b996&"
						alt=""
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="rounded-lg w-1/2 overflow-hidden h-full">
					<img
						src="https://cdn.discordapp.com/attachments/1020025379840327741/1160146543450525767/anarkyyy_Grown_adults_as_adventure_school_instructors_adventuro_6e0e81c0-629c-4774-bb45-ba1b437dc610.png?ex=653cd42a&is=652a5f2a&hm=2eff96fe900af5ebeaf26ed4a5290810bcecb6d2599454ed82d032f0deffae1a&"
						alt=""
						class="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
		<div class="w-2/5 max-md:w-full max-md:h-[200px] h-full rounded-lg overflow-hidden">
			<img
				src="https://cdn.discordapp.com/attachments/1020025379840327741/1161358541634941078/anarkyyy_Realistic_green_english_woodlands_480c06cc-4463-42c6-a7a3-3bcdeac6ca4f.png?ex=65413ced&is=652ec7ed&hm=b04fe9ccd06abeadbed21ed7a1e308bb7449626d728a6697bd462f5e0244af93&"
				alt=""
				class="w-full h-full object-cover"
			/>
		</div>
	</div>
</section>

<section id="team" class="container mt-4  h-fit scroll-mt-16 block">
	<h2 class="max-md:leading-[36px] max-md:w-full max-md:text-2xl text-3xl leading-[50px] text-primary mb-4">Our team of professionals</h2>
	<div class="flex space-x-12 max-md:flex-col max-md:space-x-0 max-md:space-y-5">
		{#each professionals as professional}
			<div
				class="w-[360px] h-[500px] rounded-xl overflow-hidden relative group"
			>
				<div class="w-full h-full">
					<img src={professional.image} alt="" class="object-cover w-full h-full" />
				</div>
				<div
					class="absolute top-0 z-10 bg-gradient-to-t from-black/100 via-black/50 to-white/0 h-[70vh] lg:h-[80vh] w-full transition-all"
				/>
				<div class="absolute bottom-0 translate-y-16 group-hover:translate-y-0 max-md:translate-y-0 transition-all px-5 py-4 text-white z-20">
					<p class="mb-5 max-md:mb-2 group-hover:mb-2 transition-all text-lg">{professional.name}</p>
					<p class="leading-6 max-md:opacity-80 opacity-0 group-hover:opacity-80 transition-all">{professional.designation}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
