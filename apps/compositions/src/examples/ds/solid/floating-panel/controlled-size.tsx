import { Button } from "@isbatak/solid-ui/button"
import { FloatingPanel } from "@isbatak/solid-ui/floating-panel"
import { Portal } from "solid-js/web"
import { createSignal } from "solid-js"

export function FloatingPanelControlledSizeDemo() {
  const [size, setSize] = createSignal({ width: 360, height: 220 })

  return (
    <FloatingPanel.Root size={size()} onSizeChange={(details) => setSize(details.size)}>
      <FloatingPanel.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open panel
          </Button>
        )}
      />
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header>
                <FloatingPanel.Title>Size</FloatingPanel.Title>
                <FloatingPanel.Control>
                  <FloatingPanel.StageTrigger stage="minimized" />
                  <FloatingPanel.StageTrigger stage="maximized" />
                  <FloatingPanel.StageTrigger stage="default" />
                  <FloatingPanel.CloseTrigger />
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>
            <FloatingPanel.Body>
              {size().width} × {size().height}
            </FloatingPanel.Body>
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
