<script setup lang="ts">
import { Badge } from "@isbatak/vue-ui/badge"
import { Box } from "@isbatak/vue-ui/box"
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { Text } from "@isbatak/vue-ui/text"
import { Wrap } from "@isbatak/vue-ui/wrap"
import { computed, ref } from "vue"

interface LabelItem extends Command.ItemData {
  label: string
  value: string
  icon: IconName
}

const labels: LabelItem[] = [
  { label: "Bug", value: "bug", icon: "error" },
  { label: "Feature", value: "feature", icon: "sparkles" },
  { label: "Documentation", value: "docs", icon: "file-text" },
  { label: "Design", value: "design", icon: "color-picker" },
  { label: "Performance", value: "performance", icon: "stopwatch" },
  { label: "Accessibility", value: "a11y", icon: "view" },
  { label: "Breaking change", value: "breaking", icon: "warning" },
  { label: "Good first issue", value: "good-first-issue", icon: "heart" },
]

const value = ref<string[]>(["bug", "a11y"])
const command = useCommandCollection({ initialItems: labels })
const selected = computed(() => labels.filter((item) => value.value.includes(item.value)))

const toggle = (details: Command.SelectionDetails) => {
  value.value = value.value.includes(details.itemValue)
    ? value.value.filter((item) => item !== details.itemValue)
    : [...value.value, details.itemValue]
}
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog>
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="bookmark" /> Add labels...
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root :closeOnSelect="false" @select="toggle">
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Search labels..." />
            </Command.Control>
            <Command.List>
              <Command.Item v-for="item in command.collection.items" :key="item.value" :item="item">
                <Icon :name="item.icon" />
                <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
                <Box v-if="value.includes(item.value)" as="span" display="inline-flex" color="fg" ms="auto">
                  <Icon name="check" />
                </Box>
              </Command.Item>
              <Command.Empty>No labels found</Command.Empty>
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Teleport>
    </Command.Dialog>
  </Command.Provider>
  <Wrap v-if="selected.length > 0" mt="4" gap="1.5">
    <Badge v-for="item in selected" :key="item.value" variant="surface" size="md">
      <Icon :name="item.icon" />
      {{ item.label }}
    </Badge>
  </Wrap>
  <Text v-else mt="4" textStyle="sm" color="fg.muted">No labels selected</Text>
</template>
