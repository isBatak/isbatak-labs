import { Row, Section } from "../canvas/layout"
import { Kbd } from "./primitives"
import type { SampleProps } from "./types"

export function KbdSample(props: SampleProps) {
  return <Kbd {...props}>⌘ K</Kbd>
}

export function KbdDemo() {
  return (
    <>
      <Section title="Variants">
        <Row>
          <Kbd variant="raised">⌘ K</Kbd>
          <Kbd variant="outline">Shift</Kbd>
          <Kbd variant="subtle">Ctrl</Kbd>
          <Kbd variant="plain">Esc</Kbd>
        </Row>
      </Section>
      <Section title="Sizes">
        <Row>
          <Kbd size="sm">⌘</Kbd>
          <Kbd size="md">⌘</Kbd>
          <Kbd size="lg">⌘</Kbd>
        </Row>
      </Section>
    </>
  )
}
