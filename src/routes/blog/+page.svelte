<script>
	import PageSection from '$lib/components/ui/PageSection.svelte';

	export let data;

	const posts = data.posts ?? [];
	const featuredPost = posts[0];
	const remainingPosts = posts.slice(1);

	const tagPool = Array.from(
		new Set(
			posts
				.flatMap((post) => (Array.isArray(post.tags) ? post.tags : []))
				.map((tag) => tag.toLowerCase())
		)
	);

	const dateFormatter = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});

	function formatDate(value) {
		try {
			return dateFormatter.format(new Date(value));
		} catch (error) {
			return value;
		}
	}
</script>

<PageSection id="journal-hero" tone="contrast" padding="xl">
	<div class="space-y-6">
		<span class="eyebrow text-secondary/80">Journal</span>
		<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
			Inside the Mk.1 studio.
		</h1>
		<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
			Notes on design systems, web experiences, experiments, and the lessons learned while building
			in public. Grab a coffee and explore the process.
		</p>

		{#if tagPool.length}
			<div class="flex flex-wrap gap-2">
				{#each tagPool.slice(0, 12) as tag}
					<span
						class="badge badge-outline border-base-300/70 bg-base-100/80 text-xs uppercase tracking-widest"
					>
						#{tag}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</PageSection>

{#if featuredPost}
	<PageSection id="featured-post" padding="compact">
		<div class="grid gap-8 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:items-end">
			<article class="surface-panel flex h-full flex-col justify-between bg-base-100/80">
				<div class="space-y-4">
					<span class="eyebrow text-primary/80">Featured</span>
					<h2 class="text-3xl font-semibold sm:text-4xl">{featuredPost.title}</h2>
					<p class="text-base text-base-content/70">{featuredPost.description}</p>
				</div>

				<div
					class="mt-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest text-base-content/60"
				>
					<span>{formatDate(featuredPost.date)}</span>
					{#if featuredPost.readingTime}
						<span>{featuredPost.readingTime} min read</span>
					{/if}
					{#if featuredPost.tags?.length}
						<ul class="flex flex-wrap gap-2 text-[0.65rem]">
							{#each featuredPost.tags.slice(0, 3) as tag}
								<li class="rounded-full bg-primary/10 px-3 py-1 text-primary/80">#{tag}</li>
							{/each}
						</ul>
					{/if}
				</div>

				<a href={`/blog/${featuredPost.slug}`} class="link-cta mt-6 self-start">
					Read the story
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>
			</article>

			<div class="space-y-6">
				<h3 class="text-sm font-semibold uppercase tracking-widest text-base-content/60">
					In this edition
				</h3>
				<ul class="space-y-4 text-sm text-base-content/70">
					{#each featuredPost.tags ?? ['process', 'craft', 'experiments'] as tag, index}
						<li class="flex items-start gap-3">
							<span class="mt-1 inline-flex h-2 w-2 rounded-full bg-secondary/70" />
							<span class="leading-relaxed">
								<strong class="text-base-content">{index + 1}. {tag}</strong> — a closer look at how
								it shapes the work.
							</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</PageSection>
{/if}

<PageSection id="all-posts">
	<div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
		<div>
			<span class="eyebrow text-secondary/80">Archive</span>
			<h2 class="text-3xl font-semibold sm:text-4xl">All journal entries</h2>
		</div>
		<p class="max-w-xl text-sm text-base-content/60">
			Dive into the backlog of process write-ups, tooling breakdowns, and creative experiments
			powering the studio.
		</p>
	</div>

	<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
		{#each remainingPosts as post}
			<article class="surface-card flex h-full flex-col justify-between">
				<div class="space-y-3">
					<div
						class="flex items-center gap-3 text-xs uppercase tracking-widest text-base-content/60"
					>
						<span>{formatDate(post.date)}</span>
						{#if post.readingTime}
							<span>{post.readingTime} min read</span>
						{/if}
					</div>
					<h3 class="text-xl font-semibold text-base-content hover:text-primary">
						<a href={`/blog/${post.slug}`}>
							{post.title}
						</a>
					</h3>
					<p class="text-sm text-base-content/70">{post.description}</p>
				</div>

				{#if post.tags?.length}
					<ul
						class="mt-6 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-widest text-primary/70"
					>
						{#each post.tags.slice(0, 4) as tag}
							<li class="rounded-full bg-primary/10 px-3 py-1">#{tag}</li>
						{/each}
					</ul>
				{/if}

				<a href={`/blog/${post.slug}`} class="link-cta mt-6">
					Read article
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>
			</article>
		{/each}
	</div>

	{#if posts.length <= 1}
		<div
			class="rounded-2xl border border-dashed border-base-300/70 bg-base-100/60 p-10 text-center text-base-content/70"
		>
			More stories are on the way. Subscribe soon to get updates.
		</div>
	{/if}
</PageSection>
