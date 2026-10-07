"use client"

import { Drawer } from "@isbatak/react-ui/drawer"
import { Button } from "@isbatak/react-ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Portal } from "@ark-ui/react/portal"
import { styled } from "styled-system/jsx"

import { Icon } from "../ui/icon"
import { Wordmark } from "./wordmark"

const NavLink = styled(Link, {
  base: {
    display: "flex",
    alignItems: "center",
    h: "12",
    px: "3",
    rounded: "l2",
    textStyle: "md",
    fontWeight: "medium",
    color: "fg.muted",
    _hover: { bg: "bg.muted", color: "fg" },
    _currentPage: { bg: "bg.muted", color: "fg" },
  },
})

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Drawer.Root open={open} onOpenChange={(details) => setOpen(details.open)} placement="bottom">
      <Drawer.Trigger asChild>
        <Button
          variant="ghost"
          size="xs"
          px="0"
          aspectRatio="square"
          display={{ base: "inline-flex", md: "none" }}
          aria-label="Open navigation menu"
        >
          <Icon size="sm" name="menu" />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Grabber>
              <Drawer.GrabberIndicator />
            </Drawer.Grabber>
            <Drawer.Header>
              <Drawer.Title asChild>
                <Link href="/" aria-label="Home">
                  <Wordmark />
                </Link>
              </Drawer.Title>
              <Drawer.CloseTrigger asChild>
                <Button variant="ghost" size="xs" px="0" aspectRatio="square" aria-label="Close navigation menu">
                  <Icon size="sm" name="x" />
                </Button>
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
              <styled.nav display="flex" flexDirection="column" gap="1" pb="4">
                <NavLink href="/components" aria-current={pathname.startsWith("/components") ? "page" : undefined}>
                  Components
                </NavLink>
                <NavLink href="/tools" aria-current={pathname.startsWith("/tools") ? "page" : undefined}>
                  Tools
                </NavLink>
              </styled.nav>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
