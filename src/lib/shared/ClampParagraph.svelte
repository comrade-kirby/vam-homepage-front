<script>
  import { ClampButton } from '$lib'

  export let short
  export let content

  let isClamped = true
  let needsClamp = false
  let h
  
  const reset = (content) => {
    isClamped = true
  }
  const toggleClamp = () => isClamped = !isClamped

  $: reset(content)
  $: needsClamp = short ? h > 70 : h > 100
</script>

<div bind:clientHeight={h} class="flex flex-col mb-8 text-2xs md:text-xs text-white/70 leading-relaxed">
  <p class={
    needsClamp && isClamped 
      ? short
        ? 'line-clamp-3'
        : 'line-clamp-5' 
      : 'line-clamp-none'
  }>
    {content}
  </p>

  {#if needsClamp}
    <ClampButton {isClamped} onClick={toggleClamp}/>
  {/if}
</div>
