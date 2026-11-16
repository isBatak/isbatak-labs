<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Box } from "@isbatak/svelte-ui/box"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Spinner } from "@isbatak/svelte-ui/spinner"
  import { Text } from "@isbatak/svelte-ui/text"
  import { css } from "styled-system/css"

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

  let sentinel = $state<HTMLElement | null>(null)

  $effect(() => {
    const element = sentinel
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) command.loadMore()
      },
      { root: element.closest("[role=listbox]"), rootMargin: "64px" },
    )
    observer.observe(element)
    return () => observer.disconnect()
  })
</script>

<Command.Provider value={command}>
  <Command.Dialog>
    <Command.DialogTrigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          variant="outline"
          size="sm"
          class={css({ minW: "64", justifyContent: "flex-start", color: "fg.muted" })}
        >
          <Icon name="image" /> Browse artworks...
        </Button>
      {/snippet}
    </Command.DialogTrigger>
    <Portal>
      <Command.DialogBackdrop />
      <Command.DialogContent>
        <Command.Root>
          <Command.Control>
            <Command.Indicator />
            <Command.Input placeholder="Search artworks, e.g. study or harbour..." />
            {#if command.loading}
              <Spinner size="sm" class={css({ color: "fg.muted" })} />
            {/if}
          </Command.Control>
          <Command.List>
            {#if command.collection.size === 0}
              <Command.Loading>Loading artworks…</Command.Loading>
            {/if}
            {#each command.collection.items as item (item.id)}
              <Command.Item {item}>
                <Icon name="image" />
                <Command.ItemText text={item.title} highlight />
                <Text as="span" ms="auto" textStyle="xs" color="fg.muted">{item.year}</Text>
              </Command.Item>
            {/each}
            {#if command.hasMore}
              <Box bind:ref={sentinel} py="2" textAlign="center" textStyle="xs" color="fg.muted">
                {command.loading ? "Loading more…" : ""}
              </Box>
            {/if}
            <Command.Empty>No artworks found</Command.Empty>
          </Command.List>
        </Command.Root>
      </Command.DialogContent>
    </Portal>
  </Command.Dialog>
</Command.Provider>
