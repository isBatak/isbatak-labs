import { Portal } from "@ark-ui/react/portal"
import type { ActionBarVariant } from "@isbatak/panda-ds/recipes"
import { ActionBar } from "@isbatak/react-ui/action-bar"
import { Button } from "@isbatak/react-ui/button"
import { useState } from "react"
import { HStack } from "styled-system/jsx"

type Placement = NonNullable<ActionBarVariant["placement"]>

export function ActionBarPlacementDemo() {
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState<Placement>("bottom")

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
      <ActionBar.Root open={open} onOpenChange={(details) => setOpen(details.open)} placement={placement}>
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>{placement}</ActionBar.SelectionTrigger>
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
