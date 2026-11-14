import { Alert } from "@isbatak/solid-ui/alert"
import { Button } from "@isbatak/solid-ui/button"

export function AlertWithActionDemo() {
  return (
    <Alert.Root status="warning" alignItems="center">
      <Alert.Indicator />
      <Alert.Content flex="1">
        <Alert.Title>Your session is about to expire</Alert.Title>
      </Alert.Content>
      <Button size="xs" variant="outline">
        Extend
      </Button>
    </Alert.Root>
  )
}
