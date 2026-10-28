import { Button } from "@isbatak/react-ui/button"
import { Tooltip } from "@isbatak/react-ui/tooltip"
import { Portal } from "@ark-ui/react/portal"

import { Row, Section, StaticOverlay } from "../canvas/layout"
import type { SampleProps } from "./types"

export function TooltipSample(props: SampleProps) {
  return (
    <StaticOverlay>
      <Tooltip.Root open {...props}>
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Add to library
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
    </StaticOverlay>
  )
}

export function TooltipDemo() {
  return (
    <>
      <Section title="Interactive">
        <Row>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button variant="outline">Hover me</Button>
            </Tooltip.Trigger>
            <Portal>
              <Tooltip.Positioner>
                <Tooltip.Content>
                  <Tooltip.Arrow>
                    <Tooltip.ArrowTip />
                  </Tooltip.Arrow>
                  Add to library
                </Tooltip.Content>
              </Tooltip.Positioner>
            </Portal>
          </Tooltip.Root>
        </Row>
      </Section>
      <Section title="Open">
        <TooltipSample />
      </Section>
    </>
  )
}
