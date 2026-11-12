<script setup lang="ts">
import { ScrollArea } from "@isbatak/vue-ui/scroll-area"
</script>

<template>
  <ScrollArea.Root h="32" maxW="2xl" variant="always">
    <ScrollArea.Viewport>
      <ScrollArea.Content spaceY="4" pe="2" textStyle="sm">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
          placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
        </p>
        <p>
          Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc
          posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
        </p>
        <p>
          Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
        </p>
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar bg="red.subtle">
      <ScrollArea.Thumb bg="red.solid" />
    </ScrollArea.Scrollbar>
  </ScrollArea.Root>
</template>
