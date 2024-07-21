<script>
  export let dependent = true
  export let hFull = false
  // export let accent = false
  export let depth
  export let end = false
  export let index
  export let isSelected = false

  // TODO fix isSelected
  const accent = depth > 1
  const groupClasses = depth < 2
    ? ['group/first', 'group-hover/first:bg-orange-500/50'] 
    : ['group/second', 'group-hover/second:bg-orange-500/50'] 
</script>

{#if dependent}
  <div class="relative flex flex-col gap-y-1 {groupClasses[0]} {end ? 'snap-end' : 'snap-start'} {hFull && 'h-full'}">
    {#if accent}
      <div class="absolute flex top-1 h-full pb-1.5 w-0.5">
        <div class="h-full -ml-4 w-full {groupClasses[1]}">
        </div>
      </div>
    {/if}
    <slot />
  </div>
{/if}