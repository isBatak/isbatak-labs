<script lang="ts">
  import { ScrollArea } from "@isbatak/svelte-ui/scroll-area"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
  import { css } from "styled-system/css"
</script>

<Stack gap="8" maxW="lg">
  <Stack gap="2">
    <Text fontWeight="medium">size="xs"</Text>
    <ScrollArea.Root size="xs" variant="always" class={css({ h: "32" })}>
      <ScrollArea.Viewport>
        <ScrollArea.Content class={css({ pe: "5", spaceY: "4", textStyle: "sm" })}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
          <p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.</p>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar />
    </ScrollArea.Root>
  </Stack>
  <Stack gap="2">
    <Text fontWeight="medium">size="sm"</Text>
    <ScrollArea.Root size="sm" variant="always" class={css({ h: "32" })}>
      <ScrollArea.Viewport>
        <ScrollArea.Content class={css({ pe: "5", spaceY: "4", textStyle: "sm" })}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
          <p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.</p>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar />
    </ScrollArea.Root>
  </Stack>
  <Stack gap="2">
    <Text fontWeight="medium">size="md"</Text>
    <ScrollArea.Root size="md" variant="always" class={css({ h: "32" })}>
      <ScrollArea.Viewport>
        <ScrollArea.Content class={css({ pe: "5", spaceY: "4", textStyle: "sm" })}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
          <p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.</p>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar />
    </ScrollArea.Root>
  </Stack>
  <Stack gap="2">
    <Text fontWeight="medium">size="lg"</Text>
    <ScrollArea.Root size="lg" variant="always" class={css({ h: "32" })}>
      <ScrollArea.Viewport>
        <ScrollArea.Content class={css({ pe: "5", spaceY: "4", textStyle: "sm" })}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
          <p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.</p>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar />
    </ScrollArea.Root>
  </Stack>
</Stack>
