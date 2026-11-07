<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { createListCollection, Listbox } from "@isbatak/svelte-ui/listbox"
  import { css } from "styled-system/css"

  const languages = createListCollection({ items: ["TypeScript", "CSS", "Go", "Rust"] })
</script>

<Listbox.Root collection={languages} class={css({ maxW: "xs" })}>
  <Listbox.Label>Language</Listbox.Label>
  <Listbox.Content>
    <Listbox.ItemGroup>
      <Listbox.ItemGroupLabel>Frontend</Listbox.ItemGroupLabel>
      <Listbox.Item item="TypeScript">
        <Listbox.ItemText>TypeScript</Listbox.ItemText>
        <Listbox.ItemIndicator>
          <Icon name="check" />
        </Listbox.ItemIndicator>
      </Listbox.Item>
      <Listbox.Item item="CSS">
        <Listbox.ItemText>CSS</Listbox.ItemText>
        <Listbox.ItemIndicator>
          <Icon name="check" />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    </Listbox.ItemGroup>
    <Listbox.ItemGroup>
      <Listbox.ItemGroupLabel>Backend</Listbox.ItemGroupLabel>
      <Listbox.Item item="Go">
        <Listbox.ItemText>Go</Listbox.ItemText>
        <Listbox.ItemIndicator>
          <Icon name="check" />
        </Listbox.ItemIndicator>
      </Listbox.Item>
      <Listbox.Item item="Rust">
        <Listbox.ItemText>Rust</Listbox.ItemText>
        <Listbox.ItemIndicator>
          <Icon name="check" />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    </Listbox.ItemGroup>
  </Listbox.Content>
</Listbox.Root>
