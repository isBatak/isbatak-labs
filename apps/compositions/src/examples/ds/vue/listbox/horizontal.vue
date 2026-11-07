<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { createListCollection, Listbox } from "@isbatak/vue-ui/listbox"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte"] })
</script>

<template>
  <Listbox.Root :collection="frameworks" orientation="horizontal" :defaultValue="['Solid']">
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
</template>
