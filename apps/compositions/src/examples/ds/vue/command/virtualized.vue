<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { Text } from "@isbatak/vue-ui/text"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/vue-ui/virtualizer"
import { watchEffect } from "vue"

interface DocumentCommand extends Command.ItemData {
  label: string
  value: string
  folder: string
  icon: IconName
}

const actions: { label: string; icon: IconName }[] = [
  { label: "Open", icon: "file-text" },
  { label: "Rename", icon: "edit" },
  { label: "Duplicate", icon: "copy" },
  { label: "Share", icon: "share" },
  { label: "Close", icon: "close" },
  { label: "Delete", icon: "delete" },
]

const folders = ["Design", "Engineering", "Marketing", "Finance", "Legal"]

const commands: DocumentCommand[] = Array.from({ length: 5000 }, (_, index) => {
  const action = actions[index % actions.length] ?? { label: "Open", icon: "file-text" }
  const docIndex = Math.floor(index / actions.length)
  const file = `document-${String(docIndex + 1).padStart(3, "0")}`
  return {
    label: `${action.label} ${file}`,
    value: `${action.label.toLowerCase()}-${file}`,
    folder: folders[docIndex % folders.length] ?? "Design",
    icon: action.icon,
  }
})

const command = useCommandCollection({ initialItems: commands })
const virtualizer = useListVirtualizer({ count: commands.length, estimatedSize: () => 36, overscan: 10 })

watchEffect(() => virtualizer.updateOptions({ count: command.collection.size }))

const scrollToIndex = (details: { index: number }) => virtualizer.scrollToIndex(details.index, { align: "auto" })
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog>
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="search" /> Search documents...
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root :scrollToIndexFn="scrollToIndex">
            <Command.Control>
              <Command.Indicator />
              <Command.Input :placeholder="`Search ${commands.length.toLocaleString()} commands...`" />
            </Command.Control>
            <Command.List :asChild="true">
              <ListVirtualizer.Root :value="virtualizer">
                <ListVirtualizer.Content>
                  <template v-for="virtualItem in virtualizer.getVirtualItems()" :key="virtualItem.key">
                    <Command.Item
                      v-if="command.collection.items[virtualItem.index]"
                      :item="command.collection.items[virtualItem.index]"
                      :asChild="true"
                    >
                      <ListVirtualizer.Item :item="virtualItem">
                        <Icon :name="command.collection.items[virtualItem.index]!.icon" />
                        <Command.ItemText highlight>{{
                          command.collection.items[virtualItem.index]!.label
                        }}</Command.ItemText>
                        <Text as="span" textStyle="xs" color="fg.subtle">
                          {{ command.collection.items[virtualItem.index]!.folder }}
                        </Text>
                      </ListVirtualizer.Item>
                    </Command.Item>
                  </template>
                </ListVirtualizer.Content>
                <Command.Empty>No commands found</Command.Empty>
              </ListVirtualizer.Root>
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Teleport>
    </Command.Dialog>
  </Command.Provider>
</template>
