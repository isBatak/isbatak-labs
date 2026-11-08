<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"
  import { css } from "styled-system/css"
</script>

<Drawer.Root placement="bottom" float>
  <Drawer.Trigger>
    {#snippet asChild(props)}
      <Button {...props()}>Float</Button>
    {/snippet}
  </Drawer.Trigger>
  <Portal>
    <Drawer.Backdrop />
    <Drawer.Positioner>
      <Drawer.Content class={css({ maxW: "3xl", mx: "auto" })}>
        <Drawer.Grabber>
          <Drawer.GrabberIndicator />
        </Drawer.Grabber>
        <Drawer.Header class={css({ flexDirection: "column", alignItems: "stretch", gap: "1", pt: "3" })}>
          <Drawer.Title>Float</Drawer.Title>
          <Drawer.Description>This drawer floats with a gap from the viewport edges and rounded corners.</Drawer.Description>
        </Drawer.Header>
        <Drawer.Footer>
          <Drawer.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()} variant="outline">Cancel</Button>
            {/snippet}
          </Drawer.ActionTrigger>
          <Button>Save</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>
