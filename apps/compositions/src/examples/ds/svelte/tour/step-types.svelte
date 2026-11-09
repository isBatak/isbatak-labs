<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { Tour, useTour } from "@isbatak/svelte-ui/tour"

  const id = $props.id()
  const tour = useTour({
    id,
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

<HStack gap="2">
  <Button onclick={() => tour().start()}>Start tour</Button>
  <Button id="tour-step-types-publish" variant="outline">Publish</Button>
</HStack>
<Tour.Root {tour}>
  <Portal>
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
          <Tour.Actions>
            {#snippet children(actions)}
              {#each actions() as action (action.label)}
                <Tour.ActionTrigger {action}>
                  {#snippet asChild(props)}
                    <Button {...props()} size="xs" variant={action.action === "prev" ? "outline" : "solid"}>{action.label}</Button>
                  {/snippet}
                </Tour.ActionTrigger>
              {/each}
            {/snippet}
          </Tour.Actions>
        </Tour.Control>
      </Tour.Content>
    </Tour.Positioner>
  </Portal>
</Tour.Root>
