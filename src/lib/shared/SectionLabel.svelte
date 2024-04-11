<script>
  export let containsCurrent = true
</script>

<h3 class="text-xs flex mb-2 tracking-wider {containsCurrent ? 'text-orange-900/90' : 'text-orange-900/70 hover:text-orange-900/90'}">
  <slot />
</h3>