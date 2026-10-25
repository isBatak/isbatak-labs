import { CloseButton } from "@isbatak/react-ui/button"

import { Row, Section } from "../canvas/layout"
import { title, variantGroups } from "./button"
import type { SampleProps } from "./types"

export function CloseButtonSample(props: SampleProps) {
  return <CloseButton {...props} />
}

export function CloseButtonDemo() {
  return (
    <>
      {variantGroups.map(([name, values]) => (
        <Section key={name} title={title(name)}>
          <Row>
            {values.map((value) => {
              const props: SampleProps = { [name]: value }
              return <CloseButton key={value} aria-label={`Close (${value})`} {...props} />
            })}
          </Row>
        </Section>
      ))}
      <Section title="States">
        <Row>
          <CloseButton disabled />
        </Row>
      </Section>
    </>
  )
}
