<script>
import { onMount, createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()

export let once = false
export let top = 0
export let bottom = 0
export let left = 0
export let right = 0
 
let container
let has_intersected = false

onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
        const root_margin = `${bottom}px ${left}px ${top}px ${right}px`
         
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                if (once) observer.unobserve(container)
                dispatch('intersect')
            }
        }, { rootMargin: root_margin })
         
        observer.observe(container)
        return () => observer.unobserve(container)
    
    } else {
        console.log("IntersectionObserver not supported!")
    }
})
</script>


<div bind:this={container}>
    <slot/>
</div>


<style>
div {
    background: rgba(0, 0, 0, 0.1);
}
</style>
