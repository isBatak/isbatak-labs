<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { HStack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

interface CommandItem extends Command.ItemData {
  label: string
  value: string
  group: string
  icon: IconName
}

const commands: CommandItem[] = [
  { label: "Create new project", value: "new-project", group: "Projects", icon: "folder" },
  { label: "Delete project", value: "delete-project", group: "Projects", icon: "delete" },
  { label: "Invite teammate", value: "invite", group: "Projects", icon: "account" },
  { label: "Switch theme", value: "theme", group: "Preferences", icon: "moon" },
  { label: "Open settings", value: "settings", group: "Preferences", icon: "settings" },
  { label: "Sync settings", value: "sync-settings", group: "Preferences", icon: "refresh" },
]

const query = ref("")
const command = useCommandCollection(() => ({
  initialItems: commands,
  groupBy: (item: CommandItem) => item.group,
  query: query.value,
  onQueryChange: (value: string) => (query.value = value),
}))
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog>
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="search" /> {{ query || "Search commands..." }}
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root>
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Type a command or search..." />
            </Command.Control>
            <Command.List>
              <Command.ItemGroup v-for="[group, items] in command.collection.group()" :key="group">
                <Command.ItemGroupLabel>{{ group }}</Command.ItemGroupLabel>
                <Command.Item v-for="item in items" :key="item.value" :item="item">
                  <Icon :name="item.icon" />
                  <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
                </Command.Item>
              </Command.ItemGroup>
              <Command.Empty>No results found</Command.Empty>
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Teleport>
    </Command.Dialog>
  </Command.Provider>
  <HStack mt="4" gap="2" flexWrap="wrap">
    <Text as="span" textStyle="sm" color="fg.muted">Try</Text>
    <Button size="xs" variant="subtle" @click="query = 'theme'">theme</Button>
    <Button size="xs" variant="subtle" @click="query = 'project'">project</Button>
    <Button size="xs" variant="subtle" @click="query = 'settings'">settings</Button>
  </HStack>
  <Text mt="2" textStyle="sm" color="fg.muted">
    Query: <Text as="span" color="fg">{{ query || "empty" }}</Text>
  </Text>
</template>
