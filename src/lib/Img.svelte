<script>
import { onMount } from 'svelte'

export let src
export let alt

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
        console.log("IntersectionObserver not supported image can't be lazy loaded!")
        is_intersected = true
    }
})
</script>

<div bind:this={container} {...$$props}>
    {#if is_intersected}
        <img {src} {alt} class:is_loaded on:load={() => is_loaded = true}/>
    {/if}
</div>


<style>
div {
    height: 200px;
    width: 200px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.1);
}

img {
    height: 100%;
    width: 100%;
    opacity: 0.5;
    transition: opacity 500ms ease-out;
}

img.is_loaded {
    opacity: 1;
}
</style>
