<script>
import Router from 'svelte-spa-router'
import { wrap } from 'svelte-spa-router/wrap'

import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

const routes = {
    '/': Home,
    '*': NotFound,
    // '*': wrap({ asyncComponent: () => import('pages/NotFound') }),
}
</script>

<Router {routes}/>
