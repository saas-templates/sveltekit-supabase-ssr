<script lang="ts">
</script>

<div class="w-[300px] border rounded-md p-6">
	<h1 class="text-xl border-b">Register</h1>
	<form class="mt-6 flex flex-col gap-4" method="POST">
		<input type="email" required name="email" placeholder="Enter your email address" />

		<input type="password" required name="password" />

		<div class="flex flex-row gap-2">
			<button formaction="?/register" class="border w-full rounded-md" type="submit"
				>Register</button
			>
			<button formaction="?/login" class="border w-full rounded-md" type="submit">Login</button>
		</div>
	</form>

	<div class="border-b my-2" />
	<form class="mt-2" action="" method="post">
		<button formaction="?/login&provider=github" class="border p-1 rounded-md">Github</button>
	</form>
</div>
