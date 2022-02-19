<script>
import Page from 'lib/Page'
</script>

<Page>
  <h1 class="bg-red-100 hi">Da Eve Svelte Template</h1>

  {#each Array(5) as i}
    <div class="i-logos:svelte-icon"></div>
  {/each}
</Page>

<style lang='scss'>
.hi {
  color: red;
  &:hover {
    color: orange;
  }
}
</style>
