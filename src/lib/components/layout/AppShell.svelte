<script lang="ts">
	import { onMount } from 'svelte';
	import GlobalNav from './GlobalNav.svelte';
	import SiteFooter from './SiteFooter.svelte';

	type Theme = 'studio-light' | 'studio-dark';

	let theme: Theme = 'studio-light';
	let userHasPreference = false;

	const isBrowser = typeof window !== 'undefined';

	function setDocumentTheme(value: Theme) {
		if (typeof document !== 'undefined') {
			document.documentElement.dataset.theme = value;
		}
	}

	function applyTheme(value: Theme, persist = false) {
		theme = value;
		setDocumentTheme(value);

		if (persist && isBrowser) {
			window.localStorage.setItem('theme', value);
			userHasPreference = true;
		}
	}

	function resolveInitialTheme(): Theme {
		if (!isBrowser) {
			return 'studio-light';
		}

		const stored = window.localStorage.getItem('theme');

		if (stored === 'studio-light' || stored === 'studio-dark') {
			userHasPreference = true;
			return stored;
		}

		if (stored === 'light') {
			userHasPreference = true;
			return 'studio-light';
		}

		if (stored === 'dark') {
			userHasPreference = true;
			return 'studio-dark';
		}

		userHasPreference = false;

		if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
			return 'studio-dark';
		}

		return 'studio-light';
	}

	onMount(() => {
		applyTheme(resolveInitialTheme());

		const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
		if (!mediaQuery) return;

		const handlePreferenceChange = (event: MediaQueryListEvent) => {
			if (!userHasPreference) {
				applyTheme(event.matches ? 'studio-dark' : 'studio-light');
			}
		};

		mediaQuery.addEventListener('change', handlePreferenceChange);

		return () => {
			mediaQuery.removeEventListener('change', handlePreferenceChange);
		};
	});

	function handleThemeChange(event: CustomEvent<Theme>) {
		applyTheme(event.detail, true);
	}
</script>

<div data-theme={theme} class="min-h-screen bg-base-100 text-base-content transition-colors">
	<a href="#page-content" class="skip-link">Skip to content</a>
	<div class="flex min-h-screen flex-col">
		<GlobalNav {theme} on:themeChange={handleThemeChange} />

		<main id="page-content" tabindex="-1" class="flex-1 focus:outline-none">
			<slot />
		</main>

		<SiteFooter />
	</div>
</div>
