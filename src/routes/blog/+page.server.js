export async function load() {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop().slice(0, -3);
			return { ...metadata, slug };
		})
	);

	// Sort posts by date in descending order
	const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	return {
		posts: sortedPosts
	};
}
