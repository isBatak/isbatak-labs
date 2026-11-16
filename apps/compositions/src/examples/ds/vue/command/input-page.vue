<script setup lang="ts">
import { Badge } from "@isbatak/vue-ui/badge"
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { computed, ref } from "vue"

interface Action extends Command.ItemData {
  label: string
  value: string
  icon: IconName
  title?: string
  placeholder?: string
  hint?: string
}

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const actions: Action[] = [
  {
    label: "Rename issue...",
    value: "rename",
    page: true,
    title: "Rename",
    placeholder: "Type a new title...",
    hint: "Type a new title, then press Enter",
    icon: "edit",
  },
  {
    label: "Invite by email...",
    value: "invite",
    page: true,
    title: "Invite",
    placeholder: "name@company.com",
    hint: "Type an email address to send an invite",
    icon: "mail",
  },
  { label: "Copy issue link", value: "copy", icon: "copy" },
  { label: "Delete issue", value: "delete", icon: "delete" },
]

const title = ref("Fix login redirect loop on Safari")
const invited = ref<string[]>([])
const query = ref("")

const items = computed(() => {
  const text = query.value.trim()
  const result = [...actions]
  if (text) {
    result.push({
      label: `Rename to "${text}"`,
      value: "rename:apply",
      parent: "rename",
      icon: "edit",
      onSelect: () => (title.value = text),
    })
  }
  if (isEmail(text)) {
    result.push({
      label: `Send invite to ${text}`,
      value: "invite:send",
      parent: "invite",
      icon: "send",
      onSelect: () => (invited.value = [...invited.value, text]),
    })
  }
  return result
})

const command = useCommandCollection(() => ({
  initialItems: items.value,
  query: query.value,
  onQueryChange: (value: string) => (query.value = value),
}))
</script>

<template>
  <Stack gap="4" alignItems="flex-start">
    <Command.Provider :value="command">
      <Command.Dialog>
        <Command.DialogTrigger :asChild="true">
          <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
            <Icon name="search" /> Search actions...
          </Button>
        </Command.DialogTrigger>
        <Teleport to="body">
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root>
              <Command.Control>
                <Command.Indicator />
                <Badge v-if="command.page" size="sm" variant="subtle" flexShrink="0">{{ command.page.title }}</Badge>
                <Command.Input :placeholder="command.page?.placeholder ?? 'Type a command or search...'" />
              </Command.Control>
              <Command.List>
                <Command.Item v-for="item in command.collection.items" :key="item.value" :item="item">
                  <Icon :name="item.icon" />
                  <Command.ItemText :highlight="!command.page">{{ item.label }}</Command.ItemText>
                </Command.Item>
                <Command.Empty>{{ command.page?.hint ?? "No results found" }}</Command.Empty>
              </Command.List>
            </Command.Root>
          </Command.DialogContent>
        </Teleport>
      </Command.Dialog>
    </Command.Provider>
    <Stack gap="1" textStyle="sm">
      <Text fontWeight="medium">{{ title }}</Text>
      <Text color="fg.muted">{{ invited.length ? `Invited ${invited.join(", ")}` : "No invites yet" }}</Text>
    </Stack>
  </Stack>
</template>
