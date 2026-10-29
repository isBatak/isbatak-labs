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
