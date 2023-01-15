<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="grid place-items-center gap-2">
	{#if data.session}
		<h1 class="text-2xl">Welcome {data.session.user.email}!</h1>
	{:else}
		<h1 class="text-2xl">Welcome stranger!</h1>
	{/if}
	<div class="">
		<a class="w-auto border p-2 rounded-md" href="/app">Get Started</a>
	</div>
</div>
