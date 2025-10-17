<script>
	import PageSection from '$lib/components/ui/PageSection.svelte';

	export let data;

	const { project } = data;
</script>

<PageSection id="project-hero" tone="contrast" padding="xl">
	<div class="space-y-6">
		<a href="/work" class="link-cta">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4 rotate-180"
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
			Back to Work
		</a>
		<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
			{project.title}
		</h1>
		<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
			{project.description}
		</p>
	</div>
</PageSection>

<PageSection id="project-image">
	<img src={project.image} alt={project.title} class="w-full rounded-lg shadow-lg" />
</PageSection>

<PageSection id="project-content">
	<div
		class="prose prose-base max-w-none text-base-content sm:prose-lg lg:prose-xl prose-headings:font-semibold prose-a:text-primary"
	>
		{project.content}
	</div>
</PageSection>
