import { Portal } from "@ark-ui/react/portal"
import { createListCollection, Select } from "@isbatak/react-ui/select"

const plans = createListCollection({
  items: [
    { label: "Free", value: "free", description: "For personal projects. 1 seat." },
    { label: "Pro", value: "pro", description: "For small teams. Up to 10 seats." },
    { label: "Enterprise", value: "enterprise", description: "Unlimited seats, SSO and audit logs." },
  ],
})

export function SelectItemDescriptionDemo() {
  return (
    <Select.Root collection={plans} maxW="xs">
      <Select.HiddenSelect />
      <Select.Label>Plan</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select plan" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.Item item={{ label: "Free", value: "free", description: "For personal projects. 1 seat." }}>
              <Select.ItemContent>
                <Select.ItemText>Free</Select.ItemText>
                <Select.ItemDescription>For personal projects. 1 seat.</Select.ItemDescription>
              </Select.ItemContent>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item={{ label: "Pro", value: "pro", description: "For small teams. Up to 10 seats." }}>
              <Select.ItemContent>
                <Select.ItemText>Pro</Select.ItemText>
                <Select.ItemDescription>For small teams. Up to 10 seats.</Select.ItemDescription>
              </Select.ItemContent>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item
              item={{ label: "Enterprise", value: "enterprise", description: "Unlimited seats, SSO and audit logs." }}
            >
              <Select.ItemContent>
                <Select.ItemText>Enterprise</Select.ItemText>
                <Select.ItemDescription>Unlimited seats, SSO and audit logs.</Select.ItemDescription>
              </Select.ItemContent>
              <Select.ItemIndicator />
            </Select.Item>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
