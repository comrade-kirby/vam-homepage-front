<script>
  export let xs, xl, outline, center, nav, layout
</script>

<div class="group w-fit text-white/90 tracking-wide {center && 'w-full'} {xl && 'text-xl'} {xs && 'text-xs'} 
  { outline && 'px-4 py-2 border border-white/90 rounded-lg font-bold'
  } { 
    layout && 'hover:border-secondary/90 hover:text-secondary/90'
  } {
    nav && 'hover:text-primary/90 hover:border-primary/90'
  }
">
  <slot />
</div>