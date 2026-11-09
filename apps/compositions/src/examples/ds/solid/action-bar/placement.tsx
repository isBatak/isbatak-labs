import type { ActionBarVariant } from "@isbatak/panda-ds/recipes"
import { ActionBar } from "@isbatak/solid-ui/action-bar"
import { Button } from "@isbatak/solid-ui/button"
import { HStack } from "@isbatak/solid-ui/stack"
import { createSignal } from "solid-js"
import { Portal } from "solid-js/web"

type Placement = NonNullable<ActionBarVariant["placement"]>

export function ActionBarPlacementDemo() {
  const [open, setOpen] = createSignal(false)
  const [placement, setPlacement] = createSignal<Placement>("bottom")

  const openAt = (nextPlacement: Placement) => {
    setPlacement(nextPlacement)
    setOpen(true)
  }

  return (
    <>
      <HStack gap="3" flexWrap="wrap">
        <Button variant="outline" onClick={() => openAt("bottom-start")}>
          Bottom start
        </Button>
        <Button variant="outline" onClick={() => openAt("bottom")}>
          Bottom
        </Button>
        <Button variant="outline" onClick={() => openAt("bottom-end")}>
          Bottom end
        </Button>
      </HStack>
      <ActionBar.Root open={open()} onOpenChange={(details) => setOpen(details.open)} placement={placement()}>
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>{placement()}</ActionBar.SelectionTrigger>
              <ActionBar.Separator />
              <Button variant="outline" size="sm">
                Archive
              </Button>
              <ActionBar.CloseTrigger />
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </>
  )
}
