<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
import { Tour, useTour, waitForEvent } from "@isbatak/vue-ui/tour"

const tour = useTour({
  steps: [
    {
      id: "save",
      type: "tooltip",
      target: () => document.querySelector<HTMLElement>("#tour-wait-save"),
      title: "Save your work",
      description: "Click Save to continue.",
      effect({ show, next, target }) {
        show()
        const [clicked, cancel] = waitForEvent(target, "click")
        clicked.then(next)
        return cancel
      },
    },
    {
      id: "saved",
      type: "dialog",
      title: "Saved",
      description: "The tour moved on as soon as you clicked the button.",
      actions: [{ label: "Done", action: "dismiss" }],
    },
  ],
})
</script>

<template>
  <HStack gap="2">
    <Button @click="tour.start()">Start tour</Button>
    <Button id="tour-wait-save" variant="outline">Save</Button>
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
                <Button size="xs">{{ action.label }}</Button>
              </Tour.ActionTrigger>
            </Tour.Actions>
          </Tour.Control>
        </Tour.Content>
      </Tour.Positioner>
    </Teleport>
  </Tour.Root>
</template>
