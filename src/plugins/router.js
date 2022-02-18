import { wrap } from 'svelte-spa-router/wrap'
import Loading from 'pages/Loading'

// defines a single route
class Route {
  constructor(path, component, meta = {}) {
    this.path = path
    this.component = component
    this.meta = meta
  }
}

import Home from 'pages/Home'
import Blogs from 'pages/Blogs'
import Gallery from 'pages/Gallery'
import Blog from 'pages/Blog'

// defines all routes
const routes = [
  new Route('/',          Home,                 { name: 'Home',     is_nav: true }),
  new Route('/blogs',     Blogs,                { name: 'Blogs',    is_nav: true }),
  new Route('/gallery',   Gallery,              { name: 'Gallery',  is_nav: true }),
  new Route('/blog/:id',  Blog,                 { name: 'Blog' }),
  new Route('*',          '../pages/NotFound',  { name: '404'}),
]


// holds all routes in a digestable format for the SPA router
const routes_spa = {}

routes.forEach(r => {
  let wrapped_route = {}

  if (typeof r.component == 'string') {
    wrapped_route['asyncComponent'] = () => import(/* @vite-ignore */ r.component)
  } else {
    wrapped_route['component'] = r.component
  }

  if (r.meta.guards) wrapped_route['conditions'] = r.meta.guards

  wrapped_route['loadingComponent'] = Loading
  
  routes_spa[r.path] = wrap(wrapped_route)
})

export {
  routes,
  routes_spa,
}
