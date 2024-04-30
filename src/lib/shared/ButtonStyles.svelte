<script>
  export let xs, xl, outline, center
</script>

<div class="w-fit text-tprimary/90 tracking-wide {center && 'w-full'} {xl && 'text-xl'} {xs && 'text-xs'} {
  outline 
    ? 'px-4 py-2 border border-tprimary/90 rounded-lg font-bold hover:text-tsecondary/90 hover:border-tsecondary/90'
    : 'hover:text-ttertiary/90'
}">
  <slot />
</div>