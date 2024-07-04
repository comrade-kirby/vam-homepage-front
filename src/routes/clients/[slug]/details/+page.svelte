<script>
  import { minimizeDetails } from '$lib/stores.js'
  import {
    GraphControls,
    SelectList,
    PlaylistItem,
    PressLink,
    DetailsWrapper
  } from '$lib'

  export let data
  let minimized = false
  
  $: client = data.client.attributes
  $: slug = '/' + client.slug
  $: closeUrl = '/clients' + slug
  $: works = client.works.data
  $: presses = client.presses.data
</script>

<DetailsWrapper bind:minimized {closeUrl} title={client.name} minimizedLabelText={slug}>
  <SelectList let:item={node}
    collapsable
    containsCurrent
    labelText="works"
    items={works}
  >
    <PlaylistItem {node} />
  </SelectList>
  
  <SelectList let:item={press} 
    collapsable
    containsCurrent
    labelText="press"
    items={presses}
  >
    <PressLink {press} />
  </SelectList>
</DetailsWrapper>

<GraphControls position={
  $minimizeDetails 
    ? 'col-start-5 row-end-2 col-span-1 lg:row-start-3'
    : 'col-start-4 col-span-1 row-end-2 lg:row-start-1 lg:row-start-3'
} />