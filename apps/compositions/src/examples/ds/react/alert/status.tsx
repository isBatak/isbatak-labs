import { Alert } from "@isbatak/react-ui/alert"
import { VStack } from "@isbatak/react-ui/stack"

export function AlertStatusDemo() {
  return (
    <VStack gap="4">
      <Alert.Root status="info">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Info alert</Alert.Title>
        </Alert.Content>
      </Alert.Root>
      <Alert.Root status="warning">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Warning alert</Alert.Title>
        </Alert.Content>
      </Alert.Root>
      <Alert.Root status="success">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Success alert</Alert.Title>
        </Alert.Content>
      </Alert.Root>
      <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Error alert</Alert.Title>
        </Alert.Content>
      </Alert.Root>
      <Alert.Root status="neutral">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Neutral alert</Alert.Title>
        </Alert.Content>
      </Alert.Root>
    </VStack>
  )
}
