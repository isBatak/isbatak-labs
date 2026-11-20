<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommand, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/vue-ui/kbd"
import { HStack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { onMounted, onUnmounted, ref } from "vue"

interface CommandItem extends Command.ItemData {
  label: string
  value: string
  icon: IconName
  shortcut: string[]
}

const commands: CommandItem[] = [
  { label: "New file", value: "new-file", icon: "file", shortcut: ["⌘", "N"] },
  { label: "Open file", value: "open-file", icon: "folder-open", shortcut: ["⌘", "O"] },
  { label: "Save file", value: "save-file", icon: "download", shortcut: ["⌘", "S"] },
  { label: "Search in files", value: "search", icon: "search", shortcut: ["⇧", "⌘", "F"] },
  { label: "Toggle terminal", value: "terminal", icon: "code-brackets", shortcut: ["⌃", "`"] },
  { label: "Open settings", value: "settings", icon: "settings", shortcut: ["⌘", ","] },
]

const open = ref(false)
const command = useCommandCollection({ initialItems: commands })
const store = useCommand({ command, onClose: () => (open.value = false) })

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key.toLowerCase() !== "k") return
  if (!(event.metaKey || event.ctrlKey)) return
  event.preventDefault()
  open.value = !open.value
}

onMounted(() => document.addEventListener("keydown", onKeyDown))
onUnmounted(() => document.removeEventListener("keydown", onKeyDown))
</script>

<template>
  <HStack gap="4" flexWrap="wrap">
    <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted" @click="open = true">
      <Icon name="search" /> Search commands...
      <KbdGroup size="sm" variant="subtle" ms="auto">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </Button>
    <Text textStyle="sm" color="fg.muted">
      Last search: <Text as="span" color="fg">{{ store.combobox.value.inputValue || "None" }}</Text>
    </Text>
    <Command.Provider :value="command">
      <Command.Dialog :open="open" @open-change="(details: { open: boolean }) => (open = details.open)">
        <Teleport to="body">
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.RootProvider :value="store">
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
                <Command.Empty>No results found</Command.Empty>
              </Command.List>
            </Command.RootProvider>
          </Command.DialogContent>
        </Teleport>
      </Command.Dialog>
    </Command.Provider>
  </HStack>
</template>
