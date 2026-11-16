<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon } from "@isbatak/vue-ui/icon"
import { Spinner } from "@isbatak/vue-ui/spinner"
import { Text } from "@isbatak/vue-ui/text"

interface Painter extends Command.ItemData {
  id: string
  name: string
  movement: string
  image: string
}

const wait = (ms: number, signal: AbortSignal) =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms)
    signal.addEventListener("abort", () => {
      clearTimeout(timer)
      reject(signal.reason)
    })
  })

const painters: Painter[] = [
  {
    id: "van-gogh",
    name: "Vincent van Gogh",
    movement: "Post-Impressionism",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
  },
  {
    id: "monet",
    name: "Claude Monet",
    movement: "Impressionism",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/330px-Claude_Monet_1899_Nadar_crop.jpg",
  },
  {
    id: "rembrandt",
    name: "Rembrandt van Rijn",
    movement: "Dutch Golden Age",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/330px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
  },
  {
    id: "cassatt",
    name: "Mary Cassatt",
    movement: "Impressionism",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Mary_Cassatt-Selfportrait.jpg/330px-Mary_Cassatt-Selfportrait.jpg",
  },
  {
    id: "leyster",
    name: "Judith Leyster",
    movement: "Dutch Golden Age",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Judith_Leyster_-_Self-Portrait_-_Google_Art_Project.jpg/330px-Judith_Leyster_-_Self-Portrait_-_Google_Art_Project.jpg",
  },
  {
    id: "degas",
    name: "Edgar Degas",
    movement: "Impressionism",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Edgar_Degas_self_portrait_1855.jpeg/330px-Edgar_Degas_self_portrait_1855.jpeg",
  },
  {
    id: "gauguin",
    name: "Paul Gauguin",
    movement: "Post-Impressionism",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Paul_Gauguin_109.jpg/330px-Paul_Gauguin_109.jpg",
  },
  {
    id: "vigee-le-brun",
    name: "Élisabeth Vigée Le Brun",
    movement: "Rococo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg/330px-Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg",
  },
  {
    id: "aivazovsky",
    name: "Ivan Aivazovsky",
    movement: "Romanticism",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Aivazovsky_-_Self-portrait_1874.jpg/330px-Aivazovsky_-_Self-portrait_1874.jpg",
  },
]

const command = useCommandCollection<Painter>({
  itemToString: (item) => item.name,
  itemToValue: (item) => item.id,
  load: async ({ query, signal }) => {
    if (!query.trim()) return []
    await wait(400, signal)
    const term = query.trim().toLowerCase()
    return painters.filter((painter) => painter.name.toLowerCase().includes(term))
  },
})
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog>
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="account" /> Search painters...
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root>
            <Command.Label>Painter search</Command.Label>
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Search by name, e.g. Monet or Cassatt..." />
              <Spinner v-if="command.loading" size="sm" color="fg.muted" />
            </Command.Control>
            <Command.List>
              <Command.Loading>Searching painters…</Command.Loading>
              <Command.Item v-for="item in command.collection.items" :key="item.id" :item="item">
                <Avatar.Root size="2xs">
                  <Avatar.Fallback :name="item.name" />
                  <Avatar.Image :src="item.image" />
                </Avatar.Root>
                <Command.ItemText highlight>{{ item.name }}</Command.ItemText>
                <Text as="span" ms="auto" textStyle="xs" color="fg.muted" truncate>{{ item.movement }}</Text>
              </Command.Item>
              <Text v-if="command.error" role="alert" px="3" py="6" textAlign="center" textStyle="sm" color="fg.muted">
                Search failed.
                <Button size="xs" variant="plain" @click="command.reload()">Try again</Button>
              </Text>
              <Command.Empty v-else>{{ command.query ? "No painters found" : "Start typing to search" }}</Command.Empty>
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Teleport>
    </Command.Dialog>
  </Command.Provider>
</template>
