<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { createListCollection, Listbox } from "@isbatak/svelte-ui/listbox"
  import { css } from "styled-system/css"

  const frameworksWithDisabled = createListCollection({
    items: ["React", "Vue", "Solid", "Svelte"],
    isItemDisabled: (item) => item === "Svelte",
  })
</script>

<Listbox.Root collection={frameworksWithDisabled} class={css({ maxW: "xs" })}>
  <Listbox.Label>Framework</Listbox.Label>
  <Listbox.Content>
    <Listbox.Item item="React">
      <Listbox.ItemText>React</Listbox.ItemText>
      <Listbox.ItemIndicator>
        <Icon name="check" />
      </Listbox.ItemIndicator>
    </Listbox.Item>
    <Listbox.Item item="Vue">
      <Listbox.ItemText>Vue</Listbox.ItemText>
      <Listbox.ItemIndicator>
        <Icon name="check" />
      </Listbox.ItemIndicator>
    </Listbox.Item>
    <Listbox.Item item="Solid">
      <Listbox.ItemText>Solid</Listbox.ItemText>
      <Listbox.ItemIndicator>
        <Icon name="check" />
      </Listbox.ItemIndicator>
    </Listbox.Item>
    <Listbox.Item item="Svelte">
      <Listbox.ItemText>Svelte</Listbox.ItemText>
      <Listbox.ItemIndicator>
        <Icon name="check" />
      </Listbox.ItemIndicator>
    </Listbox.Item>
  </Listbox.Content>
</Listbox.Root>
