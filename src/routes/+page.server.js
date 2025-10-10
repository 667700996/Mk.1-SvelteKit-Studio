import { getRecentPosts } from '$lib/server/content';
import { buildSeo } from '$lib/utils/seo';

export async function load() {
	const posts = await getRecentPosts(3);

	return {
		posts,
		seo: buildSeo({
			title: 'Purposeful web experiences, crafted with SvelteKit',
			description:
				'Mk.1 is a creative technology studio blending strategy, design systems, and immersive storytelling to launch world-class digital experiences.',
			path: '/'
		})
	};
}
