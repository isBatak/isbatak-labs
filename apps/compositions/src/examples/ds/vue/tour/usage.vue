<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
import { Tour, useTour } from "@isbatak/vue-ui/tour"

const tour = useTour({
  steps: [
    {
      id: "save",
      type: "tooltip",
      target: () => document.querySelector<HTMLElement>("#tour-usage-save"),
      title: "Save",
      description: "Keeps your changes.",
      actions: [{ label: "Next", action: "next" }],
    },
    {
      id: "share",
      type: "tooltip",
      target: () => document.querySelector<HTMLElement>("#tour-usage-share"),
      title: "Share",
      description: "Sends a link to your team.",
      actions: [
        { label: "Back", action: "prev" },
        { label: "Next", action: "next" },
      ],
    },
    {
      id: "export",
      type: "tooltip",
      target: () => document.querySelector<HTMLElement>("#tour-usage-export"),
      title: "Export",
      description: "Downloads a copy as a PDF.",
      actions: [
        { label: "Back", action: "prev" },
        { label: "Done", action: "dismiss" },
      ],
    },
  ],
})
</script>

<template>
  <HStack gap="2">
    <Button @click="tour.start()">Start tour</Button>
    <Button id="tour-usage-save" variant="outline">Save</Button>
    <Button id="tour-usage-share" variant="outline">Share</Button>
    <Button id="tour-usage-export" variant="outline">Export</Button>
  </HStack>
  <Tour.Root :tour="tour">
    <Teleport to="body">
      <Tour.Backdrop />
      <Tour.Spotlight />
      <Tour.Positioner>
        <Tour.Content>
          <Tour.Arrow>
            <Tour.ArrowTip />
          </Tour.Arrow>
          <Tour.CloseTrigger />
          <Tour.Title />
          <Tour.Description />
          <Tour.Control>
            <Tour.ProgressText />
            <Tour.Actions v-slot="actions">
              <Tour.ActionTrigger v-for="action in actions" :key="action.label" :action="action" :asChild="true">
                <Button size="xs" :variant="action.action === 'prev' ? 'outline' : 'solid'">{{ action.label }}</Button>
              </Tour.ActionTrigger>
            </Tour.Actions>
          </Tour.Control>
        </Tour.Content>
      </Tour.Positioner>
    </Teleport>
  </Tour.Root>
</template>
