import { Combobox, useFilter, useListCollection } from "@isbatak/solid-ui/combobox"
import { For } from "solid-js"
import { Portal } from "solid-js/web"

const plans = [
  { label: "Free", value: "free", description: "For personal projects. 1 seat." },
  { label: "Pro", value: "pro", description: "For small teams. Up to 10 seats." },
  { label: "Business", value: "business", description: "For growing teams. Up to 50 seats." },
  { label: "Enterprise", value: "enterprise", description: "Unlimited seats, SSO and audit logs." },
]

export function ComboboxItemDescriptionDemo() {
  const filters = useFilter({ sensitivity: "base" })
  const list = useListCollection({ initialItems: plans, filter: filters.contains })

  return (
    <Combobox.Root
      collection={list.collection()}
      maxW="xs"
      onInputValueChange={(details) => list.filter(details.inputValue)}
    >
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
            <For each={list.collection().items}>
              {(plan) => (
                <Combobox.Item item={plan}>
                  <Combobox.ItemContent>
                    <Combobox.ItemText>{plan.label}</Combobox.ItemText>
                    <Combobox.ItemDescription>{plan.description}</Combobox.ItemDescription>
                  </Combobox.ItemContent>
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              )}
            </For>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}
