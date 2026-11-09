import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { FloatingPanel } from "@isbatak/react-ui/floating-panel"

export function FloatingPanelLockAspectRatioDemo() {
  return (
    <FloatingPanel.Root lockAspectRatio>
      <FloatingPanel.Trigger asChild>
        <Button variant="outline">Open panel</Button>
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
            <FloatingPanel.Body>Keeps its width and height in proportion while you resize it.</FloatingPanel.Body>
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
  )
}
