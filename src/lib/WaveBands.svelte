<script >
export let height = '100px'
export let band_width = '2px'
export let band_gap = '10px'

export let color = "#FF3E00"
export let duration = "1s"
export let sequence = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]

let duration_unit = duration.match(/[a-zA-Z]/)[0]
let duration_num = duration.replace(/[a-zA-Z]/, "")
</script>

<div id='container' style='--height: {height}; --band_width: {band_width}; --band_gap: {band_gap}; --color: {color}; --duration: {duration}'>
  {#each sequence as value}
    <div id='band' style='animation-delay: {value * duration_num/12}{duration_unit}' />
  {/each}
</div>

<style>
#container {
  display: flex;
  height: var(--height);
  display: inline-block;
  text-align: center;
}

#band {
  height: 100%;
  width: var(--band_width);
  display: inline-block;
  margin-right: var(--band_gap);
  background-color: var(--color);
  animation: stretch var(--duration) ease-in-out infinite;
}

@keyframes stretch {
  20%, 80% {
    transform: scaleY(0.4);
  }
  0% {
    transform: scaleY(1);
  }
}
</style>
