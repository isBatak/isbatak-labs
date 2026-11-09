<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { FloatingPanel } from "@isbatak/vue-ui/floating-panel"
import { ref } from "vue"

const open = ref(false)
</script>

<template>
  <FloatingPanel.Root v-model:open="open">
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
                <FloatingPanel.StageTrigger stage="minimized" />
                <FloatingPanel.StageTrigger stage="maximized" />
                <FloatingPanel.StageTrigger stage="default" />
                <FloatingPanel.CloseTrigger />
              </FloatingPanel.Control>
            </FloatingPanel.Header>
          </FloatingPanel.DragTrigger>
          <FloatingPanel.Body>Drag the header to move the panel, or drag an edge to resize it.</FloatingPanel.Body>
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
