import { getRecentPosts } from '$lib/server/content';

export async function load() {
	const posts = await getRecentPosts(3);

	return {
		posts
	};
}
