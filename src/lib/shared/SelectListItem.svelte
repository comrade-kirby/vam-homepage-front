<script>
  export let isSelected
</script>

<li class="relative group -ml-1 pl-2 mb-2">
  <div class="absolute flex top-1 h-full -left-0.5 w-0.5">
    <div class="h-1/2 w-full {isSelected ? 'bg-orange-800/90' : 'group-hover:bg-orange-800/30'}"></div>
  </div>

  <slot />
</li>