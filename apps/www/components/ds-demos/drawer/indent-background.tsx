"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { styled } from "styled-system/jsx"

export function DrawerIndentBackgroundDemo() {
  return (
    <Drawer.Stack>
      <styled.div position="relative" w="full" h="72" overflow="hidden" borderRadius="l3" borderWidth="1px">
        <Drawer.IndentBackground />
        <Drawer.Indent
          minH="0"
          h="full"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="4"
          p="6"
        >
          <styled.p color="fg.muted" textAlign="center">
            This box stands in for your page.
          </styled.p>
          <Drawer.Root placement="bottom">
            <Drawer.Trigger asChild>
              <Button>Open drawer</Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Grabber>
                    <Drawer.GrabberIndicator />
                  </Drawer.Grabber>
                  <Drawer.Header>
                    <Drawer.Title>Indented page</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <Drawer.Description>
                      The page behind shrinks back while this drawer is open, and grows again as you swipe it away.
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
        </Drawer.Indent>
      </styled.div>
    </Drawer.Stack>
  )
}
