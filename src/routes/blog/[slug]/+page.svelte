<script>
  export let data;
</script>

<article class="prose lg:prose-xl max-w-none mx-auto p-4">
  <h1>{data.title}</h1>
  <p class="text-sm text-base-content/70">Published on: {new Date(data.date).toLocaleDateString()}</p>
  <div class="divider"></div>
  <svelte:component this={data.content} />
</article>
