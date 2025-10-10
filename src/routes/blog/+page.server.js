import { getAllPosts } from '$lib/server/content';

export async function load() {
	const posts = await getAllPosts();

	return {
		posts
	};
}
