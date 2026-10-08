"use client"

import { Button } from "@isbatak/react-ui/button"
import { createContext, use, useState } from "react"
import { styled } from "styled-system/jsx"

import { REQUEST_URL } from "../layout/site-links"
import { Icon } from "../ui/icon"
import type { CatalogItem } from "./catalog-items"
import { ComponentCard } from "./component-card"

type Filter = "All" | CatalogItem["category"]

const matches = (item: CatalogItem, filter: Filter) => filter === "All" || item.category === filter

const matchesQuery = (item: CatalogItem, query: string) => {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  const haystack = [item.title, item.description, item.category].join(" ").toLowerCase()
  return terms.every((term) => haystack.includes(term))
}

const SearchField = styled("label", {
  base: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    maxW: { md: "sm" },
    mb: "4",
    color: "fg.subtle",
    _focusWithin: { color: "fg.muted" },
  },
})

const SearchInput = styled("input", {
  base: {
    w: "full",
    h: "10",
    ps: "9",
    pe: "3",
    textStyle: "sm",
    color: "fg",
    bg: "bg",
    borderWidth: "1px",
    borderRadius: "l2",
    outline: "0",
    transitionProperty: "border-color, box-shadow",
    transitionDuration: "fast",
    _placeholder: { color: "fg.subtle" },
    _hover: { borderColor: "border.emphasized" },
    _focusVisible: { borderColor: "colorPalette.solid", boxShadow: "0 0 0 1px {colors.colorPalette.solid}" },
    "&::-webkit-search-cancel-button": { display: "none" },
  },
})

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
  if (count === 0 && !active) return null

  return (
    <Button
      size="xs"
      variant={active ? "solid" : "outline"}
      colorPalette={active ? undefined : "gray"}
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

export function ComponentCatalog({ items, label }: { items: CatalogItem[]; label: string }) {
  const [filter, setFilter] = useState<Filter>("All")
  const [query, setQuery] = useState("")
  const searched = items.filter((item) => matchesQuery(item, query))
  const visible = searched.filter((item) => matches(item, filter))

  return (
    <FilterContext value={{ items: searched, filter, setFilter }}>
      <SearchField>
        <Icon name="search" position="absolute" insetStart="3" pointerEvents="none" />
        <SearchInput
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={`Search ${label}`}
          aria-label={`Search ${label}`}
          autoComplete="off"
          spellCheck={false}
        />
      </SearchField>

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
            key={item.permalink}
            slug={item.slug}
            href={item.permalink}
            title={item.title}
            description={item.description}
            category={item.category}
            prototype={item.prototype}
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
            {visible.length === 0
              ? query
                ? `No matches for “${query.trim()}”`
                : "Nothing here yet"
              : "Missing a component?"}
          </styled.span>
          <styled.span textStyle="sm" maxW="xs">
            Suggest the next one on GitHub.
          </styled.span>
        </styled.a>
      </styled.div>
    </FilterContext>
  )
}
