<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
import { Tour, useTour } from "@isbatak/vue-ui/tour"

const tour = useTour({
  steps: [
    {
      id: "welcome",
      type: "dialog",
      title: "Welcome",
      description: "A dialog step has no target, so it opens in the middle of the screen.",
      actions: [{ label: "Start", action: "next" }],
    },
    {
      id: "publish",
      type: "tooltip",
      target: () => document.querySelector<HTMLElement>("#tour-step-types-publish"),
      title: "Publish",
      description: "A tooltip step points at its target and cuts it out of the backdrop.",
      actions: [
        { label: "Back", action: "prev" },
        { label: "Next", action: "next" },
      ],
    },
    {
      id: "help",
      type: "floating",
      placement: "bottom-end",
      title: "Need help?",
      description: "A floating step sits in a corner of the screen and doesn't block the page.",
      actions: [
        { label: "Back", action: "prev" },
        { label: "Next", action: "next" },
      ],
    },
    {
      id: "done",
      type: "dialog",
      title: "All set",
      description: "You can restart the tour at any time.",
      actions: [{ label: "Finish", action: "dismiss" }],
    },
  ],
})
</script>

<template>
  <HStack gap="2">
    <Button @click="tour.start()">Start tour</Button>
    <Button id="tour-step-types-publish" variant="outline">Publish</Button>
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
