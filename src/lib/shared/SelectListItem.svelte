<script>
  import { page } from '$app/stores'

  export let item, selectable = false

  $: pageSlug = $page.url.pathname
  $: isSelected = selectable && pageSlug.includes(item.data.slug)
</script>

<li class="relative group -ml-1 pl-2 mb-1 md:mb-2">
  <div class="absolute flex top-1 h-full -left-0.5 w-0.5">
    <div class="h-1/2 w-full {isSelected ? 'bg-orange-500/80' : 'group-hover:bg-orange-500/50'}"></div>
  </div>

  <slot {isSelected} />
</li>