import { Button } from "@isbatak/react-ui/button"

import { Row, Section } from "../canvas/layout"
import type { SampleProps } from "./types"

export function ButtonSample(props: SampleProps) {
  return <Button {...props}>Button</Button>
}

export function ButtonDemo() {
  return (
    <>
      <Section title="Variants">
        <Row>
          <Button variant="solid">Solid</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="surface">Surface</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="plain">Plain</Button>
        </Row>
      </Section>
      <Section title="Sizes">
        <Row>
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
        </Row>
      </Section>
      <Section title="Colors">
        <Row>
          <Button colorPalette="blue">Blue</Button>
          <Button colorPalette="green">Green</Button>
          <Button colorPalette="red">Red</Button>
          <Button colorPalette="red" variant="outline">
            Delete
          </Button>
        </Row>
      </Section>
      <Section title="States">
        <Row>
          <Button loading loadingText="Saving">
            Save
          </Button>
          <Button disabled>Disabled</Button>
        </Row>
      </Section>
    </>
  )
}
