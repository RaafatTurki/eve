<script>
import Router from 'svelte-spa-router'
// import { wrap } from 'svelte-spa-router/wrap'

import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

const routes = {
    '/': Home,
    '*': NotFound,
    // '*': wrap({ asyncComponent: () => import('pages/NotFound') }),
}
</script>

<a id="skip-to-content-link" href="#content">skip to content</a>
<Router {routes}/>

<style>
#skip-to-content-link {
  position: absolute;
  inset: 0 auto auto 0;
  background: var(--sel);
  color: var(--bg);
  padding: 1vh 1vw;
  transform: translateY(-100%);
  transition: transform .1s;
}
#skip-to-content-link:focus {
  transform: translateY(0%);
}
</style>
