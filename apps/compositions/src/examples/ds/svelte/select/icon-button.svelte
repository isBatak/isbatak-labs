<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { IconButton } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { createListCollection, Select } from "@isbatak/svelte-ui/select"
  import { css } from "styled-system/css"

  const sorts = createListCollection({ items: ["Newest", "Oldest", "Most popular"] })
</script>

<Select.Root collection={sorts} defaultValue={["Newest"]} positioning={{ sameWidth: false }} class={css({ w: "auto" })}>
  <Select.HiddenSelect />
  <Select.Control>
    <Select.Trigger>
      {#snippet asChild(props)}
        <IconButton {...props()} variant="outline" aria-label="Sort by">
          <Icon name="sort" />
        </IconButton>
      {/snippet}
    </Select.Trigger>
  </Select.Control>
  <Portal>
    <Select.Positioner>
      <Select.Content class={css({ minW: "40" })}>
        <Select.Item item="Newest">
          <Select.ItemText>Newest</Select.ItemText>
          <Select.ItemIndicator />
        </Select.Item>
        <Select.Item item="Oldest">
          <Select.ItemText>Oldest</Select.ItemText>
          <Select.ItemIndicator />
        </Select.Item>
        <Select.Item item="Most popular">
          <Select.ItemText>Most popular</Select.ItemText>
          <Select.ItemIndicator />
        </Select.Item>
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>
