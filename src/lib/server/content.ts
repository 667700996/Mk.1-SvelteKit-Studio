type PostMetadata = {
	title: string;
	date: string;
	description?: string;
	tags?: string[];
	category?: string;
	draft?: boolean;
	readingTime?: number;
	wordCount?: number;
	heroImage?: string;
	[key: string]: unknown;
};

type PostEntry = PostMetadata & {
	slug: string;
	date: string;
	readingTime: number;
	wordCount: number;
	tags: string[];
};

const AVERAGE_READING_SPEED = 200; // words per minute

function normalizeDate(value: unknown): string | null {
	if (typeof value !== 'string') {
		return null;
	}

	const parsed = new Date(value);

	if (Number.isNaN(parsed.getTime())) {
		return null;
	}

	return parsed.toISOString();
}

function stripHtml(html: string) {
	return html
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function deriveReadingStats(html: string) {
	const text = stripHtml(html);
	const words = text.length > 0 ? text.split(' ').length : 0;
	const minutes = Math.max(1, Math.round(words / AVERAGE_READING_SPEED));

	return {
		words,
		minutes
	};
}

export async function getAllPosts(): Promise<PostEntry[]> {
	const modules = import.meta.glob<PostModule>('/src/posts/*.md');

	const posts = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const mod = await resolver();
			const { metadata, default: component } = mod;

			const slug = path.split('/').pop()?.replace('.md', '') ?? '';
			const rendered = component?.render ? component.render() : { html: '' };
			const { minutes, words } = deriveReadingStats(rendered.html ?? '');
			const isoDate = metadata?.date ? normalizeDate(metadata.date) : null;

			const typedMetadata = metadata as PostMetadata;

			return {
				...typedMetadata,
				slug,
				date: isoDate ?? typedMetadata.date ?? '',
				readingTime:
					typeof typedMetadata.readingTime === 'number' ? typedMetadata.readingTime : minutes,
				wordCount: typeof typedMetadata.wordCount === 'number' ? typedMetadata.wordCount : words,
				tags: Array.isArray(typedMetadata.tags) ? typedMetadata.tags : [],
				category: typedMetadata.category ?? 'Uncategorized'
			};
		})
	);

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getRecentPosts(limit = 3): Promise<PostEntry[]> {
	const posts = await getAllPosts();
	return posts.filter((post) => post.draft !== true).slice(0, limit);
}

export async function getPostBySlug(
	slug: string
): Promise<(PostEntry & { component: PostModule['default'] }) | null> {
	const modules = import.meta.glob<PostModule>('/src/posts/*.md');
	const resolver = modules[`/src/posts/${slug}.md`];

	if (!resolver) {
		return null;
	}

	const mod = await resolver();
	const { metadata, default: component } = mod;

	const rendered = component?.render ? component.render() : { html: '' };
	const { minutes, words } = deriveReadingStats(rendered.html ?? '');
	const isoDate = metadata?.date ? normalizeDate(metadata.date) : null;
	const typedMetadata = metadata as PostMetadata;

	return {
		...typedMetadata,
		slug,
		component,
		date: isoDate ?? typedMetadata.date ?? '',
		readingTime:
			typeof typedMetadata.readingTime === 'number' ? typedMetadata.readingTime : minutes,
		wordCount: typeof typedMetadata.wordCount === 'number' ? typedMetadata.wordCount : words,
		tags: Array.isArray(typedMetadata.tags) ? typedMetadata.tags : [],
		category: typedMetadata.category ?? 'Uncategorized'
	};
}

type PostModule = {
	metadata: PostMetadata;
	default: {
		render: () => {
			html: string;
		};
	};
} & Record<string, unknown>;
