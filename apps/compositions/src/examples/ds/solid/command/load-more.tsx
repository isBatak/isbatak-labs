import { Box } from "@isbatak/solid-ui/box"
import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon } from "@isbatak/solid-ui/icon"
import { Spinner } from "@isbatak/solid-ui/spinner"
import { Text } from "@isbatak/solid-ui/text"
import { For, Show, createSignal, onCleanup, onMount } from "solid-js"
import { Portal } from "solid-js/web"

export function CommandLoadMoreDemo() {
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

  return (
    <Command.Provider value={command}>
      <Command.Dialog>
        <Command.DialogTrigger
          asChild={(props) => (
            <Button {...props()} variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="image" /> Browse artworks...
            </Button>
          )}
        />
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root>
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder="Search artworks, e.g. study or harbour..." />
                <Show when={command.loading}>
                  <Spinner size="sm" color="fg.muted" />
                </Show>
              </Command.Control>
              <Command.List>
                <Show when={command.collection.size === 0}>
                  <Command.Loading>Loading artworks…</Command.Loading>
                </Show>
                <For each={command.collection.items}>
                  {(item) => (
                    <Command.Item item={item}>
                      <Icon name="image" />
                      <Command.ItemText highlight>{item.title}</Command.ItemText>
                      <Text as="span" ms="auto" textStyle="xs" color="fg.muted">
                        {item.year}
                      </Text>
                    </Command.Item>
                  )}
                </For>
                <Show when={command.hasMore}>
                  <LoadMore loading={command.loading} onVisible={() => command.loadMore()} />
                </Show>
                <Command.Empty>No artworks found</Command.Empty>
              </Command.List>
            </Command.Root>
          </Command.DialogContent>
        </Portal>
      </Command.Dialog>
    </Command.Provider>
  )
}

function LoadMore(props: { loading: boolean; onVisible: VoidFunction }) {
  const [element, setElement] = createSignal<HTMLDivElement>()

  onMount(() => {
    const node = element()
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) props.onVisible()
      },
      { root: node.closest("[role=listbox]"), rootMargin: "64px" },
    )
    observer.observe(node)
    onCleanup(() => observer.disconnect())
  })

  return (
    <Box ref={setElement} py="2" textAlign="center" textStyle="xs" color="fg.muted">
      {props.loading && "Loading more…"}
    </Box>
  )
}

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
