"use client"

import { Portal } from "@ark-ui/react/portal"
import type { DrawerVariant } from "@isbatak/panda-ds/recipes"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { useState } from "react"

type Size = NonNullable<DrawerVariant["size"]>

export function DrawerSizesDemo() {
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState<Size>("xs")

  const openWithSize = (nextSize: Size) => {
    setSize(nextSize)
    setOpen(true)
  }

  return (
    <>
      <Button onClick={() => openWithSize("xs")}>xs</Button>
      <Button onClick={() => openWithSize("sm")}>sm</Button>
      <Button onClick={() => openWithSize("md")}>md</Button>
      <Button onClick={() => openWithSize("lg")}>lg</Button>
      <Button onClick={() => openWithSize("xl")}>xl</Button>
      <Button onClick={() => openWithSize("full")}>full</Button>
      <Drawer.Root size={size} open={open} onOpenChange={(details) => setOpen(details.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Size {size}</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Drawer.Description>This drawer uses the {size} size.</Drawer.Description>
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
