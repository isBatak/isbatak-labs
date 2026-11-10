<script lang="ts">
  import { ScrollArea } from "@isbatak/svelte-ui/scroll-area"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
  import { css } from "styled-system/css"
</script>

<Stack gap="8" maxW="lg">
  <Stack gap="2">
    <Text fontWeight="medium">variant="hover"</Text>
    <ScrollArea.Root variant="hover" class={css({ h: "32" })}>
      <ScrollArea.Viewport>
        <ScrollArea.Content class={css({ pe: "3", spaceY: "4", textStyle: "sm" })}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
          <p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.</p>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar />
    </ScrollArea.Root>
  </Stack>
  <Stack gap="2">
    <Text fontWeight="medium">variant="always"</Text>
    <ScrollArea.Root variant="always" class={css({ h: "32" })}>
      <ScrollArea.Viewport>
        <ScrollArea.Content class={css({ pe: "3", spaceY: "4", textStyle: "sm" })}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
          <p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.</p>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar />
    </ScrollArea.Root>
  </Stack>
</Stack>
