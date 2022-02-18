<script>
import Page from 'lib/Page'
import {link} from 'svelte-spa-router'

// https://github.com/ItalyPaleAle/svelte-spa-router/issues/98
export let params
</script>

<Page>
    <h1>
        404
        <div class="i-carbon-warning-alt"/>
    </h1>
    <a use:link href="/">Go Back Home</a>
</Page>
