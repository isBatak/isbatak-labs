"use client"

import type { Prototype } from "#site/content"
import { Button } from "@isbatak/react-ui/button"
import { createContext, use, useState } from "react"
import { styled } from "styled-system/jsx"

import { REQUEST_URL } from "../layout/site-links"
import { Icon } from "../ui/icon"
import { ComponentCard } from "./component-card"

export type CatalogItem = Pick<
  Prototype,
  "slug" | "permalink" | "title" | "description" | "category" | "original" | "status" | "preview"
>

type Filter = "All" | "Originals" | Prototype["category"]

const matches = (item: CatalogItem, filter: Filter) =>
  filter === "All" || (filter === "Originals" ? item.original : item.category === filter)

const FilterContext = createContext<{
  items: CatalogItem[]
  filter: Filter
  setFilter: (filter: Filter) => void
} | null>(null)

function FilterButton({ filter }: { filter: Filter }) {
  const context = use(FilterContext)
  if (!context) throw new Error("FilterButton must be used within a ComponentCatalog")
  const active = context.filter === filter
  const count = context.items.filter((item) => matches(item, filter)).length

  return (
    <Button
      size="xs"
      variant={active ? "solid" : "outline"}
      flexShrink="0"
      aria-pressed={active}
      onClick={() => context.setFilter(filter)}
    >
      {filter}
      <styled.span opacity="0.6" fontVariantNumeric="tabular-nums">
        {count}
      </styled.span>
    </Button>
  )
}

export function ComponentCatalog({ items }: { items: CatalogItem[] }) {
  const [filter, setFilter] = useState<Filter>("All")
  const visible = items.filter((item) => matches(item, filter))

  return (
    <FilterContext value={{ items, filter, setFilter }}>
      <styled.div
        role="group"
        aria-label="Filter components"
        display="flex"
        flexWrap={{ base: "nowrap", md: "wrap" }}
        alignItems="center"
        gap="2"
        mx={{ base: "-5", md: "0" }}
        px={{ base: "5", md: "0" }}
        pb="8"
        overflowX={{ base: "auto", md: "visible" }}
        scrollbarWidth="none"
      >
        <FilterButton filter="All" />
        <FilterButton filter="Layout" />
        <FilterButton filter="Typography" />
        <FilterButton filter="Buttons" />
        <FilterButton filter="Date & Time" />
        <FilterButton filter="Forms" />
        <FilterButton filter="Collections" />
        <FilterButton filter="Overlays" />
        <FilterButton filter="Disclosure" />
        <FilterButton filter="Feedback" />
        <FilterButton filter="Data Display" />
        <styled.div display="flex" alignItems="center" gap="2" flexShrink="0">
          <styled.div w="1px" h="5" mx="1" bg="border" />
          <FilterButton filter="Originals" />
        </styled.div>
      </styled.div>

      <styled.div
        display="grid"
        gridTemplateColumns={{
          base: "minmax(0, 1fr)",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        }}
        gap="4"
        pb="24"
      >
        {visible.map((item) => (
          <ComponentCard
            key={item.slug}
            href={item.permalink}
            title={item.title}
            description={item.description}
            category={item.category}
            original={item.original}
            status={item.status}
            example={item.preview}
          />
        ))}

        <styled.a
          href={REQUEST_URL}
          target="_blank"
          rel="noopener"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="3"
          minH="80"
          p="8"
          borderRadius="l3"
          borderWidth="1px"
          borderStyle="dashed"
          textAlign="center"
          color="fg.muted"
          transitionProperty="color, border-color"
          transitionDuration="moderate"
          _hover={{ color: "fg", borderColor: "border.emphasized" }}
        >
          <Icon name="plus" size="lg" />
          <styled.span textStyle="sm" fontWeight="medium" color="fg">
            {visible.length === 0 ? "Nothing here yet" : "Missing a component?"}
          </styled.span>
          <styled.span textStyle="sm" maxW="xs">
            Suggest the next one on GitHub.
          </styled.span>
        </styled.a>
      </styled.div>
    </FilterContext>
  )
}
