function normalizeDate(value) {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) {
		return null;
	}

	return date.toISOString();
}

export async function load() {
	const modules = import.meta.glob('/src/posts/*.md');

	const posts = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop().replace('.md', '');

			return {
				...metadata,
				slug,
				date: normalizeDate(metadata.date) ?? metadata.date
			};
		})
	);

	const curatedPosts = posts
		.filter((post) => post.draft !== true)
		.sort((a, b) => new Date(b.date) - new Date(a.date))
		.slice(0, 3);

	return {
		posts: curatedPosts
	};
}
