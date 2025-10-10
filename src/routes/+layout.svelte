<script>
  import "../app.css";
  import { onMount } from 'svelte';

  let currentTheme = 'light';

  onMount(() => {
    currentTheme = localStorage.getItem('theme') || 'light';
  });

  function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  }
</script>

<div data-theme={currentTheme} class="min-h-screen flex flex-col">
  <div class="navbar bg-base-100 shadow-lg">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost text-xl">Mk.1 Studio</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
      <button on:click={toggleTheme} class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {#if currentTheme === 'light'}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          {/if}
        </svg>
      </button>
    </div>
  </div>

  <main class="flex-grow container mx-auto p-4">
    <slot />
  </main>

  <footer class="footer footer-center p-4 bg-base-300 text-base-content">
    <aside>
      <p>Copyright © 2025 - All right reserved by Mk.1 SvelteKit Studio</p>
    </aside>
  </footer>
</div>
