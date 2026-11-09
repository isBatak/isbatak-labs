<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { FloatingPanel } from "@isbatak/svelte-ui/floating-panel"
</script>

<FloatingPanel.Root minSize={{ width: 240, height: 160 }} maxSize={{ width: 480, height: 360 }}>
  <FloatingPanel.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open panel</Button>
    {/snippet}
  </FloatingPanel.Trigger>
  <Portal>
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
        <FloatingPanel.Body>Resizes between 240 × 160 and 480 × 360.</FloatingPanel.Body>
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
  </Portal>
</FloatingPanel.Root>
