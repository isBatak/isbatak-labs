import { Mark } from "@isbatak/react-ui/mark"
import { Stack } from "@isbatak/react-ui/stack"
import { Text } from "@isbatak/react-ui/text"

export function MarkVariantsDemo() {
  return (
    <Stack gap="4">
      <Text>
        The <Mark variant="subtle">design system</Mark> is a collection of UI elements.
      </Text>
      <Text>
        The <Mark variant="solid">design system</Mark> is a collection of UI elements.
      </Text>
      <Text>
        The <Mark variant="text">design system</Mark> is a collection of UI elements.
      </Text>
      <Text>
        The <Mark variant="plain">design system</Mark> is a collection of UI elements.
      </Text>
    </Stack>
  )
}
