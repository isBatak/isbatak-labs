<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { Icon } from "@isbatak/vue-ui/icon"
import { Spinner } from "@isbatak/vue-ui/spinner"
import { Text } from "@isbatak/vue-ui/text"
import { useTemplateRef, watchEffect } from "vue"

interface Artwork extends Command.ItemData {
  id: string
  title: string
  year: number
}

const PAGE_SIZE = 8

const subjects = ["Study", "Harbour", "Still life", "Portrait", "Landscape", "Garden", "Seascape", "Interior"]

const artworks: Artwork[] = Array.from({ length: 96 }, (_, index) => ({
  id: `artwork-${index + 1}`,
  title: `${subjects[index % subjects.length]} no. ${Math.floor(index / subjects.length) + 1}`,
  year: 1850 + ((index * 7) % 60),
}))

const wait = (ms: number, signal: AbortSignal) =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms)
    signal.addEventListener("abort", () => {
      clearTimeout(timer)
      reject(signal.reason)
    })
  })

const command = useCommandCollection<Artwork>({
  itemToString: (item) => item.title,
  itemToValue: (item) => item.id,
  load: async ({ query, signal, cursor }) => {
    if (!cursor) await wait(300, signal)
    else await wait(600, signal)
    const term = query.trim().toLowerCase()
    const matches = artworks.filter((artwork) => artwork.title.toLowerCase().includes(term))
    const skip = Number(cursor ?? 0)
    const next = skip + PAGE_SIZE
    return {
      items: matches.slice(skip, next),
      cursor: next < matches.length ? String(next) : undefined,
    }
  },
})

const sentinel = useTemplateRef<{ $el: HTMLElement }>("sentinel")

watchEffect((onCleanup) => {
  const element = sentinel.value?.$el
  if (!element) return
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) command.loadMore()
    },
    { root: element.closest("[role=listbox]"), rootMargin: "64px" },
  )
  observer.observe(element)
  onCleanup(() => observer.disconnect())
})
</script>

<template>
  <Command.Provider :value="command">
    <Command.Dialog>
      <Command.DialogTrigger :asChild="true">
        <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
          <Icon name="image" /> Browse artworks...
        </Button>
      </Command.DialogTrigger>
      <Teleport to="body">
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root>
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder="Search artworks, e.g. study or harbour..." />
              <Spinner v-if="command.loading" size="sm" color="fg.muted" />
            </Command.Control>
            <Command.List>
              <Command.Loading v-if="command.collection.size === 0">Loading artworks…</Command.Loading>
              <Command.Item v-for="item in command.collection.items" :key="item.id" :item="item">
                <Icon name="image" />
                <Command.ItemText highlight>{{ item.title }}</Command.ItemText>
                <Text as="span" ms="auto" textStyle="xs" color="fg.muted">{{ item.year }}</Text>
              </Command.Item>
              <Box v-if="command.hasMore" ref="sentinel" py="2" textAlign="center" textStyle="xs" color="fg.muted">
                {{ command.loading ? "Loading more…" : "" }}
              </Box>
              <Command.Empty>No artworks found</Command.Empty>
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Teleport>
    </Command.Dialog>
  </Command.Provider>
</template>
