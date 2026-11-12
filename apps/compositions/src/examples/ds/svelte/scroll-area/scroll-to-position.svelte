<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { ScrollArea, useScrollArea } from "@isbatak/svelte-ui/scroll-area"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"

  const id = $props.id()
  const scrollArea = useScrollArea({ id })
</script>

<Stack gap="8" align="flex-start" maxW="xl">
  <Button variant="outline" size="sm" onclick={() => scrollArea().scrollTo({ top: 100, behavior: "smooth" })}>
    Scroll to 100px
  </Button>
  <ScrollArea.RootProvider value={scrollArea} class={css({ h: "32", w: "sm", maxW: "full" })}>
    <ScrollArea.Viewport>
      <ScrollArea.Content class={css({ spaceY: "4", textStyle: "sm" })}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
        <p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.</p>
        <p>Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar />
  </ScrollArea.RootProvider>
</Stack>
