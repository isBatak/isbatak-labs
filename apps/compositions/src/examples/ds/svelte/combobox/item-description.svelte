<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Combobox, useFilter, useListCollection } from "@isbatak/svelte-ui/combobox"
  import { css } from "styled-system/css"

  const plans = [
    { label: "Free", value: "free", description: "For personal projects. 1 seat." },
    { label: "Pro", value: "pro", description: "For small teams. Up to 10 seats." },
    { label: "Business", value: "business", description: "For growing teams. Up to 50 seats." },
    { label: "Enterprise", value: "enterprise", description: "Unlimited seats, SSO and audit logs." },
  ]

  const filters = useFilter({ sensitivity: "base" })
  const list = useListCollection({ initialItems: plans, filter: filters.contains })
</script>

<Combobox.Root
  collection={list.collection()}
  class={css({ maxW: "xs" })}
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
        {#each list.collection().items as plan (plan.value)}
          <Combobox.Item item={plan}>
            <Combobox.ItemContent>
              <Combobox.ItemText>{plan.label}</Combobox.ItemText>
              <Combobox.ItemDescription>{plan.description}</Combobox.ItemDescription>
            </Combobox.ItemContent>
            <Combobox.ItemIndicator />
          </Combobox.Item>
        {/each}
      </Combobox.Content>
    </Combobox.Positioner>
  </Portal>
</Combobox.Root>
