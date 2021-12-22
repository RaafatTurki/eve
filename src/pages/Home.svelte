<script>
import Img from 'lib/Img'
import Page from 'lib/Page'
// import {link} from 'svelte-spa-router'
// import IconAccessibility from '~icons/carbon/accessibility'
// import IconHome from '~icons/carbon/home'

</script>

<Page>
    <!-- <IconAccessibility width={40} height={40}/> -->
    <!-- <IconHome/> -->
    <h1>Raafat H. Turki</h1>

    <div class="i-carbon-home"></div>
    <div class="i-carbon-accessibility"></div>
    <div class="i-logos-svelte-icon"></div>
    <div class="i-logos-svelte-icon"></div>
    <div class="i-logos-svelte-icon"></div>
    <div class="i-logos-svelte-icon"></div>

    <!-- <a use:link href="/404">404</a> -->
    <!-- <p>Visit the <a href="https://svelte.dev/tutorial"> Svelte tutorial </a> to learn how to build Svelte apps.</p> -->
    <!-- <p>Visit the <a href="https://svelte.dev/tutorial"> Svelte tutorial </a> to learn how to build Svelte apps.</p> -->

    <div class="flex">
        <!-- <img src='/img/me.jpg' alt="me"/> -->
        <!-- <img src='/img/potato.png' alt="potato"/> -->

        <Img src='/img/me.jpg' alt="me" class='pic'/>
        <!-- <Img src='/img/potato.png' alt="potato"/> -->
        <!-- <input type="button" value="click me"> -->
        <!-- <input type="button" value="click me"> -->
        <!-- <Img src='/img/me.jpg' alt="me" lazy={false}/> -->
        <!-- <Img src='/img/potato.png' alt="potato" lazy={false}/> -->
    </div>

    <!-- <iframe src="/sketches/10_print/index.html" frameborder="0"></iframe> -->
</Page>

<style>
:global(.pic) {
    border: 6px solid red;
}
</style>
