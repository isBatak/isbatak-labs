import { Box } from "@isbatak/react-ui/box"
import { ToggleGroup } from "@isbatak/react-ui/toggle-group"

export function ToggleGroupFittedDemo() {
  return (
    <Box w="full" maxW="sm">
      <ToggleGroup.Root fitted multiple defaultValue={["mon", "wed", "fri"]} aria-label="Repeat on">
        <ToggleGroup.Item value="mon">Mon</ToggleGroup.Item>
        <ToggleGroup.Item value="tue">Tue</ToggleGroup.Item>
        <ToggleGroup.Item value="wed">Wed</ToggleGroup.Item>
        <ToggleGroup.Item value="thu">Thu</ToggleGroup.Item>
        <ToggleGroup.Item value="fri">Fri</ToggleGroup.Item>
        <ToggleGroup.Item value="sat">Sat</ToggleGroup.Item>
        <ToggleGroup.Item value="sun">Sun</ToggleGroup.Item>
      </ToggleGroup.Root>
    </Box>
  )
}
