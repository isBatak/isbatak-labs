<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"
  import { css } from "styled-system/css"
</script>

<Drawer.Root placement="end">
  <Drawer.Trigger value="inbox">
    {#snippet asChild(props)}
      <Button {...props()}>Inbox</Button>
    {/snippet}
  </Drawer.Trigger>
  <Drawer.Trigger value="drafts">
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Drafts</Button>
    {/snippet}
  </Drawer.Trigger>
  <Drawer.Trigger value="archive">
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Archive</Button>
    {/snippet}
  </Drawer.Trigger>
  <Portal>
    <Drawer.Backdrop />
    <Drawer.Positioner>
      <Drawer.Content>
        <Drawer.Context>
          {#snippet render(drawer)}
            <Drawer.Header>
              <Drawer.Title class={css({ textTransform: "capitalize" })}>{drawer().triggerValue}</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description>
                The {drawer().triggerValue} button opened this drawer. Every trigger shares it, and triggerValue says which
                one was used.
              </Drawer.Description>
            </Drawer.Body>
          {/snippet}
        </Drawer.Context>
        <Drawer.Footer>
          <Drawer.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()} variant="outline">Close</Button>
            {/snippet}
          </Drawer.ActionTrigger>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>
