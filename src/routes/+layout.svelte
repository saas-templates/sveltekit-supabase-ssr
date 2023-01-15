<script lang="ts">
	import './base.css';

	import { invalidateAll } from '$app/navigation';
	import { client } from '$lib/supabase';
	import { onMount } from 'svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = client.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<div class="w-full h-screen grid place-items-center">
	<slot />
</div>
