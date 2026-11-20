<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
import { Badge } from "@isbatak/vue-ui/badge"
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { Spinner } from "@isbatak/vue-ui/spinner"
import { Text } from "@isbatak/vue-ui/text"

interface Result extends Command.ItemData {
  label: string
  value: string
  icon?: IconName
  image?: string
  description?: string
  title?: string
  placeholder?: string
}

const items: Result[] = [
  {
    label: "Search painters...",
    value: "painters",
    page: true,
    title: "Painters",
    placeholder: "Search painters by name...",
    icon: "account",
  },
  {
    label: "Search paintings...",
    value: "paintings",
    page: true,
    title: "Paintings",
    placeholder: "Search paintings...",
    icon: "image",
  },
  { label: "Create collection", value: "create-collection", icon: "plus" },
  { label: "Open settings", value: "settings", icon: "settings" },
]

const painters = [
  {
    id: "monet",
    name: "Claude Monet",
    movement: "Impressionism",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/330px-Claude_Monet_1899_Nadar_crop.jpg",
  },
  {
    id: "cassatt",
    name: "Mary Cassatt",
    movement: "Impressionism",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Mary_Cassatt-Selfportrait.jpg/330px-Mary_Cassatt-Selfportrait.jpg",
  },
  {
    id: "rembrandt",
    name: "Rembrandt van Rijn",
    movement: "Dutch Golden Age",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/330px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
  },
  {
    id: "van-gogh",
    name: "Vincent van Gogh",
    movement: "Post-Impressionism",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
  },
]

const paintings = [
  { id: "starry-night", title: "The Starry Night", year: 1889 },
  { id: "water-lilies", title: "Water Lilies", year: 1906 },
  { id: "night-watch", title: "The Night Watch", year: 1642 },
  { id: "boating-party", title: "The Boating Party", year: 1894 },
  { id: "sunflowers", title: "Sunflowers", year: 1888 },
  { id: "impression-sunrise", title: "Impression, Sunrise", year: 1872 },
]

const matches = (text: string, query: string) => text.toLowerCase().includes(query.trim().toLowerCase())

function searchPainters(query: string): Result[] {
  return painters
    .filter((painter) => matches(painter.name, query))
    .map((painter) => ({
      label: painter.name,
      value: `painter:${painter.id}`,
      description: painter.movement,
      image: painter.image,
    }))
}

function searchPaintings(query: string): Result[] {
  return paintings
    .filter((painting) => matches(painting.title, query))
    .map((painting) => ({
      label: painting.title,
      value: `painting:${painting.id}`,
      description: String(painting.year),
      icon: "image",
    }))
}

const wait = (ms: number, signal: AbortSignal) =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms)
    signal.addEventListener("abort", () => {
      clearTimeout(timer)
      reject(signal.reason)
    })
  })

const command = useCommandCollection<Result>({
  initialItems: items,
  load: async ({ page, query, signal }) => {
    await wait(query ? 300 : 500, signal)
    if (page?.value === "painters") return searchPainters(query)
    if (page?.value === "paintings") return searchPaintings(query)
    return []
  },
})
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog>
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="search" /> Search...
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root>
            <Command.Control>
              <Command.Indicator />
              <Badge v-if="command.page" size="sm" variant="subtle" flexShrink="0">{{ command.page.title }}</Badge>
              <Command.Input :placeholder="command.page?.placeholder ?? 'Type a command or search...'" />
              <Spinner v-if="command.loading" size="sm" color="fg.muted" />
            </Command.Control>
            <Command.List>
              <Command.Loading v-if="command.collection.size === 0">
                Loading {{ command.page?.title?.toLowerCase() }}...
              </Command.Loading>
              <Command.Item v-for="item in command.collection.items" :key="item.value" :item="item">
                <Avatar.Root v-if="item.image" size="2xs">
                  <Avatar.Fallback :name="item.label" />
                  <Avatar.Image :src="item.image" />
                </Avatar.Root>
                <Icon v-else :name="item.icon ?? 'image'" />
                <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
                <Text v-if="item.description" as="span" ms="auto" textStyle="xs" color="fg.muted" truncate>
                  {{ item.description }}
                </Text>
                <Icon v-if="command.isPage(item)" name="chevron-right" />
              </Command.Item>
              <Command.Empty v-if="command.error">
                Couldn't load results.
                <Button size="xs" variant="plain" @click="command.reload()">Retry</Button>
              </Command.Empty>
              <Command.Empty v-else>No results found</Command.Empty>
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Teleport>
    </Command.Dialog>
  </Command.Provider>
</template>
