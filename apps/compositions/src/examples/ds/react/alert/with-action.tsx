import { Alert } from "@isbatak/react-ui/alert"
import { Button } from "@isbatak/react-ui/button"

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
