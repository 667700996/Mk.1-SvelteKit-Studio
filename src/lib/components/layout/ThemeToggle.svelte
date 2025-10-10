<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  type Theme = 'light' | 'dark';

  export let theme: Theme = 'light';

  const dispatch = createEventDispatcher<{ toggle: Theme }>();

  function toggleTheme() {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    dispatch('toggle', nextTheme);
  }
</script>

<button
  type="button"
  class="btn btn-ghost btn-circle btn-sm"
  on:click={toggleTheme}
  aria-label="Toggle color theme"
  aria-live="polite"
>
  <span class="sr-only">Toggle theme</span>
  {#if theme === 'light'}
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-4 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4 9a1 1 0 100 2H3a1 1 0 110-2h1zm13 0a1 1 0 110 2h-1a1 1 0 110-2h1zM5.636 5.636a1 1 0 011.414 0L8.05 6.636a1 1 0 11-1.414 1.414L5.636 7.05a1 1 0 010-1.414zm9.9 9.9a1 1 0 011.414 1.414l-.999.999a1 1 0 11-1.414-1.414l.999-.999zM5.636 14.364a1 1 0 010 1.414l-.999.999a1 1 0 11-1.414-1.414l.999-.999a1 1 0 011.414 0zM15.95 5.636a1 1 0 010 1.414L14.95 8.05a1 1 0 11-1.414-1.414l.999-.999a1 1 0 011.414 0z" />
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  {/if}
</button>
