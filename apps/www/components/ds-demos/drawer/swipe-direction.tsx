"use client"

import { Portal } from "@ark-ui/react/portal"
import type { DrawerVariant } from "@isbatak/panda-ds/recipes"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { useState } from "react"

type Placement = NonNullable<DrawerVariant["placement"]>

export function DrawerSwipeDirectionDemo() {
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState<Placement>("end")

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
      <Drawer.Root placement={placement} open={open} onOpenChange={(details) => setOpen(details.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Opens from {placement}</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Drawer.Description>
                  Swipe it back toward the {placement} edge to close it. Turn on right-to-left in the preview toolbar
                  and start and end swap sides.
                </Drawer.Description>
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger asChild>
                  <Button variant="outline">Close</Button>
                </Drawer.ActionTrigger>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  )
}
