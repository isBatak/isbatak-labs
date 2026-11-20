<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"

interface LinkItem extends Command.ItemData {
  label: string
  value: string
  group: string
  href: string
  icon: IconName
}

const links: LinkItem[] = [
  {
    label: "Installation",
    value: "installation",
    group: "Design system",
    href: "/ds/installation",
    icon: "file-text",
    keywords: ["install", "setup"],
  },
  { label: "Components", value: "components", group: "Design system", href: "/ds/components", icon: "components" },
  {
    label: "Styles",
    value: "styles",
    group: "Design system",
    href: "/ds/styles",
    icon: "color-picker",
    keywords: ["tokens", "colors"],
  },
  { label: "Icons", value: "icons", group: "Design system", href: "/ds/icons", icon: "star" },
  {
    label: "GitHub repository",
    value: "github",
    group: "Resources",
    href: "https://github.com/isBatak/isbatak-labs",
    icon: "brand-github",
    keywords: ["source", "code"],
  },
]

const command = useCommandCollection({ initialItems: links, groupBy: (item) => item.group })
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog>
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="search" /> Search documentation...
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root>
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Search documentation..." />
            </Command.Control>
            <Command.List>
              <Command.ItemGroup v-for="[group, items] in command.collection.group()" :key="group">
                <Command.ItemGroupLabel>{{ group }}</Command.ItemGroupLabel>
                <Command.Item v-for="item in items" :key="item.value" :item="item" :asChild="true">
                  <a :href="item.href" target="_blank" rel="noreferrer">
                    <Icon :name="item.icon" />
                    <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
                    <Icon name="external-link" color="fg.subtle" ms="auto" />
                  </a>
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
