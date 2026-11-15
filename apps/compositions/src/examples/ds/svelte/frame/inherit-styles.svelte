<script lang="ts">
  import { Frame } from "@isbatak/svelte-ui/frame"
  import { Heading } from "@isbatak/svelte-ui/heading"
  import { Text } from "@isbatak/svelte-ui/text"

  let ref = $state<HTMLIFrameElement | null>(null)

  function onMount() {
    const head = ref?.contentDocument?.head
    if (!head) return
    for (const node of document.head.querySelectorAll('style, link[rel="stylesheet"]')) {
      head.appendChild(node.cloneNode(true))
    }
  }
</script>

<Frame bind:ref title="Frame with the page's styles" {onMount}>
  <Heading size="lg" p="6" pb="1">Ark UI / Frame</Heading>
  <Text color="fg.muted" px="6" pb="6">
    This component renders in an iframe that copied the page's stylesheets when it mounted.
  </Text>
</Frame>
