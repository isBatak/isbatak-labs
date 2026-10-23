import { components, styles } from "#site/content"
import Link from "next/link"
import { styled } from "styled-system/jsx"

const Nav = styled("nav", {
  base: {
    display: { base: "none", lg: "block" },
    position: "sticky",
    top: "calc({sizes.header} + {sizes.subnav})",
    alignSelf: "start",
    maxH: "calc(100dvh - {sizes.header} - {sizes.subnav})",
    overflowY: "auto",
    py: { base: "10", md: "16" },
    pe: "2",
  },
})

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

const List = styled("ul", {
  base: {
    display: "grid",
    gap: "0.5",
    mb: "7",
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

interface SidebarItem {
  slug: string
  title: string
  permalink: string
}

type SidebarGroup = [string, SidebarItem[]]

function componentGroups(): SidebarGroup[] {
  const groups = new Map<string, SidebarItem[]>()
  const visible = components.filter((component) => !component.hidden).toSorted((a, b) => a.title.localeCompare(b.title))
  for (const item of visible) groups.set(item.category, [...(groups.get(item.category) ?? []), item])
  return [...groups].toSorted(([a], [b]) => a.localeCompare(b))
}

function styleGroups(): SidebarGroup[] {
  return [["Styles", styles.toSorted((a, b) => a.order - b.order || a.title.localeCompare(b.title))]]
}

export type DsSection = "components" | "styles"

export function DsSidebar({ section, current }: { section: DsSection; current: string }) {
  const groups = section === "styles" ? styleGroups() : componentGroups()

  return (
    <Nav aria-label={section === "styles" ? "Styles" : "Components"}>
      {groups.map(([category, items]) => (
        <div key={category}>
          <Heading>{category}</Heading>
          <List>
            {items.map((item) => (
              <li key={item.slug}>
                <NavLink href={item.permalink} aria-current={item.slug === current ? "page" : undefined}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </List>
        </div>
      ))}
    </Nav>
  )
}
