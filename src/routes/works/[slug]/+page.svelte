<script>
  import { minimizeDetails } from '$lib/stores.js'

  import {
    DetailsWrapper,
    GraphControls,
    WorkDetails,
    ClientDetails,
  } from '$lib'

  export let data

  $: work = data?.work?.data
  $: client = data?.client
  $: contentData = work || client
  $: attributes = contentData?.attributes
  $: slug = attributes?.slug
</script>

{#if contentData}
  <DetailsWrapper 
    closeUrl='/works' 
    title={work ? attributes.title : attributes.name} 
    subtitle={work && attributes.client.data.attributes.name} 
    minimizedLabelText={slug}>
      {#if work}
        <WorkDetails {work} {slug} />
      {:else if client}
        <ClientDetails {client} />
      {/if}
    </DetailsWrapper>
{/if}

<GraphControls position={
  $minimizeDetails 
    ? 'col-start-4 row-start-2 col-span-1 lg:row-start-3'
    : 'col-start-4 col-span-1 row-start-2 lg:col-start-3 lg:row-start-1 lg:row-start-3'
} />