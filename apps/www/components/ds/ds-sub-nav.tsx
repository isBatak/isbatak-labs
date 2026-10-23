"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { styled } from "styled-system/jsx"

import { LayoutContainer } from "../layout/layout-container"

const NavLink = styled(Link, {
  base: {
    display: "inline-flex",
    alignItems: "center",
    h: "8",
    px: "3",
    borderRadius: "l2",
    textStyle: "sm",
    fontWeight: "medium",
    color: "fg.muted",
    transitionProperty: "background, color",
    transitionDuration: "fast",
    focusVisibleRing: "inside",
    _hover: { color: "fg" },
    _currentPage: { bg: "bg.muted", color: "fg" },
  },
})

export function DsSubNav() {
  const pathname = usePathname()
  const current = (href: string) => (pathname.startsWith(href) ? "page" : undefined)

  return (
    <styled.div
      position="sticky"
      top="header"
      zIndex="sticky"
      bg="bg"
      px="2"
      borderBlockWidth="1px"
      maxW="100vw"
      overflowX="clip"
    >
      <LayoutContainer size="wide" display="flex" alignItems="center" h="subnav" px={{ base: "3", md: "8" }}>
        <styled.nav aria-label="Design system" display="flex" alignItems="center" gap="1">
          <NavLink href="/ds/components" aria-current={current("/ds/components")}>
            Components
          </NavLink>
          <NavLink href="/ds/styles" aria-current={current("/ds/styles")}>
            Styles
          </NavLink>
        </styled.nav>
      </LayoutContainer>
    </styled.div>
  )
}
