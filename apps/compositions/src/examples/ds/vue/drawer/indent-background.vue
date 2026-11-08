<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Drawer } from "@isbatak/vue-ui/drawer"
import { css } from "styled-system/css"
</script>

<template>
  <Drawer.Stack>
    <div
      :class="
        css({ position: 'relative', w: 'full', h: '72', overflow: 'hidden', borderRadius: 'l3', borderWidth: '1px' })
      "
    >
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
        <p :class="css({ color: 'fg.muted', textAlign: 'center' })">This box stands in for your page.</p>
        <Drawer.Root placement="bottom">
          <Drawer.Trigger :asChild="true">
            <Button>Open drawer</Button>
          </Drawer.Trigger>
          <Teleport to="body">
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
                  <Drawer.ActionTrigger :asChild="true">
                    <Button variant="outline">Close</Button>
                  </Drawer.ActionTrigger>
                </Drawer.Footer>
              </Drawer.Content>
            </Drawer.Positioner>
          </Teleport>
        </Drawer.Root>
      </Drawer.Indent>
    </div>
  </Drawer.Stack>
</template>
