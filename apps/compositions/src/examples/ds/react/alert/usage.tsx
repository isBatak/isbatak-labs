import { Alert } from "@isbatak/react-ui/alert"

export function AlertDemo() {
  return (
    <Alert.Root>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>This is the alert title</Alert.Title>
      </Alert.Content>
    </Alert.Root>
  )
}
