<script>
	import PageSection from '$lib/components/ui/PageSection.svelte';

	export let data;

	const projects = data.projects ?? [];
</script>

<PageSection id="work-hero" tone="contrast" padding="xl">
	<div class="space-y-6">
		<span class="eyebrow text-secondary/80">Work</span>
		<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Our Portfolio</h1>
		<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
			A selection of projects that we are proud of.
		</p>
	</div>
</PageSection>

<PageSection id="work-grid">
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<a
				href={`/work/${project.slug}`}
				class="surface-card group flex h-full flex-col justify-between"
			>
				<div class="space-y-3">
					<div class="overflow-hidden rounded-lg">
						<img
							src={project.image}
							alt={project.title}
							class="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<h3 class="text-xl font-semibold text-base-content group-hover:text-primary">
						{project.title}
					</h3>
					<p class="text-sm text-base-content/70">{project.description}</p>
				</div>
				<span class="link-cta mt-6">View Project</span>
			</a>
		{/each}
	</div>
</PageSection>
