<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col items-center gap-4 border p-4 rounded-md">
	<h1>Hello {data.session?.user.email}</h1>

	<form action="/auth/logout" method="post">
		<button class="bg-red-600 text-white px-2 py-1 rounded-md" type="submit">Logout</button>
	</form>
</div>
