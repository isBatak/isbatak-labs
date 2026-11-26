<script setup lang="ts">
import { Button, CloseButton } from "@isbatak/vue-ui/button"
import { Heading } from "@isbatak/vue-ui/heading"
import { Icon } from "@isbatak/vue-ui/icon"
import { Tabs } from "@isbatak/vue-ui/tabs"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

interface Item {
  id: string
  title: string
}

const uid = () => Math.random().toString(36).slice(2, 10)

const tabs = ref<Item[]>([
  { id: "1", title: "Tab" },
  { id: "2", title: "Tab" },
  { id: "3", title: "Tab" },
])
const selected = ref<string | null>("1")

const addTab = () => {
  const id = uid()
  tabs.value = [...tabs.value, { id, title: "Tab" }]
  selected.value = id
}

const removeTab = (id: string) => {
  if (tabs.value.length > 1) tabs.value = tabs.value.filter((tab) => tab.id !== id)
}
</script>

<template>
  <Tabs.Root v-model="selected" variant="folder" size="sm" w="full">
    <Tabs.List>
      <Tabs.Trigger v-for="item in tabs" :key="item.id" :value="item.id">
        {{ item.title }}
        <CloseButton :asChild="true" size="2xs" me="-2" @click.stop="removeTab(item.id)">
          <span role="button" aria-label="Close tab"><Icon name="close" /></span>
        </CloseButton>
      </Tabs.Trigger>
      <Tabs.Indicator />
      <Button alignSelf="center" ms="2" size="2xs" variant="ghost" @click="addTab">
        <Icon name="plus" />
        Add tab
      </Button>
    </Tabs.List>
    <Tabs.Content v-for="item in tabs" :key="item.id" :value="item.id">
      <Heading size="xl" mb="2">Tab {{ item.id }}</Heading>
      <Text
        >Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam Lorem est occaecat do magna nisi mollit ipsum
        sit adipisicing fugiat ex.</Text
      >
    </Tabs.Content>
  </Tabs.Root>
</template>
