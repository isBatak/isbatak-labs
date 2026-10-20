"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { styled } from "styled-system/jsx"

const Swatch = styled("div", {
  base: {
    flexShrink: "0",
    w: "28",
    h: "20",
    borderRadius: "l2",
  },
})

export function DrawerNoDragAreaDemo() {
  return (
    <Drawer.Root placement="bottom">
      <Drawer.Trigger asChild>
        <Button>Pick a color</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Grabber>
              <Drawer.GrabberIndicator />
            </Drawer.Grabber>
            <Drawer.Header>
              <Drawer.Title>Pick a color</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body display="flex" flexDirection="column" gap="4">
              <Drawer.Description>
                Scroll the swatches sideways. Drags that start on them scroll the row instead of moving the drawer.
              </Drawer.Description>
              <styled.div data-no-drag display="flex" gap="3" overflowX="auto" pb="2">
                <Swatch bg="red.solid" />
                <Swatch bg="orange.solid" />
                <Swatch bg="yellow.solid" />
                <Swatch bg="green.solid" />
                <Swatch bg="teal.solid" />
                <Swatch bg="blue.solid" />
                <Swatch bg="purple.solid" />
                <Swatch bg="pink.solid" />
              </styled.div>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button variant="outline">Done</Button>
              </Drawer.ActionTrigger>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
