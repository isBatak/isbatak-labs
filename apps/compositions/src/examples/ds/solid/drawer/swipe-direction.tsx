import type { DrawerVariant } from "@isbatak/panda-ds/recipes"
import { Button } from "@isbatak/solid-ui/button"
import { Drawer } from "@isbatak/solid-ui/drawer"
import { createSignal } from "solid-js"
import { Portal } from "solid-js/web"

type Placement = NonNullable<DrawerVariant["placement"]>

export function DrawerSwipeDirectionDemo() {
  const [open, setOpen] = createSignal(false)
  const [placement, setPlacement] = createSignal<Placement>("end")

  const openAt = (nextPlacement: Placement) => {
    setPlacement(nextPlacement)
    setOpen(true)
  }

  return (
    <>
      <Button onClick={() => openAt("start")}>Start</Button>
      <Button onClick={() => openAt("end")}>End</Button>
      <Button onClick={() => openAt("top")}>Top</Button>
      <Button onClick={() => openAt("bottom")}>Bottom</Button>
      <Drawer.Root placement={placement()} open={open()} onOpenChange={(details) => setOpen(details.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Opens from {placement()}</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Drawer.Description>
                  Swipe it back toward the {placement()} edge to close it. Turn on right-to-left in the preview toolbar
                  and start and end swap sides.
                </Drawer.Description>
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger
                  asChild={(props) => (
                    <Button {...props()} variant="outline">
                      Close
                    </Button>
                  )}
                />
              </Drawer.Footer>
              <Drawer.CloseTrigger />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  )
}
