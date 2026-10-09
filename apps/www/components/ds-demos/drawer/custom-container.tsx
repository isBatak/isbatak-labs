"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button, CloseButton } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { useRef } from "react"
import { styled } from "styled-system/jsx"

export function DrawerCustomContainerDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <Drawer.Root closeOnInteractOutside={false}>
      <styled.div
        ref={containerRef}
        position="relative"
        overflow="hidden"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="3"
        w="full"
        minH="80"
        p="6"
        rounded="l3"
        borderWidth="1px"
        bg="bg"
      >
        <p>The drawer renders inside this box.</p>
        <Drawer.Trigger asChild>
          <Button>Open drawer</Button>
        </Drawer.Trigger>
      </styled.div>
      <Portal container={containerRef}>
        <Drawer.Backdrop position="absolute" boxSize="full" />
        <Drawer.Positioner position="absolute" boxSize="full">
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Inside a container</Drawer.Title>
              <Drawer.CloseTrigger asChild position="static">
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description>Backdrop and positioner fill the box instead of the viewport.</Drawer.Description>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
