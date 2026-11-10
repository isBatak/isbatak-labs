<script lang="ts">
  import { ScrollArea } from "@isbatak/svelte-ui/scroll-area"
  import { css } from "styled-system/css"
</script>

<ScrollArea.Root class={css({ h: "36", maxW: "lg" })}>
  <ScrollArea.Viewport>
    <ScrollArea.Content class={css({ spaceY: "4", textStyle: "sm" })}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
      <p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.</p>
      <p>Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
    </ScrollArea.Content>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar>
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
  <ScrollArea.Corner />
</ScrollArea.Root>
