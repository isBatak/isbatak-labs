<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/vue-ui/kbd"
import { Separator } from "@isbatak/vue-ui/separator"
import { HStack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

interface AppItem extends Command.ItemData {
  label: string
  value: string
  group: string
  type: string
  action: string
  icon: IconName
}

const apps: AppItem[] = [
  {
    label: "Tasks",
    value: "tasks",
    group: "Applications",
    type: "Application",
    action: "Open application",
    icon: "check-square",
    keywords: ["issues", "todo"],
  },
  {
    label: "Canvas",
    value: "canvas",
    group: "Applications",
    type: "Application",
    action: "Open application",
    icon: "image",
    keywords: ["design"],
  },
  {
    label: "Messages",
    value: "messages",
    group: "Applications",
    type: "Application",
    action: "Open application",
    icon: "message",
    keywords: ["chat"],
  },
  {
    label: "Clipboard history",
    value: "clipboard",
    group: "Commands",
    type: "Command",
    action: "Run command",
    icon: "copy",
    keywords: ["paste", "copy"],
  },
  {
    label: "Search snippets",
    value: "snippets",
    group: "Commands",
    type: "Command",
    action: "Run command",
    icon: "quote-filled",
    keywords: ["text", "templates"],
  },
  {
    label: "Calculator",
    value: "calculator",
    group: "Commands",
    type: "Command",
    action: "Run command",
    icon: "divide",
    keywords: ["math", "convert"],
  },
]

const command = useCommandCollection({ initialItems: apps, groupBy: (item) => item.group })
const highlighted = ref<AppItem | null>(null)
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog>
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="search" /> Search apps and commands...
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root
            @highlight-change="
              (details: { highlightedValue: string | null }) =>
                (highlighted = command.collection.find(details.highlightedValue))
            "
          >
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Search for apps and commands..." />
            </Command.Control>
            <Command.List>
              <Command.ItemGroup v-for="[group, items] in command.collection.group()" :key="group">
                <Command.ItemGroupLabel>{{ group }}</Command.ItemGroupLabel>
                <Command.Item v-for="item in items" :key="item.value" :item="item">
                  <Icon :name="item.icon" />
                  <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
                  <Text as="span" textStyle="xs" color="fg.subtle">{{ item.type }}</Text>
                </Command.Item>
              </Command.ItemGroup>
              <Command.Empty>No results found</Command.Empty>
            </Command.List>
            <Command.Footer>
              <Icon name="keyboard" />
              <HStack gap="2" ms="auto" color="fg">
                <Text as="span" fontWeight="medium">{{ highlighted?.action ?? "Open" }}</Text>
                <Kbd size="sm" variant="subtle">↵</Kbd>
              </HStack>
              <Separator orientation="vertical" h="4" />
              <HStack gap="2">
                <Text as="span">Actions</Text>
                <KbdGroup size="sm" variant="subtle">
                  <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>
                </KbdGroup>
              </HStack>
            </Command.Footer>
          </Command.Root>
        </Command.DialogContent>
      </Teleport>
    </Command.Dialog>
  </Command.Provider>
</template>
