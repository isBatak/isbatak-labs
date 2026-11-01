"use client"

import { useState } from "react"
import { Icon, iconNames } from "@isbatak/react-ui/icon"
import { input } from "@isbatak/panda-ds/recipes"
import { styled } from "styled-system/jsx"

export function IconGallery() {
  const [query, setQuery] = useState("")
  const term = query.trim().toLowerCase()
  const names = iconNames.filter((name) => name.includes(term))

  return (
    <styled.div className="not-prose" display="grid" gap="4" my="6">
      <styled.input
        type="search"
        aria-label="Search icons"
        placeholder={`Search ${iconNames.length} icons`}
        className={input({ size: "sm" })}
        maxW="xs"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {names.length === 0 && (
        <styled.p textStyle="sm" color="fg.muted">
          No icons match “{query}”
        </styled.p>
      )}
      <styled.ul display="grid" gridTemplateColumns="repeat(auto-fill, minmax(6.5rem, 1fr))" gap="1">
        {names.map((name) => (
          <styled.li
            key={name}
            display="grid"
            justifyItems="center"
            gap="2"
            py="3"
            px="1"
            borderRadius="l2"
            _hover={{ bg: "bg.muted" }}
          >
            <Icon name={name} size="lg" />
            <styled.span textStyle="xs" color="fg.muted" textAlign="center" wordBreak="break-word">
              {name}
            </styled.span>
          </styled.li>
        ))}
      </styled.ul>
    </styled.div>
  )
}
