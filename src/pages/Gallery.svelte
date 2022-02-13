<script>
import Img from 'lib/Img'
import Page from 'lib/Page'
// import {link} from 'svelte-spa-router'

import { gallery } from 'plugins/store'

</script>

<Page>
  <main>
    {#each $gallery as media}
      {#if media.type == 'image'}
        <Img class='gallary-image' src={media.src} alt=''/>
        {/if}
    {/each}
  <main/>
</Page>

<style>
main {
  display: flex;
  flex-wrap: wrap;
}

:global(.gallary-image) {
  margin: 0.5rem;
}
</style>
