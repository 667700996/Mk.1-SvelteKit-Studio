<script>
	export let data;
</script>

<div class="space-y-8">
	<h1 class="text-4xl font-bold">The Blog</h1>

	{#each data.posts as post}
		<article class="card bg-base-200 shadow-xl hover:bg-base-300 transition-colors">
			<div class="card-body">
				<h2 class="card-title">
					<a href={`/blog/${post.slug}`} class="link link-hover text-primary">{post.title}</a>
				</h2>
				<p class="text-sm text-base-content/70">{new Date(post.date).toLocaleDateString()}</p>
				<p>{post.description}</p>
				<div class="card-actions justify-end">
					<a href={`/blog/${post.slug}`} class="btn btn-primary">Read More</a>
				</div>
			</div>
		</article>
	{/each}
</div>
