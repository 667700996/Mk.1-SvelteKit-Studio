import { getAllPosts } from '$lib/server/content';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { category } = params;
	const posts = (await getAllPosts()).filter((post) => post.category?.toLowerCase() === category.toLowerCase());

	if (!posts.length) {
		throw error(404, `No posts found in category: ${category}`);
	}

	return {
		posts,
		category
	};
}
