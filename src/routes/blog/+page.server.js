import { getAllPosts } from '$lib/server/content';
import { buildSeo } from '$lib/utils/seo';

export async function load() {
	const posts = await getAllPosts();

	return {
		posts,
		seo: buildSeo({
			title: 'Journal — insights, experiments, and studio process',
			description:
				'Read the latest writing from Mk.1: design systems strategy, product storytelling, and explorations from the studio lab.',
			path: '/blog'
		})
	};
}
