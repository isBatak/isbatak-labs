import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import { Spinner } from "@isbatak/react-ui/spinner"
import { useEffect, useRef } from "react"
import { styled } from "styled-system/jsx"

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
        <Command.DialogTrigger asChild>
          <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
            <Icon name="image" /> Browse artworks...
          </Button>
        </Command.DialogTrigger>
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root>
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder="Search artworks, e.g. study or harbour..." />
                {command.loading && <Spinner size="sm" color="fg.muted" />}
              </Command.Control>
              <Command.List>
                {command.collection.size === 0 && <Command.Loading>Loading artworks…</Command.Loading>}
                {command.collection.items.map((item) => (
                  <Command.Item item={item} key={item.id}>
                    <Icon name="image" />
                    <Command.ItemText highlight>{item.title}</Command.ItemText>
                    <styled.span ms="auto" textStyle="xs" color="fg.muted">
                      {item.year}
                    </styled.span>
                  </Command.Item>
                ))}
                {command.hasMore && <LoadMore loading={command.loading} onVisible={command.loadMore} />}
                <Command.Empty>No artworks found</Command.Empty>
              </Command.List>
            </Command.Root>
          </Command.DialogContent>
        </Portal>
      </Command.Dialog>
    </Command.Provider>
  )
}

function LoadMore({ loading, onVisible }: { loading: boolean; onVisible: VoidFunction }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) onVisible()
      },
      { root: element.closest("[role=listbox]"), rootMargin: "64px" },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [onVisible])

  return (
    <styled.div ref={ref} py="2" textAlign="center" textStyle="xs" color="fg.muted">
      {loading && "Loading more…"}
    </styled.div>
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
