<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Input } from "@isbatak/svelte-ui/input"
  import { Popover } from "@isbatak/svelte-ui/popover"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<Popover.Root>
  <HStack gap="2">
    <Popover.Anchor>
      {#snippet asChild(props)}
        <Input {...props()} placeholder="Search" class={css({ w: "56" })} />
      {/snippet}
    </Popover.Anchor>
    <Popover.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Filters</Button>
      {/snippet}
    </Popover.Trigger>
  </HStack>
  <Portal>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Arrow>
          <Popover.ArrowTip />
        </Popover.Arrow>
        <Popover.Header>
          <Popover.Title>Filters</Popover.Title>
          <Popover.Description>The popover lines up with the search field, not the button.</Popover.Description>
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
