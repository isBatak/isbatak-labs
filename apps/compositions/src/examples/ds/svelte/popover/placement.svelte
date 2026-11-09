<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Popover } from "@isbatak/svelte-ui/popover"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <Popover.Root positioning={{ placement: "top" }}>
    <Popover.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Top</Button>
      {/snippet}
    </Popover.Trigger>
    <Portal>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Popover.Header>
            <Popover.Title>Release notes</Popover.Title>
            <Popover.Description>See what changed in this version.</Popover.Description>
          </Popover.Header>
          <Popover.Footer>
            <Popover.ActionTrigger>
              {#snippet asChild(props)}
                <Button {...props()} size="sm">Got it</Button>
              {/snippet}
            </Popover.ActionTrigger>
          </Popover.Footer>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
  <Popover.Root positioning={{ placement: "right" }}>
    <Popover.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Right</Button>
      {/snippet}
    </Popover.Trigger>
    <Portal>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Popover.Header>
            <Popover.Title>Release notes</Popover.Title>
            <Popover.Description>See what changed in this version.</Popover.Description>
          </Popover.Header>
          <Popover.Footer>
            <Popover.ActionTrigger>
              {#snippet asChild(props)}
                <Button {...props()} size="sm">Got it</Button>
              {/snippet}
            </Popover.ActionTrigger>
          </Popover.Footer>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
  <Popover.Root positioning={{ placement: "bottom" }}>
    <Popover.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Bottom</Button>
      {/snippet}
    </Popover.Trigger>
    <Portal>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Popover.Header>
            <Popover.Title>Release notes</Popover.Title>
            <Popover.Description>See what changed in this version.</Popover.Description>
          </Popover.Header>
          <Popover.Footer>
            <Popover.ActionTrigger>
              {#snippet asChild(props)}
                <Button {...props()} size="sm">Got it</Button>
              {/snippet}
            </Popover.ActionTrigger>
          </Popover.Footer>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
  <Popover.Root positioning={{ placement: "left" }}>
    <Popover.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Left</Button>
      {/snippet}
    </Popover.Trigger>
    <Portal>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Popover.Header>
            <Popover.Title>Release notes</Popover.Title>
            <Popover.Description>See what changed in this version.</Popover.Description>
          </Popover.Header>
          <Popover.Footer>
            <Popover.ActionTrigger>
              {#snippet asChild(props)}
                <Button {...props()} size="sm">Got it</Button>
              {/snippet}
            </Popover.ActionTrigger>
          </Popover.Footer>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
</HStack>
