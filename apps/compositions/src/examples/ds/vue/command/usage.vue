<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/vue-ui/kbd"
import { HStack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

interface CommandItem extends Command.ItemData {
  label: string
  value: string
  icon: IconName
  shortcut: string[]
}

const commands: CommandItem[] = [
  { label: "New file", value: "new-file", icon: "file", shortcut: ["⌘", "N"] },
  { label: "Open file", value: "open-file", icon: "folder-open", shortcut: ["⌘", "O"] },
  { label: "Save", value: "save", icon: "download", shortcut: ["⌘", "S"] },
  { label: "Copy path", value: "copy-path", icon: "copy", shortcut: ["⌥", "⌘", "C"] },
  { label: "Search in files", value: "search", icon: "search", shortcut: ["⇧", "⌘", "F"] },
  { label: "Toggle terminal", value: "terminal", icon: "code-brackets", shortcut: ["⌃", "`"] },
  { label: "Open settings", value: "settings", icon: "settings", shortcut: ["⌘", ","] },
]

const lastCommand = ref<string>()
const command = useCommandCollection({ initialItems: commands })
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog>
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="search" /> Search commands...
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root
            @select="
              (details: Command.SelectionDetails) => (lastCommand = command.collection.find(details.itemValue)?.label)
            "
          >
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Type a command or search..." />
            </Command.Control>
            <Command.List>
              <Command.Item v-for="item in command.collection.items" :key="item.value" :item="item">
                <Icon :name="item.icon" />
                <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
                <Command.ItemCommand v-for="key in item.shortcut" :key="key">{{ key }}</Command.ItemCommand>
              </Command.Item>
              <Command.Empty>No commands found</Command.Empty>
            </Command.List>
            <Command.Footer>
              <HStack gap="1.5">
                <KbdGroup size="sm" variant="subtle">
                  <Kbd>↑</Kbd>
                  <Kbd>↓</Kbd>
                </KbdGroup>
                Navigate
              </HStack>
              <HStack gap="1.5">
                <Kbd size="sm" variant="subtle">↵</Kbd>
                Run
              </HStack>
              <HStack gap="1.5">
                <Kbd size="sm" variant="subtle">esc</Kbd>
                Close
              </HStack>
            </Command.Footer>
          </Command.Root>
        </Command.DialogContent>
      </Teleport>
    </Command.Dialog>
  </Command.Provider>
  <Text v-if="lastCommand" mt="4" color="fg.muted" textStyle="sm">
    Ran <Text as="span" color="fg">{{ lastCommand }}</Text>
  </Text>
</template>
