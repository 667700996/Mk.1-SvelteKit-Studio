import { error } from '@sveltejs/kit';

const projects = [
	{
		slug: 'project-1',
		title: 'Project 1',
		description: 'A description of the first project.',
		image: 'https://via.placeholder.com/1200x800',
		content: 'This is the full content for project 1. It can be written in Markdown.'
	},
	{
		slug: 'project-2',
		title: 'Project 2',
		description: 'A description of the second project.',
		image: 'https://via.placeholder.com/1200x800',
		content: 'This is the full content for project 2. It can be written in Markdown.'
	},
	{
		slug: 'project-3',
		title: 'Project 3',
		description: 'A description of the third project.',
		image: 'https://via.placeholder.com/1200x800',
		content: 'This is the full content for project 3. It can be written in Markdown.'
	}
];

export async function load({ params }) {
	const { slug } = params;
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		throw error(404, `Project not found: ${slug}`);
	}

	return {
		project
	};
}
