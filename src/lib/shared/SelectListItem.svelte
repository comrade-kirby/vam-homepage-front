<script>
  import { page } from '$app/stores'

  export let item, selectable = false

  $: pageSlug = $page.url.pathname
  $: isSelected = selectable && pageSlug.includes(item.data.slug)
</script>

<li class="relative group">
  <div class="absolute flex top-1 h-full pb-1.5 w-0.5">
    <div class="h-full -ml-4 w-full {isSelected ? 'bg-orange-500/80' : 'group-hover:bg-orange-500/50'}">
    </div>
  </div>

  <slot {isSelected} />
</li>