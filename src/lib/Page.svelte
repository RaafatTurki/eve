<script>
// import { fly } from 'svelte/transition'
</script>

<!-- in:fly={{ y: -50, duration: 250, delay: 300 }} -->
<!-- out:fly={{ y: -50, duration: 250 }} -->
<main {...$$props} id="content">
  <slot/>
</main>

<style>
main {
  text-align: center;
  padding: 1em;
  margin: 0 auto;
  max-width: 240px;
}

@media (min-width: 640px) {
  main {
    max-width: none;
  }
}
</style>
