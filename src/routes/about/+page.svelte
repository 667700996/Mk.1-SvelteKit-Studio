<script>
	import PageSection from '$lib/components/ui/PageSection.svelte';

	const values = [
		{
			title: 'Clarity over noise',
			description:
				'Every project begins with intent—aligning goals, audience needs, and success metrics before the visual flourishes join the conversation.'
		},
		{
			title: 'Play with purpose',
			description:
				'Experiments are grounded in strategy. We explore motion, storytelling, and emerging tech to reveal fresh opportunities without losing focus.'
		},
		{
			title: 'Radical inclusivity',
			description:
				'Accessibility, localization, and performance are non-negotiable. We craft experiences that welcome everyone and scale globally.'
		}
	];

	const timeline = [
		{
			period: '2016 → 2019',
			title: 'Product design foundations',
			description:
				'Led UX for early-stage startups, bridging research, interface design, and prototyping to ship scrappy but lovable products.'
		},
		{
			period: '2020 → 2023',
			title: 'Design systems & storytelling',
			description:
				'Scaled component libraries, marketing sites, and editorial experiences for distributed teams adopting Svelte, React, and WebGL stacks.'
		},
		{
			period: '2023 → Present',
			title: 'Mk.1 studio era',
			description:
				'Building a studio that blurs the lines between craft, experimentation, and education—shipping launches, tools, and public learnings.'
		}
	];

	const toolkit = [
		{
			category: 'Strategy & discovery',
			items: [
				'Vision workshops',
				'Customer journeys',
				'Measurement frameworks',
				'Narrative mapping'
			]
		},
		{
			category: 'Design craft',
			items: ['Figma', 'Framer prototypes', 'Art direction', 'Design systems architecture']
		},
		{
			category: 'Build stack',
			items: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'mdsvex', 'Vite', 'Playwright']
		},
		{
			category: 'Delivery',
			items: [
				'Component libraries',
				'Knowledge bases',
				'Interactive storytelling',
				'Launch ecosystems'
			]
		}
	];
</script>

<PageSection id="about-hero" tone="contrast" padding="xl">
	<div class="grid gap-10 lg:grid-cols-[1.4fr_minmax(0,1fr)] lg:items-end">
		<div class="space-y-6">
			<span class="eyebrow text-secondary/80">About Mk.1</span>
			<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
				A creative studio for ambitious product stories and playful web experiments.
			</h1>
			<p class="max-w-3xl text-base text-base-content/70 sm:text-lg">
				Mk.1 is helmed by a design-engineering hybrid who loves turning fuzzy ideas into expressive,
				performant experiences. The studio operates remotely with collaborators across Seoul, San
				Francisco, and beyond.
			</p>
			<div class="flex flex-wrap gap-3">
				<a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg">Start a conversation</a>
				<a href="/#capabilities" class="btn btn-ghost btn-lg">Explore services</a>
			</div>
		</div>
		<div class="surface-panel space-y-4 bg-base-100/80">
			<h2 class="text-lg font-semibold text-base-content">At a glance</h2>
			<ul class="space-y-3 text-sm text-base-content/70">
				<li class="flex items-start gap-3">
					<span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span>
					<span>
						Leading with discovery & narrative first: aligning stakeholders before aesthetics,
						ensuring every pixel answers “why?”
					</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span>
					<span>
						Full-stack craft: from pen-and-paper ideation to production-ready SvelteKit builds with
						automated deployment workflows.
					</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/80"></span>
					<span>
						Learning in public: open-sourcing patterns, writing deep dives, and sharing lab
						experiments that push the web forward.
					</span>
				</li>
			</ul>
		</div>
	</div>
</PageSection>

<PageSection id="values">
	<div class="mx-auto max-w-3xl text-center space-y-4">
		<span class="eyebrow text-primary/80">Practice values</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">What guides every engagement.</h2>
		<p class="text-base text-base-content/70 sm:text-lg">
			Carefully crafted delivery matched with curiosity, kindness, and an unwavering commitment to
			inclusive design.
		</p>
	</div>

	<div class="grid gap-6 lg:grid-cols-3">
		{#each values as value}
			<div class="surface-card h-full text-left">
				<h3 class="text-xl font-semibold">{value.title}</h3>
				<p class="mt-3 text-sm text-base-content/70">{value.description}</p>
			</div>
		{/each}
	</div>
</PageSection>

<PageSection id="timeline" tone="subtle">
	<div class="space-y-6">
		<span class="eyebrow text-secondary/80">Trajectory</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">
			A journey through product, systems, and storytelling.
		</h2>
	</div>

	<ol class="relative space-y-10 border-l border-base-300/70 pl-8">
		{#each timeline as entry}
			<li class="space-y-2">
				<span
					class="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-2 border-base-100 bg-primary"
				></span>
				<span class="text-xs uppercase tracking-widest text-base-content/60">{entry.period}</span>
				<h3 class="text-xl font-semibold text-base-content">{entry.title}</h3>
				<p class="text-sm text-base-content/70">{entry.description}</p>
			</li>
		{/each}
	</ol>
</PageSection>

<PageSection id="toolkit">
	<div class="mx-auto max-w-3xl text-center space-y-4">
		<span class="eyebrow text-primary/80">Toolkit</span>
		<h2 class="text-3xl font-semibold sm:text-4xl">Where strategy, design, and code intersect.</h2>
		<p class="text-base text-base-content/70 sm:text-lg">
			Every engagement tailors the toolkit to the problem—blending workshops, visual systems, and
			technical build-outs.
		</p>
	</div>

	<div class="grid gap-6 md:grid-cols-2">
		{#each toolkit as bucket}
			<div class="surface-card h-full">
				<h3 class="text-lg font-semibold text-base-content">{bucket.category}</h3>
				<ul class="mt-4 space-y-2 text-sm text-base-content/70">
					{#each bucket.items as item}
						<li class="flex items-start gap-2">
							<span class="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-secondary/70"></span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</PageSection>

<PageSection id="collaboration-pitch" tone="contrast" padding="compact">
	<div class="surface-panel mx-auto max-w-4xl bg-base-100/80 text-center">
		<h2 class="text-3xl font-semibold sm:text-4xl">Let’s co-create your next chapter.</h2>
		<p class="mt-4 text-base text-base-content/70 sm:text-lg">
			Whether you need an embedded product partner, a launch sprint, or a lab exploring new
			interactions, Mk.1 is ready to collaborate.
		</p>
		<div class="mt-6 flex flex-wrap justify-center gap-3">
			<a href="mailto:studio@mk1.dev" class="btn btn-primary btn-lg">Share your brief</a>
			<a href="/#latest" class="btn btn-ghost btn-lg">Read studio insights</a>
		</div>
	</div>
</PageSection>
