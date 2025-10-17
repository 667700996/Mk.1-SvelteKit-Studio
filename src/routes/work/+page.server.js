export async function load() {
	const projects = [
		{
			slug: 'project-1',
			title: 'Project 1',
			description: 'A description of the first project.',
			image: 'https://via.placeholder.com/800x600'
		},
		{
			slug: 'project-2',
			title: 'Project 2',
			description: 'A description of the second project.',
			image: 'https://via.placeholder.com/800x600'
		},
		{
			slug: 'project-3',
			title: 'Project 3',
			description: 'A description of the third project.',
			image: 'https://via.placeholder.com/800x600'
		}
	];

	return {
		projects
	};
}
