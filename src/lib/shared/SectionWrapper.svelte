<script>
  export let dependent = true
  export let hFull = false
  export let depth
  export let end = false
  export let isSelected = false
  export let expanded = false

  const accent = depth > 1
  const groupClasses = depth < 2
    ? ['group/first', 'group-hover/first:bg-orange-500/50'] 
    : ['group/second', 'group-hover/second:bg-orange-500/50'] 
</script>

{#if dependent}
  <div class="relative flex flex-col gap-y-1 lg:gap-y-2 {
      end ? 'snap-end' : 'snap-start'
    } {
      hFull && 'h-full'
    } {
      groupClasses[0]}
    }">
    {#if accent}
      <div class="absolute flex top-1 h-full w-px -ml-px {
        expanded ? 'pb-3' : 'pb-2' 
      }">
        <div class="h-full -ml-4 w-full {
          isSelected 
            ? 'bg-orange-500/80' 
            : groupClasses[1]
        }">
        </div>
      </div>
    {/if}
    <slot />
  </div>
{/if}