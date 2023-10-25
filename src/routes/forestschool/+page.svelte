<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	const principles = [
		{
			title: 'Regular Sessions',
			description:
				'Forest School is a long-term process of regular sessions, rather than one-off or infrequent visits; the cycle of planning, observation, adaptation and review links each session.',
			svg: `<svg width="22" height="51" viewBox="0 0 35 51" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path opacity="0.4" d="M34.3481 45.084C32.8892 48.6795 29.3348 51 25.3294 51H9.67939C5.64753 51 2.11965 48.6795 0.660751 45.084C-0.798147 41.463 0.20982 37.4595 3.18067 34.8585L13.9235 25.5H21.1119L31.8281 34.8585C34.799 37.4595 35.7804 41.463 34.3481 45.084Z" fill="#054900"/>
					<path d="M22.333 41.1571H12.6778C11.6698 41.1571 10.874 40.3666 10.874 39.4231C10.874 38.4541 11.6963 37.6891 12.6778 37.6891H22.333C23.341 37.6891 24.1367 38.4796 24.1367 39.4231C24.1367 40.3666 23.3144 41.1571 22.333 41.1571Z" fill="#054900"/>
					<path d="M34.351 5.916C32.8922 2.3205 29.3377 0 25.3324 0H9.68254C5.67721 0 2.1228 2.3205 0.663903 5.916C-0.76847 9.537 0.212971 13.5405 3.21034 16.1415L13.9265 25.5H21.1149L31.8311 16.1415C34.802 13.5405 35.7834 9.537 34.351 5.916ZM22.335 13.3365H12.6798C11.672 13.3365 10.8762 12.546 10.8762 11.6025C10.8762 10.659 11.6985 9.8685 12.6798 9.8685H22.335C23.343 9.8685 24.1388 10.659 24.1388 11.6025C24.1388 12.546 23.3165 13.3365 22.335 13.3365Z" fill="#054900"/>
					</svg>
				`
		},
		{
			title: 'Regular Sessions',
			description:
				'Forest School is a long-term process of regular sessions, rather than one-off or infrequent visits; the cycle of planning, observation, adaptation and review links each session.',
			svg: `<svg width="22" height="51" viewBox="0 0 35 51" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path opacity="0.4" d="M34.3481 45.084C32.8892 48.6795 29.3348 51 25.3294 51H9.67939C5.64753 51 2.11965 48.6795 0.660751 45.084C-0.798147 41.463 0.20982 37.4595 3.18067 34.8585L13.9235 25.5H21.1119L31.8281 34.8585C34.799 37.4595 35.7804 41.463 34.3481 45.084Z" fill="#054900"/>
					<path d="M22.333 41.1571H12.6778C11.6698 41.1571 10.874 40.3666 10.874 39.4231C10.874 38.4541 11.6963 37.6891 12.6778 37.6891H22.333C23.341 37.6891 24.1367 38.4796 24.1367 39.4231C24.1367 40.3666 23.3144 41.1571 22.333 41.1571Z" fill="#054900"/>
					<path d="M34.351 5.916C32.8922 2.3205 29.3377 0 25.3324 0H9.68254C5.67721 0 2.1228 2.3205 0.663903 5.916C-0.76847 9.537 0.212971 13.5405 3.21034 16.1415L13.9265 25.5H21.1149L31.8311 16.1415C34.802 13.5405 35.7834 9.537 34.351 5.916ZM22.335 13.3365H12.6798C11.672 13.3365 10.8762 12.546 10.8762 11.6025C10.8762 10.659 11.6985 9.8685 12.6798 9.8685H22.335C23.343 9.8685 24.1388 10.659 24.1388 11.6025C24.1388 12.546 23.3165 13.3365 22.335 13.3365Z" fill="#054900"/>
					</svg>
				`
		},
		{
			title: 'Regular Sessions',
			description:
				'Forest School is a long-term process of regular sessions, rather than one-off or infrequent visits; the cycle of planning, observation, adaptation and review links each session.',
			svg: `<svg width="22" height="51" viewBox="0 0 35 51" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path opacity="0.4" d="M34.3481 45.084C32.8892 48.6795 29.3348 51 25.3294 51H9.67939C5.64753 51 2.11965 48.6795 0.660751 45.084C-0.798147 41.463 0.20982 37.4595 3.18067 34.8585L13.9235 25.5H21.1119L31.8281 34.8585C34.799 37.4595 35.7804 41.463 34.3481 45.084Z" fill="#054900"/>
					<path d="M22.333 41.1571H12.6778C11.6698 41.1571 10.874 40.3666 10.874 39.4231C10.874 38.4541 11.6963 37.6891 12.6778 37.6891H22.333C23.341 37.6891 24.1367 38.4796 24.1367 39.4231C24.1367 40.3666 23.3144 41.1571 22.333 41.1571Z" fill="#054900"/>
					<path d="M34.351 5.916C32.8922 2.3205 29.3377 0 25.3324 0H9.68254C5.67721 0 2.1228 2.3205 0.663903 5.916C-0.76847 9.537 0.212971 13.5405 3.21034 16.1415L13.9265 25.5H21.1149L31.8311 16.1415C34.802 13.5405 35.7834 9.537 34.351 5.916ZM22.335 13.3365H12.6798C11.672 13.3365 10.8762 12.546 10.8762 11.6025C10.8762 10.659 11.6985 9.8685 12.6798 9.8685H22.335C23.343 9.8685 24.1388 10.659 24.1388 11.6025C24.1388 12.546 23.3165 13.3365 22.335 13.3365Z" fill="#054900"/>
					</svg>
				`
		},
		{
			title: 'Regular Sessions',
			description:
				'Forest School is a long-term process of regular sessions, rather than one-off or infrequent visits; the cycle of planning, observation, adaptation and review links each session.',
			svg: `<svg width="22" height="51" viewBox="0 0 35 51" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path opacity="0.4" d="M34.3481 45.084C32.8892 48.6795 29.3348 51 25.3294 51H9.67939C5.64753 51 2.11965 48.6795 0.660751 45.084C-0.798147 41.463 0.20982 37.4595 3.18067 34.8585L13.9235 25.5H21.1119L31.8281 34.8585C34.799 37.4595 35.7804 41.463 34.3481 45.084Z" fill="#054900"/>
					<path d="M22.333 41.1571H12.6778C11.6698 41.1571 10.874 40.3666 10.874 39.4231C10.874 38.4541 11.6963 37.6891 12.6778 37.6891H22.333C23.341 37.6891 24.1367 38.4796 24.1367 39.4231C24.1367 40.3666 23.3144 41.1571 22.333 41.1571Z" fill="#054900"/>
					<path d="M34.351 5.916C32.8922 2.3205 29.3377 0 25.3324 0H9.68254C5.67721 0 2.1228 2.3205 0.663903 5.916C-0.76847 9.537 0.212971 13.5405 3.21034 16.1415L13.9265 25.5H21.1149L31.8311 16.1415C34.802 13.5405 35.7834 9.537 34.351 5.916ZM22.335 13.3365H12.6798C11.672 13.3365 10.8762 12.546 10.8762 11.6025C10.8762 10.659 11.6985 9.8685 12.6798 9.8685H22.335C23.343 9.8685 24.1388 10.659 24.1388 11.6025C24.1388 12.546 23.3165 13.3365 22.335 13.3365Z" fill="#054900"/>
					</svg>
				`
		},
		{
			title: 'Regular Sessions',
			description:
				'Forest School is a long-term process of regular sessions, rather than one-off or infrequent visits; the cycle of planning, observation, adaptation and review links each session.',
			svg: `<svg width="22" height="51" viewBox="0 0 35 51" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path opacity="0.4" d="M34.3481 45.084C32.8892 48.6795 29.3348 51 25.3294 51H9.67939C5.64753 51 2.11965 48.6795 0.660751 45.084C-0.798147 41.463 0.20982 37.4595 3.18067 34.8585L13.9235 25.5H21.1119L31.8281 34.8585C34.799 37.4595 35.7804 41.463 34.3481 45.084Z" fill="#054900"/>
					<path d="M22.333 41.1571H12.6778C11.6698 41.1571 10.874 40.3666 10.874 39.4231C10.874 38.4541 11.6963 37.6891 12.6778 37.6891H22.333C23.341 37.6891 24.1367 38.4796 24.1367 39.4231C24.1367 40.3666 23.3144 41.1571 22.333 41.1571Z" fill="#054900"/>
					<path d="M34.351 5.916C32.8922 2.3205 29.3377 0 25.3324 0H9.68254C5.67721 0 2.1228 2.3205 0.663903 5.916C-0.76847 9.537 0.212971 13.5405 3.21034 16.1415L13.9265 25.5H21.1149L31.8311 16.1415C34.802 13.5405 35.7834 9.537 34.351 5.916ZM22.335 13.3365H12.6798C11.672 13.3365 10.8762 12.546 10.8762 11.6025C10.8762 10.659 11.6985 9.8685 12.6798 9.8685H22.335C23.343 9.8685 24.1388 10.659 24.1388 11.6025C24.1388 12.546 23.3165 13.3365 22.335 13.3365Z" fill="#054900"/>
					</svg>
				`
		},
		{
			title: 'Regular Sessions',
			description:
				'Forest School is a long-term process of regular sessions, rather than one-off or infrequent visits; the cycle of planning, observation, adaptation and review links each session.',
			svg: `<svg width="22" height="51" viewBox="0 0 35 51" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path opacity="0.4" d="M34.3481 45.084C32.8892 48.6795 29.3348 51 25.3294 51H9.67939C5.64753 51 2.11965 48.6795 0.660751 45.084C-0.798147 41.463 0.20982 37.4595 3.18067 34.8585L13.9235 25.5H21.1119L31.8281 34.8585C34.799 37.4595 35.7804 41.463 34.3481 45.084Z" fill="#054900"/>
					<path d="M22.333 41.1571H12.6778C11.6698 41.1571 10.874 40.3666 10.874 39.4231C10.874 38.4541 11.6963 37.6891 12.6778 37.6891H22.333C23.341 37.6891 24.1367 38.4796 24.1367 39.4231C24.1367 40.3666 23.3144 41.1571 22.333 41.1571Z" fill="#054900"/>
					<path d="M34.351 5.916C32.8922 2.3205 29.3377 0 25.3324 0H9.68254C5.67721 0 2.1228 2.3205 0.663903 5.916C-0.76847 9.537 0.212971 13.5405 3.21034 16.1415L13.9265 25.5H21.1149L31.8311 16.1415C34.802 13.5405 35.7834 9.537 34.351 5.916ZM22.335 13.3365H12.6798C11.672 13.3365 10.8762 12.546 10.8762 11.6025C10.8762 10.659 11.6985 9.8685 12.6798 9.8685H22.335C23.343 9.8685 24.1388 10.659 24.1388 11.6025C24.1388 12.546 23.3165 13.3365 22.335 13.3365Z" fill="#054900"/>
					</svg>
				`
		}
	];
	const ethos = [
		{
			title: 'Nature Connection',
			description:
				'Our clubs place a strong emphasis on connecting children with the natural world. It recognises the importance of nature in nurturing physical, emotional, and intellectual well-being.'
		},
		{
			title: 'Nature Connection',
			description:
				'Our clubs place a strong emphasis on connecting children with the natural world. It recognises the importance of nature in nurturing physical, emotional, and intellectual well-being.'
		},
		{
			title: 'Nature Connection',
			description:
				'Our clubs place a strong emphasis on connecting children with the natural world. It recognises the importance of nature in nurturing physical, emotional, and intellectual well-being.'
		},
		{
			title: 'Nature Connection',
			description:
				'Our clubs place a strong emphasis on connecting children with the natural world. It recognises the importance of nature in nurturing physical, emotional, and intellectual well-being.'
		},
		{
			title: 'Nature Connection',
			description:
				'Our clubs place a strong emphasis on connecting children with the natural world. It recognises the importance of nature in nurturing physical, emotional, and intellectual well-being.'
		},
		{
			title: 'Nature Connection',
			description:
				'Our clubs place a strong emphasis on connecting children with the natural world. It recognises the importance of nature in nurturing physical, emotional, and intellectual well-being.'
		},
		{
			title: 'Nature Connection',
			description:
				'Our clubs place a strong emphasis on connecting children with the natural world. It recognises the importance of nature in nurturing physical, emotional, and intellectual well-being.'
		},
		{
			title: 'Nature Connection',
			description:
				'Our clubs place a strong emphasis on connecting children with the natural world. It recognises the importance of nature in nurturing physical, emotional, and intellectual well-being.'
		}
	];
