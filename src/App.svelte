<script>
import Router from 'svelte-spa-router'
import { routes_spa, routes } from 'plugins/router'
import { link } from 'svelte-spa-router'
</script>

<div class="navbar">
  <img class='logo' src='/img/potato.png' alt='potato'/>

  <div class='nav-links'>
    {#each routes as route}
      {#if route.meta.is_nav}
        <a use:link href={route.path} class='nav-link'> {route.meta.name} </a>
      {/if}
    {/each}
  </div>

  <div class='spacer'/>

  <div class='social-links'>
    <a href="facebook.com"><span class='i-la:facebook'/></a>
    <a href="telegram.org"><span class='i-la:telegram'/></a>
    <a href="instagram.com"><span class='i-carbon:logo-instagram'/></a>
    <a href="youtube.com"><span class='i-la:youtube'/></a>
  </div>
</div>

<div class="nav-spacer"/>

<!-- <a id="skip-to-content-link" href="#content">skip to content</a> -->
<Router routes={routes_spa}/>

<style lang='scss'>
.navbar {
  display: flex;
  background: var(--wh);
  height: 2em;
  width: calc(100% - 2em);
  margin: 1em;
  border-radius: 15px;
  overflow: hidden;

  position: fixed;
  inset: 0 0;
  z-index: 100;

  .nav-links {
    display: flex;

    .nav-link {
      display: flex;
      align-items: center;
      padding: 0 1em;
    }
  }

  .social-links {
    display: flex;
    align-items: center;
    padding: 0 1em;
  }

  .logo {
    border-radius: 50%;
  }
}

.nav-spacer {
  margin-top: 4em;
}


/* #skip-to-content-link { */
/*   position: absolute; */
/*   inset: 0 auto auto 0; */
/*   background: var(--sel); */
/*   color: var(--bg); */
/*   padding: 1vh 1vw; */
/*   transform: translateY(-100%); */
/*   transition: transform .1s; */
/*  */
/*   &:focus { */
/*     transform: translateY(0%); */
/*   } */
/* } */

</style>
