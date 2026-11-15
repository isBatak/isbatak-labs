"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { styled } from "styled-system/jsx"

import { LayoutContainer } from "../layout/layout-container"
import { Icon } from "../ui/icon"
import type { DsNavNode } from "./ds-nav-data"
import { DsNavTree } from "./ds-nav-tree"
import { sectionLabels } from "./ds-sections"

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

export interface DsSubNavProps {
  components: DsNavNode[]
  styles: DsNavNode[]
  icons: DsNavNode[]
}

function SectionDrawer({ nodes, label }: { nodes: DsNavNode[]; label: string }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Drawer.Root open={open} onOpenChange={(details) => setOpen(details.open)} placement="bottom" float>
      <Drawer.Trigger asChild>
        <Button
          variant="ghost"
          size="xs"
          px="0"
          aspectRatio="square"
          display={{ base: "inline-flex", lg: "none" }}
          aria-label={`Open ${label.toLowerCase()} navigation`}
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
              <Drawer.CloseTrigger asChild>
                <Button variant="ghost" size="xs" px="0" aspectRatio="square" aria-label="Close navigation">
                  <Icon size="sm" name="close" />
                </Button>
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body h="70dvh" pb="0">
              <styled.nav aria-label={label} h="full">
                <DsNavTree nodes={nodes} label={label} />
              </styled.nav>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export function DsSubNav({ components, styles, icons }: DsSubNavProps) {
  const pathname = usePathname()
  const current = (href: string) => (pathname.startsWith(href) ? "page" : undefined)
  const section = pathname.startsWith("/ds/styles")
    ? "styles"
    : pathname.startsWith("/ds/icons")
      ? "icons"
      : "components"
  const nodes = { components, styles, icons }[section]

  return (
    <styled.div
      position="sticky"
      top="{sizes.header}"
      zIndex="sticky"
      bg="bg"
      px="2"
      h="subnav"
      borderBlockWidth="1px"
      maxW="100vw"
      overflowX="clip"
    >
      <LayoutContainer size="wide" display="flex" alignItems="center" gap="2" h="full" px={{ base: "3", md: "8" }}>
        <SectionDrawer nodes={nodes} label={sectionLabels[section]} />
        <styled.nav aria-label="Design system" display="flex" alignItems="center" gap="1">
          <NavLink href="/ds/components" aria-current={current("/ds/components")}>
            Components
          </NavLink>
          <NavLink href="/ds/styles" aria-current={current("/ds/styles")}>
            Styles
          </NavLink>
          <NavLink href="/ds/icons" aria-current={current("/ds/icons")}>
            Icons
          </NavLink>
        </styled.nav>
      </LayoutContainer>
    </styled.div>
  )
}
