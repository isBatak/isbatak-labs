<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { computed, onMounted, ref } from "vue"

interface CommandItem extends Command.ItemData {
  label: string
  value: string
  group: string
  icon: IconName
  shortcut: string[]
}

const commands: CommandItem[] = [
  { label: "New file", value: "new-file", group: "Commands", icon: "file", shortcut: ["⌘", "N"] },
  { label: "Open file", value: "open-file", group: "Commands", icon: "folder-open", shortcut: ["⌘", "O"] },
  { label: "Save file", value: "save-file", group: "Commands", icon: "download", shortcut: ["⌘", "S"] },
  { label: "Copy selection", value: "copy", group: "Commands", icon: "copy", shortcut: ["⌘", "C"] },
  { label: "Search in files", value: "search", group: "Commands", icon: "search", shortcut: ["⇧", "⌘", "F"] },
  { label: "Open terminal", value: "terminal", group: "Commands", icon: "code-brackets", shortcut: ["⌃", "`"] },
  { label: "Open settings", value: "settings", group: "Commands", icon: "settings", shortcut: ["⌘", ","] },
]

const STORAGE_KEY = "isbatak-command-recent"
const MAX_RECENT = 3

const readRecent = (): string[] => {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]")
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : []
  } catch {
    return []
  }
}

const writeRecent = (values: string[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values))
  } catch {
    return
  }
}

const recent = ref<string[]>([])
const searching = ref(false)

onMounted(() => (recent.value = readRecent()))

const items = computed(() => {
  if (searching.value) return commands
  const recentItems = recent.value
    .map((value) => commands.find((item) => item.value === value))
    .filter((item): item is CommandItem => item != null)
    .map((item) => ({ ...item, value: `recent:${item.value}`, group: "Recent" }))
  return [...recentItems, ...commands]
})

const command = useCommandCollection(() => ({
  initialItems: items.value,
  groupBy: (item: CommandItem) => item.group,
}))

const remember = (details: Command.SelectionDetails) => {
  const value = details.itemValue.replace(/^recent:/, "")
  const next = [value, ...recent.value.filter((item) => item !== value)].slice(0, MAX_RECENT)
  recent.value = next
  writeRecent(next)
}
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog @exit-complete="searching = false">
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="search" /> Search commands...
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root
            @input-value-change="(details: { inputValue: string }) => (searching = details.inputValue !== '')"
            @select="remember"
          >
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Type a command or search..." />
            </Command.Control>
            <Command.List>
              <Command.ItemGroup v-for="[group, groupItems] in command.collection.group()" :key="group">
                <Command.ItemGroupLabel>{{ group }}</Command.ItemGroupLabel>
                <Command.Item v-for="item in groupItems" :key="item.value" :item="item">
                  <Icon :name="item.icon" />
                  <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
                  <Command.ItemCommand v-for="key in item.shortcut" :key="key">{{ key }}</Command.ItemCommand>
                </Command.Item>
              </Command.ItemGroup>
              <Command.Empty>No results found</Command.Empty>
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Teleport>
    </Command.Dialog>
  </Command.Provider>
</template>