</script>

<section class="container pt-1">
	<h1 class="text-3xl leading-[42px] my-4 max-md:text-2xl">
		What is a <span class="text-[#054900]">Forest School?</span>
	</h1>
	<p class="leading-7 max-md:text-sm max-md:leading-6">
		Forest School is a form of outdoor education that emphasises child-led learning. Forest school
		practitioners provide a non-judgmental environment that supports play exploration and supported
		risk taking. It is a long term process of frequent and regular sessions in a woodland or natural
		environment that focuses on holistic development that carries over both in school and in the
		home.
	</p>
	<div class="w-full h-[500px] max-md:h-[250px] max-md:mt-5 mt-10 rounded-lg overflow-hidden">
		<img
			class="w-full h-full object-cover"
			src="https://cdn.discordapp.com/attachments/1020025379840327741/1160136628048769034/anarkyyy_Adventurous_kids_showing_risk_assessment_skills_in_eng_e6aba248-cebd-4ada-9315-3086fa945e58.png?ex=653ccaee&is=652a55ee&hm=ef959e8b424f1b08be960235ef3cad1f109f9e8858afeaa22a9ecc5dd2e1651a&"
			alt=""
		/>
	</div>
</section>


<section class="container">
	<h1 class="text-3xl leading-[42px] my-8 max-md:text-2xl">
		Principles of a <span class="text-[#054900]">Forest School</span>
	</h1>
	<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
		{#each principles as principle}
			<div class="py-2 px-5 rounded-lg bg-[#BFFFBA]">
				<div class="flex items-center gap-4">
					{@html principle.svg}
					<p class="font-medium text-[#054900]">{principle.title}</p>
				</div>
				<p class="text-sm leading-6">
					{principle.description}
				</p>
			</div>
		{/each}
	</div>
	<Button classname="mt-6" variant="GREEN">Learn More</Button>
</section>

<section class="container scroll-mt-16 mt-8" id="ethos">
	<h1 class="text-3xl leading-[42px] mt-6 mb-4 max-md:text-2xl">
		The Bees Knees <span class="text-[#054900]">Ethos</span>
	</h1>
	<p class="max-md:text-sm max-md:leading-6">
		Much like Forest Schools, our Bee's Knees ethos is based on an educational approach that emphasises experiential and nature-based learning in outdoor settings. It is rooted in a philosophy that seeks to foster holistic development in children of all ages and physical abilities. Here are some key principles and aspects of the Bee’s Knees ethos:
	</p>
	<ul class="flex gap-2 flex-col">
		{#each ethos as etho, index}
			<li class="mt-4 flex gap-4">
				<div class="min-w-[40px] min-h-[40px] w-[45px] h-[40px] max-md:hidden rounded-full justify-center flex items-center bg-[#BFFFBA] text-[#054900] ">
					<p class="text-sm font-bold">0{index + 1}</p>
				</div>
				<p class="leading-7 max-md:leading-6 max-md:text-sm">
					<span class="font-bold"><span class="text-[#054900] underline">{etho.title}:</span></span> {etho.description}
				</p>
			</li>
		{/each}
	</ul>
</section>

<section class="container leading-8 scroll-mt-16" id="evidence">
	<h1 class="text-3xl leading-[42px] mt-6 mb-4 max-md:text-2xl text-[#054900]">
		Evidence
	</h1>
	<p class="max-md:text-sm max-md:leading-6">
		Evidence that suggests time spent outdoors in childhood is associated with reduced risk of myopia (short-sightedness) as an adult. The study followed two cohorts of children under the age of 6 and found that those that were exposed to just 10 hours of natural daylight a week were significantly less likely to experience myopia as adults compared to their counter group who were on average exposed to less than 10 hours of natural daylight per week. (1)
	</p>
	<p class="font-bold mt-4 max-md:text-sm max-md:leading-6">Evidence</p>
	<p class="max-md:text-sm max-md:leading-6">Lingham, G., Yazar, S., Lucas, R.M. et al. Time spent outdoors in childhood is associated with reduced risk of myopia as an adult. Sci Rep 11, 6337 (2021).
		<bt /><br />https://www.littleforestfolk.com/evidence</p>
</section>
