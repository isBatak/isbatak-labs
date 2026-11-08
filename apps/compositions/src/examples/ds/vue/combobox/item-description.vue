<script setup lang="ts">
import { Combobox, type ComboboxInputValueChangeDetails, useFilter, useListCollection } from "@isbatak/vue-ui/combobox"

const plans = [
  { label: "Free", value: "free", description: "For personal projects. 1 seat." },
  { label: "Pro", value: "pro", description: "For small teams. Up to 10 seats." },
  { label: "Business", value: "business", description: "For growing teams. Up to 50 seats." },
  { label: "Enterprise", value: "enterprise", description: "Unlimited seats, SSO and audit logs." },
]

const { contains } = useFilter({ sensitivity: "base" })
const { collection, filter } = useListCollection({ initialItems: plans, filter: contains })
</script>

<template>
  <Combobox.Root
    :collection="collection"
    maxW="xs"
    @input-value-change="(details: ComboboxInputValueChangeDetails) => filter(details.inputValue)"
  >
    <Combobox.Label>Plan</Combobox.Label>
    <Combobox.Control>
      <Combobox.Input placeholder="Type to search" />
      <Combobox.IndicatorGroup>
        <Combobox.ClearTrigger />
        <Combobox.Trigger />
      </Combobox.IndicatorGroup>
    </Combobox.Control>
    <Teleport to="body">
      <Combobox.Positioner>
        <Combobox.Content>
          <Combobox.Empty>No plans found</Combobox.Empty>
          <Combobox.Item v-for="plan in collection.items" :key="plan.value" :item="plan">
            <Combobox.ItemContent>
              <Combobox.ItemText>{{ plan.label }}</Combobox.ItemText>
              <Combobox.ItemDescription>{{ plan.description }}</Combobox.ItemDescription>
            </Combobox.ItemContent>
            <Combobox.ItemIndicator />
          </Combobox.Item>
        </Combobox.Content>
      </Combobox.Positioner>
    </Teleport>
  </Combobox.Root>
</template>
