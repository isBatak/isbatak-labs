<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { EmptyState } from "@isbatak/vue-ui/empty-state"
import { Icon } from "@isbatak/vue-ui/icon"
import { token } from "styled-system/tokens"
import { ref } from "vue"

interface LabelItem extends Command.ItemData {
  label: string
  value: string
  color: "gray.solid" | "red.solid" | "purple.solid" | "blue.solid" | "teal.solid" | "pink.solid" | "orange.solid"
}

const labels = ref<LabelItem[]>([
  { label: "Bug", value: "bug", color: "red.solid" },
  { label: "Feature", value: "feature", color: "purple.solid" },
  { label: "Improvement", value: "improvement", color: "blue.solid" },
  { label: "Documentation", value: "docs", color: "teal.solid" },
  { label: "Design", value: "design", color: "pink.solid" },
  { label: "Performance", value: "performance", color: "orange.solid" },
])

const command = useCommandCollection(() => ({ initialItems: labels.value }))

const createLabel = () => {
  const label = command.query.trim()
  if (!label) return
  labels.value = [...labels.value, { label, value: label.toLowerCase().replace(/\s+/g, "-"), color: "gray.solid" }]
  command.search("")
}
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog>
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="search" /> Search labels...
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root>
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Search or create a label..." />
            </Command.Control>
            <Command.List>
              <Command.Item v-for="item in command.collection.items" :key="item.value" :item="item">
                <Box
                  as="span"
                  boxSize="2.5"
                  rounded="full"
                  :style="{ background: token.var(`colors.${item.color}`) }"
                />
                <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
              </Command.Item>
              <Command.Empty py="6">
                <EmptyState.Root size="sm">
                  <EmptyState.Content>
                    <EmptyState.Indicator>
                      <Icon name="bookmark" />
                    </EmptyState.Indicator>
                    <EmptyState.Title>No labels found</EmptyState.Title>
                    <EmptyState.Description>There's no label matching "{{ command.query }}" yet</EmptyState.Description>
                    <Command.Context v-slot="combobox">
                      <Button
                        size="xs"
                        variant="outline"
                        @click="
                          () => {
                            createLabel()
                            combobox.focus()
                          }
                        "
                      >
                        <Icon name="plus" /> Create "{{ command.query }}"
                      </Button>
                    </Command.Context>
                  </EmptyState.Content>
                </EmptyState.Root>
              </Command.Empty>
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Teleport>
    </Command.Dialog>
  </Command.Provider>
</template>
