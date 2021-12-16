<script>
import { onMount } from 'svelte'
// import IntersectionObserver from 'lib/IntersectionObserver'
// import { fade } from 'svelte/transition';

export let src
export let alt
export let c

let is_intersected = false
let is_loaded = false
let container

onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
        const root_margin = `0px 0px 0px 0px`
         
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                observer.unobserve(container)
                is_intersected = true
            }
        }, { rootMargin: root_margin })
         
        observer.observe(container)
        return () => observer.unobserve(container)
    
    } else {
        console.log("IntersectionObserver not supported!")
    }
})

</script>


<div class={`container ${c}`} bind:this={container}>
    {#if is_intersected}
        <img {src} {alt} class:is_loaded on:load={() => is_loaded = true}/>
    {/if}    
</div>

<!-- {#if !is_intersected} -->
<!--     <div class="placeholder" >PLACEHOLDER</div> -->
<!-- {/if} -->

<style>

.container {
    height: 200px;
    width: 200px;
    overflow: hidden;
    box-sizing: border-box;
}

img {
    height: 100%;
    width: 100%;

    background: rgba(0, 0, 0, 0.1);
    border: 1px solid grey;
    opacity: 0.5;
    transition: 500ms ease-out;
}

img.is_loaded {
    border: none;
    opacity: 1;
}

</style>
