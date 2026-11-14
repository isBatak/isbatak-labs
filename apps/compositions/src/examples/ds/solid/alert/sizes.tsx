import { Alert } from "@isbatak/solid-ui/alert"
import { VStack } from "@isbatak/solid-ui/stack"

export function AlertSizesDemo() {
  return (
    <VStack gap="4">
      <Alert.Root size="sm">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Small alert</Alert.Title>
        </Alert.Content>
      </Alert.Root>
      <Alert.Root size="md">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Medium alert</Alert.Title>
        </Alert.Content>
      </Alert.Root>
      <Alert.Root size="lg">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Large alert</Alert.Title>
        </Alert.Content>
      </Alert.Root>
    </VStack>
  )
}
