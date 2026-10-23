"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { styled } from "styled-system/jsx"

import type { DsNavGroup } from "./ds-nav-data"

const Heading = styled("h2", {
  base: {
    px: "3",
    mb: "2",
    textStyle: "xs",
    fontWeight: "semibold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    color: "fg.subtle",
  },
})

const Group = styled("div", {
  base: {
    mb: "7",
    _last: { mb: "0" },
  },
})

const List = styled("ul", {
  base: {
    display: "grid",
    gap: "0.5",
  },
})

const NavLink = styled(Link, {
  base: {
    display: "block",
    px: "3",
    py: "1.5",
    borderRadius: "l2",
    textStyle: "sm",
    color: "fg.muted",
    transitionProperty: "background, color",
    transitionDuration: "fast",
    focusVisibleRing: "inside",
    _hover: {
      bg: "bg.muted",
      color: "fg",
    },
    _currentPage: {
      bg: "bg.muted",
      color: "fg",
      fontWeight: "medium",
    },
  },
})

export function DsNavGroups({ groups }: { groups: DsNavGroup[] }) {
  const pathname = usePathname()

  return groups.map((group) => (
    <Group key={group.title}>
      <Heading>{group.title}</Heading>
      <List>
        {group.items.map((item) => (
          <li key={item.permalink}>
            <NavLink href={item.permalink} aria-current={item.permalink === pathname ? "page" : undefined}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </List>
    </Group>
  ))
}
