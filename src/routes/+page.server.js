import { getRecentPosts } from '$lib/server/content';
import { buildSeo } from '$lib/utils/seo';

const projects = [
	{
		slug: 'project-1',
		title: 'Project 1',
		description: 'A description of the first project.',
		image: 'https://via.placeholder.com/800x600'
	},
	{
		slug: 'project-2',
		title: 'Project 2',
		description: 'A description of the second project.',
		image: 'https://via.placeholder.com/800x600'
	},
	{
		slug: 'project-3',
		title: 'Project 3',
		description: 'A description of the third project.',
		image: 'https://via.placeholder.com/800x600'
	}
];

export async function load() {
	const posts = await getRecentPosts(3);

	return {
		posts,
		projects: projects.slice(0, 3),
		seo: buildSeo({
			title: 'Purposeful web experiences, crafted with SvelteKit',
			description:
				'Mk.1 is a creative technology studio blending strategy, design systems, and immersive storytelling to launch world-class digital experiences.',
			path: '/'
		})
	};
}
