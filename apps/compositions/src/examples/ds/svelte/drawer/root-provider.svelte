<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Drawer, useDrawer } from "@isbatak/svelte-ui/drawer"
  import { css } from "styled-system/css"

  const id = $props.id()
  const drawer = useDrawer({ id, swipeDirection: "down", snapPoints: [0.4, 1], defaultSnapPoint: 0.4 })
</script>

<Button onclick={() => drawer().setOpen(true)}>Open from outside</Button>
<Drawer.RootProvider value={drawer}>
  <Portal>
    <Drawer.Backdrop />
    <Drawer.Positioner>
      <Drawer.Content class={css({ h: "[80dvh]" })}>
        <Drawer.Grabber>
          <Drawer.GrabberIndicator />
        </Drawer.Grabber>
        <Drawer.Header>
          <Drawer.Title>Using the API</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Drawer.Description>The drawer is {drawer().snapPoint === 1 ? "expanded" : "at its first snap point"}.</Drawer.Description>
        </Drawer.Body>
        <Drawer.Footer>
          <Button variant="outline" onclick={() => drawer().setSnapPoint(drawer().snapPoint === 1 ? 0.4 : 1)}>
            {drawer().snapPoint === 1 ? "Collapse" : "Expand"}
          </Button>
          <Button onclick={() => drawer().setOpen(false)}>Close</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.RootProvider>
