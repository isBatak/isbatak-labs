import { Spinner } from "@isbatak/react-ui/spinner"

import { Row, Section } from "../canvas/layout"
import type { SampleProps } from "./types"

export function SpinnerSample(props: SampleProps) {
  return <Spinner {...props} />
}

export function SpinnerDemo() {
  return (
    <Section title="Sizes">
      <Row>
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </Row>
    </Section>
  )
}
