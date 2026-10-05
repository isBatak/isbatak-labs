import { Badge } from "@isbatak/react-ui/badge"

import { Row, Section } from "../canvas/layout"
import type { SampleProps } from "./types"

export function BadgeSample(props: SampleProps) {
  return <Badge {...props}>Badge</Badge>
}

export function BadgeDemo() {
  return (
    <>
      <Section title="Variants">
        <Row>
          <Badge variant="solid">Solid</Badge>
          <Badge variant="subtle">Subtle</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="surface">Surface</Badge>
          <Badge variant="plain">Plain</Badge>
        </Row>
      </Section>
      <Section title="Sizes">
        <Row>
          <Badge size="xs">Extra small</Badge>
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </Row>
      </Section>
      <Section title="Colors">
        <Row>
          <Badge colorPalette="green">Success</Badge>
          <Badge colorPalette="orange">Warning</Badge>
          <Badge colorPalette="red">Error</Badge>
          <Badge colorPalette="blue">Info</Badge>
        </Row>
      </Section>
    </>
  )
}
