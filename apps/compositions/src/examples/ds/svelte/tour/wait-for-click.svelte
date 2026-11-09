<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { Tour, useTour, waitForEvent } from "@isbatak/svelte-ui/tour"

  const id = $props.id()
  const tour = useTour({
    id,
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

<HStack gap="2">
  <Button onclick={() => tour().start()}>Start tour</Button>
  <Button id="tour-wait-save" variant="outline">Save</Button>
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
                    <Button {...props()} size="xs">{action.label}</Button>
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
