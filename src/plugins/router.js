import Router from 'svelte-spa-router'
import {wrap} from 'svelte-spa-router/wrap'

// defines a single route
class Route {
  constructor(path, page, meta = {}) {
    this.path = path
    this.page = page
    this.meta = meta
  }
}


import Home from 'pages/Home'
import Blogs from 'pages/Blogs'
import Gallery from 'pages/Gallery'
import Blog from 'pages/Blog'
import NotFound from 'pages/NotFound'

// holds all routes
const routes = [
  new Route('/',          Home,     { name: 'Home',     is_nav: true }),
  new Route('/blogs',     Blogs,    { name: 'Blogs',    is_nav: true }),
  new Route('/gallery',   Gallery,  { name: 'Gallery',  is_nav: true }),
  new Route('/blog/:id',  Blog,     { name: 'Blog' }),
  new Route('*',          NotFound, { name: '404' }),
]


// holds all routes in a digestable format for the SPA router
const routes_spa = {}

routes.forEach(r => {
  if (r.meta.is_lazy) {
    routes_spa[r.path] = wrap({ asyncComponent: () => import(r.page) })
  } else {
    routes_spa[r.path] = r.page
  }
})

export {
  routes,
  routes_spa,
}
