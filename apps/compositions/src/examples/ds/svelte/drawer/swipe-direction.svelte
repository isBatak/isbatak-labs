<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import type { DrawerVariant } from "@isbatak/panda-ds/recipes"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"

  type Placement = NonNullable<DrawerVariant["placement"]>

  let open = $state(false)
  let placement = $state<Placement>("end")

  const openAt = (nextPlacement: Placement) => {
    placement = nextPlacement
    open = true
  }
</script>

<Button onclick={() => openAt("start")}>Start</Button>
<Button onclick={() => openAt("end")}>End</Button>
<Button onclick={() => openAt("top")}>Top</Button>
<Button onclick={() => openAt("bottom")}>Bottom</Button>
<Drawer.Root {placement} bind:open>
  <Portal>
    <Drawer.Backdrop />
    <Drawer.Positioner>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Opens from {placement}</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Drawer.Description>
            Swipe it back toward the {placement} edge to close it. Turn on right-to-left in the preview toolbar and start and
            end swap sides.
          </Drawer.Description>
        </Drawer.Body>
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
