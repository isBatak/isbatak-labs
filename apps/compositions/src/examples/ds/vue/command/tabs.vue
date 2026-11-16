<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { Tabs } from "@isbatak/vue-ui/tabs"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

interface SearchItem extends Command.ItemData {
  label: string
  value: string
  description: string
  category: string
  icon: IconName
}

const items: SearchItem[] = [
  { label: "Canvas", value: "canvas", description: "Design workspace", category: "apps", icon: "image" },
  { label: "Messages", value: "messages", description: "Team chat", category: "apps", icon: "message" },
  { label: "Calendar", value: "calendar", description: "Today's schedule", category: "apps", icon: "calendar" },
  {
    label: "Create pull request",
    value: "create-pr",
    description: "From current branch",
    category: "actions",
    icon: "brand-github",
    keywords: ["github", "review"],
  },
  {
    label: "Deploy to production",
    value: "deploy",
    description: "Ship the latest build",
    category: "actions",
    icon: "send",
    keywords: ["release", "ship"],
  },
  {
    label: "Invite teammate",
    value: "invite",
    description: "Send a workspace invite",
    category: "actions",
    icon: "plus-circle",
    keywords: ["member", "add"],
  },
  {
    label: "Berthe Morisot",
    value: "morisot",
    description: "Impressionist painter",
    category: "people",
    icon: "account",
  },
  {
    label: "Mary Cassatt",
    value: "cassatt",
    description: "Printmaker and painter",
    category: "people",
    icon: "account",
  },
]

const tab = ref("all")
const command = useCommandCollection(() => ({
  initialItems: tab.value === "all" ? items : items.filter((item) => item.category === tab.value),
}))
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog @exit-complete="tab = 'all'">
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="search" /> Search apps, actions and people...
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root>
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Search apps, actions and people..." />
            </Command.Control>
            <Box px="3" py="2" borderBottomWidth="1px">
              <Tabs.Root v-model="tab" size="sm" variant="subtle">
                <Tabs.List gap="1">
                  <Tabs.Trigger value="all">All</Tabs.Trigger>
                  <Tabs.Trigger value="apps">Apps</Tabs.Trigger>
                  <Tabs.Trigger value="actions">Actions</Tabs.Trigger>
                  <Tabs.Trigger value="people">People</Tabs.Trigger>
                </Tabs.List>
              </Tabs.Root>
            </Box>
            <Command.List>
              <Command.Item v-for="item in command.collection.items" :key="item.value" :item="item">
                <Icon :name="item.icon" />
                <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
                <Text as="span" textStyle="xs" color="fg.subtle" truncate>{{ item.description }}</Text>
              </Command.Item>
              <Command.Empty>No results found</Command.Empty>
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Teleport>
    </Command.Dialog>
  </Command.Provider>
</template>
