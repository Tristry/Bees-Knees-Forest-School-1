<script>
	import Button from '$lib/components/Button.svelte';
	import { Input } from '$lib/components/ui/Input/index';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Textarea } from '$lib/components/ui/textarea';
</script>

<section id="contact" class="flex mb-5 max-md:container">
	<div class=" h-full max-w-[600px] ml-auto max-md:text-left mr-auto mt-5">
		<h1 class="text-3xl text-center max-md:text-2xl">Contact Us</h1>
		<p class="my-3 text-center  max-md:text-sm  max-md:leading-6">
			If you have any sort of questions, feel free to contact us by filling out this form or
			emailing us at email@gmail.com
		</p>
		<div class="space-y-4 mt-2">
			<div class="space-y-2">
				<Label for="fullName">Full Name</Label>
				<Input type="text" name="fullName" placeholder="Enter your full name here" />
			</div>
			<div class="space-y-2">
				<Label for="email">Email</Label>
				<Input type="email" name="email" placeholder="Enter your email address here" />
			</div>
			<div class="space-y-2">
				<Label for="phone">Phone</Label>
				<Input type="text" name="phone" placeholder="Enter your phone number here" />
			</div>
			<div class="space-y-2">
				<Label for="message">Message</Label>
				<Textarea name="message" placeholder="Enter your message here" />
			</div>
			<Button classname="w-full">Contact</Button>
		</div>
	</div>
</section>
