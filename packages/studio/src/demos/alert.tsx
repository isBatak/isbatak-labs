import { Section, Stack } from "../canvas/layout"
import { Alert, InfoIcon } from "./primitives"
import type { SampleProps } from "./types"

export function AlertSample(props: SampleProps) {
  return (
    <Alert.Root {...props}>
      <Alert.Indicator>
        <InfoIcon />
      </Alert.Indicator>
      <Alert.Content>
        <Alert.Title>Heads up</Alert.Title>
        <Alert.Description>Your trial ends in three days.</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}

export function AlertDemo() {
  return (
    <>
      <Section title="Basic">
        <AlertSample />
      </Section>
      <Section title="Status">
        <Stack>
          <AlertSample status="info" />
          <AlertSample status="success" />
          <AlertSample status="warning" />
          <AlertSample status="error" />
        </Stack>
      </Section>
      <Section title="Variants">
        <Stack>
          <AlertSample variant="subtle" />
          <AlertSample variant="surface" />
          <AlertSample variant="outline" />
          <AlertSample variant="solid" />
        </Stack>
      </Section>
    </>
  )
}
