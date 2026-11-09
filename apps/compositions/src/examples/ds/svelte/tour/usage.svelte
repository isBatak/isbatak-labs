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

<HStack gap="2">
  <Button onclick={() => tour().start()}>Start tour</Button>
  <Button id="tour-usage-save" variant="outline">Save</Button>
  <Button id="tour-usage-share" variant="outline">Share</Button>
  <Button id="tour-usage-export" variant="outline">Export</Button>
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
