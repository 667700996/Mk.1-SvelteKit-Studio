<script lang="ts">
	import { onMount } from 'svelte';
	import GlobalNav from './GlobalNav.svelte';
	import SiteFooter from './SiteFooter.svelte';

	type Theme = 'light' | 'dark';

	let theme: Theme = 'light';
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
			return 'light';
		}

		const stored = window.localStorage.getItem('theme');

		if (stored === 'light' || stored === 'dark') {
			userHasPreference = true;
			return stored;
		}

		userHasPreference = false;

		if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}

		return 'light';
	}

	onMount(() => {
		applyTheme(resolveInitialTheme());

		const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
		if (!mediaQuery) return;

		const handlePreferenceChange = (event: MediaQueryListEvent) => {
			if (!userHasPreference) {
				applyTheme(event.matches ? 'dark' : 'light');
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
	<div class="flex min-h-screen flex-col">
		<GlobalNav {theme} on:themeChange={handleThemeChange} />

		<main class="flex-1">
			<slot />
		</main>

		<SiteFooter />
	</div>
</div>
