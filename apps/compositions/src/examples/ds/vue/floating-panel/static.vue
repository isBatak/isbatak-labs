<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { FloatingPanel } from "@isbatak/vue-ui/floating-panel"
</script>

<template>
  <FloatingPanel.Root :draggable="false" :resizable="false">
    <FloatingPanel.Trigger :asChild="true">
      <Button variant="outline">Open panel</Button>
    </FloatingPanel.Trigger>
    <Teleport to="body">
      <FloatingPanel.Positioner>
        <FloatingPanel.Content>
          <FloatingPanel.DragTrigger>
            <FloatingPanel.Header>
              <FloatingPanel.Title>Notes</FloatingPanel.Title>
              <FloatingPanel.Control>
                <FloatingPanel.CloseTrigger />
              </FloatingPanel.Control>
            </FloatingPanel.Header>
          </FloatingPanel.DragTrigger>
          <FloatingPanel.Body>Stays where it opens, at the size it opens with.</FloatingPanel.Body>
          <FloatingPanel.ResizeTrigger placement="n" />
          <FloatingPanel.ResizeTrigger placement="e" />
          <FloatingPanel.ResizeTrigger placement="s" />
          <FloatingPanel.ResizeTrigger placement="w" />
          <FloatingPanel.ResizeTrigger placement="ne" />
          <FloatingPanel.ResizeTrigger placement="se" />
          <FloatingPanel.ResizeTrigger placement="sw" />
          <FloatingPanel.ResizeTrigger placement="nw" />
        </FloatingPanel.Content>
      </FloatingPanel.Positioner>
    </Teleport>
  </FloatingPanel.Root>
</template>
