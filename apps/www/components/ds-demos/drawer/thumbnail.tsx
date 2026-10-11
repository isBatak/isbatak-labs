"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { useRef } from "react"
import { styled } from "styled-system/jsx"

export function DrawerThumbnail() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <Drawer.Root
      open
      contained
      modal={false}
      trapFocus={false}
      preventScroll={false}
      restoreFocus={false}
      closeOnEscape={false}
      closeOnInteractOutside={false}
      skipAnimationOnMount={true}
    >
      <styled.div
        ref={containerRef}
        position="relative"
        overflow="hidden"
        placeSelf="stretch"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="3"
        p="5"
        textStyle="sm"
      >
        <p>Page content</p>
        <Button size="sm">Open drawer</Button>
      </styled.div>
      <Portal container={containerRef}>
        <Drawer.Backdrop position="absolute" boxSize="full" />
        <Drawer.Positioner position="absolute" boxSize="full" padding="2">
          <Drawer.Content maxW="3/5">
            <Drawer.Header px="4" pt="4" pb="2">
              <Drawer.Title textStyle="sm">Drawer</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body px="4" textStyle="xs">
              <Drawer.Description>Slides in from an edge, with swipe to dismiss.</Drawer.Description>
            </Drawer.Body>
            <Drawer.Footer px="4" pb="4">
              <Button size="xs">Save</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
