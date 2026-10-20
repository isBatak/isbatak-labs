"use client"

import { Toc } from "@isbatak/react-ui/toc"
import { styled } from "styled-system/jsx"

export interface TocEntry {
  title: string
  url: string
  items: TocEntry[]
}

interface FlatEntry {
  value: string
  depth: number
  title: string
}

const flatten = (entries: TocEntry[], depth = 1): FlatEntry[] =>
  entries.flatMap((entry) => [
    { value: entry.url.slice(1), depth, title: entry.title },
    ...flatten(entry.items, depth + 1),
  ])

const Aside = styled("aside", {
  base: {
    display: { base: "none", xl: "block" },
    position: "sticky",
    top: "{sizes.header}",
    alignSelf: "start",
    maxH: "calc(100dvh - {sizes.header})",
    overflowY: "auto",
    py: { base: "10", md: "16" },
  },
})

export function DsToc({ toc }: { toc: TocEntry[] }) {
  const items = flatten(toc)
  if (items.length === 0) return <Aside aria-hidden />

  return (
    <Aside>
      <Toc.Root variant="track" items={items} rootMargin="-80px 0px -60% 0px" aria-label="On this page">
        <Toc.List>
          <Toc.Track />
          <Toc.Indicator />
          {items.map((item) => (
            <Toc.Item key={item.value} item={item}>
              <Toc.Link href={`#${item.value}`}>{item.title}</Toc.Link>
            </Toc.Item>
          ))}
        </Toc.List>
      </Toc.Root>
    </Aside>
  )
}
