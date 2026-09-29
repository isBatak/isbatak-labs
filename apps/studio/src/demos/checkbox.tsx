import { Row, Section } from "../canvas/layout"
import { CheckIcon, Checkbox } from "./primitives"
import type { SampleProps } from "./types"

export function CheckboxSample(props: SampleProps) {
  return (
    <Checkbox.Root defaultChecked {...props}>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label>Accept terms</Checkbox.Label>
    </Checkbox.Root>
  )
}

export function CheckboxDemo() {
  return (
    <>
      <Section title="Basic">
        <Row>
          <CheckboxSample />
          <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control>
              <Checkbox.Indicator>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Control>
            <Checkbox.Label>Unchecked</Checkbox.Label>
          </Checkbox.Root>
          <CheckboxSample disabled />
        </Row>
      </Section>
      <Section title="Variants">
        <Row>
          <CheckboxSample variant="outline" />
          <CheckboxSample variant="solid" />
          <CheckboxSample variant="subtle" />
        </Row>
      </Section>
    </>
  )
}
