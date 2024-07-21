<script>
  import {
    SelectList,
    PlaylistItem,
    SelectListItem,
    PressLink,
  } from '$lib'

  export let client

  $: attributes = client.attributes
  $: works = attributes.works.data
  $: presses = attributes.presses.data
</script>

<SelectList let:item={node}
    collapsable
    containsCurrent
    labelText="works"
    items={works}
  >
    {#each works as node}
      <SelectListItem item={node} selectable>
        <PlaylistItem {node} />
      </SelectListItem>
    {/each}
  </SelectList>
  
  <SelectList let:item={press} 
    collapsable
    containsCurrent
    labelText="press"
    items={presses}
  >
    {#each presses as press}
      <SelectListItem item={press}>
        <PressLink {press} />
      </SelectListItem>
    {/each}
</SelectList>