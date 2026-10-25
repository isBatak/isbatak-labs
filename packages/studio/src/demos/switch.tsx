import { Row, Section } from "../canvas/layout"
import { Switch } from "./primitives"
import type { SampleProps } from "./types"

export function SwitchSample(props: SampleProps) {
  return (
    <Switch.Root defaultChecked {...props}>
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Notifications</Switch.Label>
    </Switch.Root>
  )
}

export function SwitchDemo() {
  return (
    <>
      <Section title="Basic">
        <Row>
          <SwitchSample />
          <SwitchSample defaultChecked={false} />
          <SwitchSample disabled />
        </Row>
      </Section>
      <Section title="Variants">
        <Row>
          <SwitchSample variant="solid" />
          <SwitchSample variant="raised" />
        </Row>
      </Section>
    </>
  )
}
