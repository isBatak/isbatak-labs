<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Popover } from "@isbatak/svelte-ui/popover"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <Popover.Root size="xs">
    <Popover.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">xs</Button>
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
  <Popover.Root size="sm">
    <Popover.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">sm</Button>
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
  <Popover.Root size="md">
    <Popover.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">md</Button>
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
  <Popover.Root size="lg">
    <Popover.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">lg</Button>
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
