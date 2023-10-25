<script lang="ts">
	import { page } from '$app/stores';
	import { CLUBS } from '$lib/clubs';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { Input } from '$lib/components/ui/Input';
	import Label from '$lib/components/ui/label/label.svelte';
	import * as Select from '$lib/components/ui/select';
	const id = $page.params.id;
	$: club = CLUBS.find((club) => club.id.toLowerCase() == id.toLowerCase());
	if (!club) {
	}
</script>

{#if club}
	<section class="container pt-1">
		<h1 class="text-3xl leading-[42px] max-md:text-2xl my-4" style={`color: ${club.primaryColor};`}>{club?.id}</h1>
		<div class="w-full max-md:h-[200px] h-[400px] rounded-lg overflow-hidden">
			<img class="w-full h-full object-cover" src={CLUBS[0].image} alt="" />
		</div>
		<div class="flex justify-between max-md:flex-col">
			<p class="mt-4 leading-7 w-3/5 max-md:w-full max-md:text-sm max-md:leading-6">
				{club?.description}
			</p>
			<div style={`background-color:${club?.secondaryColor}`} class="w-2/5 max-w-[350px] mt-4 rounded-lg h-full space-y-2 border p-4 max-md:w-full">
				<p class="mb-2" style={`color:${club?.primaryColor}`}>Club Details</p>
				<div class="space-y-2">
					<Label style={`color:${club?.primaryColor}`} for="school">School</Label>
					<Select.Root>
						<Select.Trigger style={`border:1px solid ${club?.primaryColor}`} class="rounded-full py-5 ">
							<Select.Value placeholder="Pick a school" />
						</Select.Trigger>
						<Select.Content >
							<Select.Item value="light">Option 1</Select.Item>
							<Select.Item value="dark">Option 2</Select.Item>
							<Select.Item value="system">Option 3</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
				<div class="space-y-2">
					<Label for="date">Date</Label>
					<Input style={`border:1px solid ${club?.primaryColor}`} name="date" type="datetime-local" placeholder="Search" />
				</div>
				<div class="space-y-2">
					<Label for="children">Children</Label>
					<Input style={`border:1px solid ${club?.primaryColor}`} name="children" placeholder="Number of children" type="number" />
				</div>
			</div>
		</div>
	</section>

	<section class="container mt-8">
		<h2 class="max-md:text-2xl text-3xl leading-[42px]" style={`color: ${club.primaryColor};`}>Term Highlights</h2>
		<ul>
			{#each club.termHighlights as term, index}
				<li class="mt-4 flex gap-4 max-md:text-sm">
					<div
						class="min-w-20 max-md:hidden w-20 min-h-9 h-9 rounded-full justify-center flex items-center"
						style={`background-color:${club.secondaryColor}`}
					>
						<p class="text-sm font-bold">0{index + 1}</p>
					</div>
					<p class="leading-7">
						<span class="font-bold" style={`color: ${club.primaryColor};`}
							>{term.title}:
						</span>{term.description}
					</p>
				</li>
			{/each}
		</ul>
	</section>
{/if}
