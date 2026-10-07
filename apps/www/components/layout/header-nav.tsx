"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { styled } from "styled-system/jsx"

const NavLink = styled(Link, {
  base: {
    textStyle: "sm",
    fontWeight: "medium",
    letterSpacing: "wide",
    color: "fg.muted",
    transitionProperty: "color",
    transitionDuration: "fast",
    _hover: { color: "fg" },
    _currentPage: { color: "fg" },
  },
})

export function HeaderNav() {
  const pathname = usePathname()

  return (
    <styled.nav display={{ base: "none", md: "flex" }} alignItems="center" gap="5">
      <NavLink href="/prototypes" aria-current={pathname.startsWith("/prototypes") ? "page" : undefined}>
        Prototypes
      </NavLink>
      <NavLink href="/tools" aria-current={pathname.startsWith("/tools") ? "page" : undefined}>
        Tools
      </NavLink>
    </styled.nav>
  )
}
