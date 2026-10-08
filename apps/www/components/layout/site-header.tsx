import { prototypes, tools } from "#site/content"
import { Button } from "@isbatak/react-ui/button"
import Link from "next/link"
import { styled } from "styled-system/jsx"

import { ColorModeButton } from "../color-mode-button"
import { Icon } from "../ui/icon"
import { HeaderNav, type NavEntry } from "./header-nav"
import { LayoutContainer } from "./layout-container"
import { MobileNav } from "./mobile-nav"
import { REPO_URL } from "./site-links"
import { Wordmark } from "./wordmark"

const Separator = styled("div", {
  base: {
    flexShrink: "0",
    width: "1px",
    height: "5",
    bg: "border",
  },
})

const prototypeEntries: NavEntry[] = prototypes
  .toSorted((a, b) => a.order - b.order)
  .map(({ title, description, permalink }) => ({ title, description, href: permalink }))

const toolEntries: NavEntry[] = tools
  .toSorted((a, b) => a.order - b.order)
  .map(({ title, description, permalink, external }) => ({ title, description, href: permalink, external }))

export function SiteHeader() {
  return (
    <styled.header
      colorPalette="gray"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="bg"
      px="2"
      maxW="100vw"
      overflowX="clip"
    >
      <LayoutContainer
        display="flex"
        alignItems="center"
        gap={{ base: "2", sm: "4" }}
        h="header"
        ps={{ base: "5", md: "10" }}
        pe={{ base: "3", md: "8" }}
      >
        <Link href="/">
          <Wordmark />
        </Link>
        <Separator aria-hidden mx="2" display={{ base: "none", md: "block" }} />
        <HeaderNav prototypes={prototypeEntries} tools={toolEntries} />
        <styled.div flex="1" />
        <styled.div display="flex" alignItems="center">
          <Button asChild variant="ghost" size="xs" px="0" aspectRatio="square">
            <a href={REPO_URL} target="_blank" rel="noopener" aria-label="GitHub repository">
              <Icon size="sm" name="brand-github" />
            </a>
          </Button>
          <Separator aria-hidden mx="2" />
          <ColorModeButton />
          <MobileNav />
        </styled.div>
      </LayoutContainer>
    </styled.header>
  )
}
