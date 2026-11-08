import { Portal } from "@ark-ui/react/portal"
import { Combobox, useFilter, useListCollection } from "@isbatak/react-ui/combobox"

const plans = [
  { label: "Free", value: "free", description: "For personal projects. 1 seat." },
  { label: "Pro", value: "pro", description: "For small teams. Up to 10 seats." },
  { label: "Business", value: "business", description: "For growing teams. Up to 50 seats." },
  { label: "Enterprise", value: "enterprise", description: "Unlimited seats, SSO and audit logs." },
]

export function ComboboxItemDescriptionDemo() {
  const { contains } = useFilter({ sensitivity: "base" })
  const { collection, filter } = useListCollection({ initialItems: plans, filter: contains })

  return (
    <Combobox.Root collection={collection} onInputValueChange={(details) => filter(details.inputValue)} maxW="xs">
      <Combobox.Label>Plan</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Type to search" />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No plans found</Combobox.Empty>
            {collection.items.map((plan) => (
              <Combobox.Item key={plan.value} item={plan}>
                <Combobox.ItemContent>
                  <Combobox.ItemText>{plan.label}</Combobox.ItemText>
                  <Combobox.ItemDescription>{plan.description}</Combobox.ItemDescription>
                </Combobox.ItemContent>
                <Combobox.ItemIndicator />
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}
