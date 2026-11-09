<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { FloatingPanel } from "@isbatak/svelte-ui/floating-panel"
</script>

<FloatingPanel.Root>
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
  </Portal>
</FloatingPanel.Root>
