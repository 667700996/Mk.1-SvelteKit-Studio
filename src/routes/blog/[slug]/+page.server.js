import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/server/content';

export async function load({ params }) {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		throw error(404, `Could not find ${params.slug}`);
	}

	const { component, ...metadata } = post;

	return {
		content: component,
		...metadata
	};
}
