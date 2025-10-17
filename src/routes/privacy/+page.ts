import { buildSeo } from '$lib/utils/seo';

export function load() {
	return {
		seo: buildSeo({
			title: 'Privacy Policy',
			description: 'Privacy policy for Mk.1 Studio.',
			path: '/privacy'
		})
	};
}
