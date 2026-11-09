<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Popover } from "@isbatak/svelte-ui/popover"
</script>

<Popover.Root>
  <Popover.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open popover</Button>
    {/snippet}
  </Popover.Trigger>
  <Portal>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Arrow>
          <Popover.ArrowTip />
        </Popover.Arrow>
        <Popover.Header>
          <Popover.Title>Share</Popover.Title>
          <Popover.Description>Open another popover from inside this one.</Popover.Description>
        </Popover.Header>
        <Popover.Body>
          <Popover.Root positioning={{ placement: "right" }}>
            <Popover.Trigger>
              {#snippet asChild(props)}
                <Button {...props()} size="sm" variant="outline">More options</Button>
              {/snippet}
            </Popover.Trigger>
            <Portal>
              <Popover.Positioner>
                <Popover.Content>
                  <Popover.Arrow>
                    <Popover.ArrowTip />
                  </Popover.Arrow>
                  <Popover.Header>
                    <Popover.Title>More options</Popover.Title>
                    <Popover.Description>Clicking in here keeps the first popover open.</Popover.Description>
                  </Popover.Header>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>
        </Popover.Body>
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover.Root>
