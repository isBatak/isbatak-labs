<script setup lang="ts">
import { IconButton } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { createListCollection, Select } from "@isbatak/vue-ui/select"

const sorts = createListCollection({ items: ["Newest", "Oldest", "Most popular"] })
</script>

<template>
  <Select.Root :collection="sorts" :defaultValue="['Newest']" :positioning="{ sameWidth: false }" w="auto">
    <Select.HiddenSelect />
    <Select.Control>
      <Select.Trigger :asChild="true">
        <IconButton variant="outline" aria-label="Sort by">
          <Icon name="sort" />
        </IconButton>
      </Select.Trigger>
    </Select.Control>
    <Teleport to="body">
      <Select.Positioner>
        <Select.Content minW="40">
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
    </Teleport>
  </Select.Root>
</template>
