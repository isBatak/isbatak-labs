<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"

interface CommandItem extends Command.ItemData {
  label: string
  value: string
  group: string
  description: string
  keywords: string[]
  icon: IconName
  shortcut?: string[]
}

const commands: CommandItem[] = [
  {
    label: "Open settings",
    value: "settings",
    group: "Workspace",
    description: "Configure your editor and account",
    keywords: ["preferences", "config"],
    icon: "settings",
    shortcut: ["⌘", ","],
  },
  {
    label: "Toggle terminal",
    value: "terminal",
    group: "Workspace",
    description: "Show or hide the integrated terminal",
    keywords: ["shell", "console"],
    icon: "code-brackets",
    shortcut: ["⌃", "`"],
  },
  {
    label: "Create pull request",
    value: "create-pr",
    group: "Git",
    description: "Open a pull request from this branch",
    keywords: ["PR", "merge request", "review"],
    icon: "brand-github",
  },
  {
    label: "Deploy preview",
    value: "deploy-preview",
    group: "Git",
    description: "Publish a shareable preview build",
    keywords: ["ship", "release", "publish"],
    icon: "send",
  },
]

const command = useCommandCollection({ initialItems: commands, groupBy: (item) => item.group })
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog>
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="search" /> Search workspace...
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root>
            <Command.Label>Workspace commands</Command.Label>
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Try ‘preferences’, ‘deploy’, or ‘PR’..." />
            </Command.Control>
            <Command.List>
              <Command.ItemGroup v-for="[group, items] in command.collection.group()" :key="group">
                <Command.ItemGroupLabel>{{ group }}</Command.ItemGroupLabel>
                <Command.Item v-for="item in items" :key="item.value" :item="item">
                  <Icon :name="item.icon" />
                  <Stack gap="0" flex="1" minW="0">
                    <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
                    <Text as="span" color="fg.muted" textStyle="xs" truncate>{{ item.description }}</Text>
                  </Stack>
                  <Command.ItemCommand v-for="key in item.shortcut" :key="key">{{ key }}</Command.ItemCommand>
                </Command.Item>
              </Command.ItemGroup>
              <Command.Empty>No matching commands or aliases</Command.Empty>
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Teleport>
    </Command.Dialog>
  </Command.Provider>
</template>
