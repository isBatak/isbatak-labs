"use client"

import { NavigationMenu } from "@ark-ui/react/navigation-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { MouseEvent, ReactNode } from "react"
import { styled } from "styled-system/jsx"

import { Icon } from "../ui/icon"

export interface NavEntry {
  title: string
  description?: string | undefined
  href: string
  external?: boolean
}

const Root = styled(NavigationMenu.Root, {
  base: {
    position: "relative",
    display: { base: "none", md: "flex" },
    alignItems: "center",
  },
})

const List = styled(NavigationMenu.List, {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "1",
    isolation: "isolate",
  },
})

const Highlight = styled(NavigationMenu.Indicator, {
  base: {
    zIndex: "-1",
    top: "var(--trigger-y)",
    left: "var(--trigger-x)",
    width: "var(--trigger-width)",
    height: "var(--trigger-height)",
    borderRadius: "l2",
    bg: "bg.muted",
    transitionProperty: "left, width",
    transitionDuration: "moderate",
    transitionTimingFunction: "ease-in-smooth",
    _open: { animationName: "fade-in", animationDuration: "fast" },
    _closed: { animationName: "fade-out", animationDuration: "faster" },
  },
})

const Trigger = styled(NavigationMenu.Trigger, {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "1",
    h: "8",
    px: "3",
    borderRadius: "l2",
    textStyle: "sm",
    fontWeight: "medium",
    letterSpacing: "wide",
    color: "fg.muted",
    cursor: "pointer",
    outline: "none",
    transitionProperty: "color",
    transitionDuration: "fast",
    _hover: { color: "fg" },
    _open: { color: "fg" },
    "&[data-current]": { color: "fg" },
    _focusVisible: { outline: "2px solid", outlineColor: "colorPalette.focusRing" },
    "& svg": {
      color: "fg.subtle",
      transitionProperty: "rotate",
      transitionDuration: "moderate",
      transitionTimingFunction: "ease-in-smooth",
    },
    "&[data-state=open] svg": { rotate: "180deg" },
  },
})

const Content = styled(NavigationMenu.Content, {
  base: {
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    p: "2",
    _open: { animationName: "fade-in, slide-from-bottom", animationDuration: "moderate" },
    _closed: { animationName: "fade-out", animationDuration: "fast" },
    _motionReduce: { animationName: "none!" },
  },
  variants: {
    size: {
      sm: { w: "xs" },
      md: { w: "sm" },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const Positioner = styled(NavigationMenu.ViewportPositioner, {
  base: {
    position: "absolute",
    top: "100%",
    left: "0",
    zIndex: "dropdown",
    pt: "3",
  },
})

const Viewport = styled(NavigationMenu.Viewport, {
  base: {
    position: "relative",
    width: "var(--viewport-width)",
    height: "var(--viewport-height)",
    transform: "translateX(var(--viewport-x))",
    transformOrigin: "top center",
    overflow: "hidden",
    bg: "bg.panel",
    borderWidth: "1px",
    borderRadius: "l3",
    boxShadow: "lg",
    transitionProperty: "width, height, transform",
    transitionDuration: "moderate",
    transitionTimingFunction: "ease-in-smooth",
    _open: { animationStyle: "scale-fade-in", animationDuration: "fast" },
    _closed: { animationStyle: "scale-fade-out", animationDuration: "faster" },
    _motionReduce: { transitionDuration: "0s" },
  },
})

const MenuLink = styled(NavigationMenu.Link, {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    px: "3",
    py: "2.5",
    borderRadius: "l2",
    outline: "none",
    transitionProperty: "background",
    transitionDuration: "fast",
    _hover: { bg: "bg.muted" },
    _focusVisible: { bg: "bg.muted" },
    _currentPage: { bg: "bg.muted" },
  },
})

const LinkTitle = styled("span", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "1.5",
    textStyle: "sm",
    fontWeight: "medium",
    color: "fg",
  },
})

const LinkDescription = styled("span", {
  base: {
    textStyle: "xs",
    lineHeight: "1.5",
    color: "fg.muted",
    lineClamp: "2",
  },
})

const Footer = styled("div", {
  base: {
    mt: "1",
    pt: "1",
    borderTopWidth: "1px",
  },
})

const FooterLink = styled(NavigationMenu.Link, {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: "3",
    py: "2",
    borderRadius: "l2",
    textStyle: "sm",
    fontWeight: "medium",
    color: "fg.muted",
    outline: "none",
    transitionProperty: "background, color",
    transitionDuration: "fast",
    _hover: { bg: "bg.muted", color: "fg" },
    _focusVisible: { bg: "bg.muted", color: "fg" },
  },
})

function EntryLink({ entry, pathname }: { entry: NavEntry; pathname: string }) {
  const body = (
    <>
      <LinkTitle>
        {entry.title}
        {entry.external && <Icon name="arrow-up-right" color="fg.subtle" />}
      </LinkTitle>
      {entry.description && <LinkDescription>{entry.description}</LinkDescription>}
    </>
  )

  if (entry.external) {
    return (
      <MenuLink href={entry.href} target="_blank" rel="noopener">
        {body}
      </MenuLink>
    )
  }

  return (
    <MenuLink asChild current={pathname === entry.href}>
      <Link href={entry.href}>{body}</Link>
    </MenuLink>
  )
}

function Section({
  value,
  label,
  href,
  current,
  children,
}: {
  value: string
  label: string
  href: string
  current: boolean
  children: ReactNode
}) {
  return (
    <NavigationMenu.Item value={value}>
      <Trigger
        asChild
        data-current={current ? "" : undefined}
        onClick={(event: MouseEvent) => {
          if (event.detail === 0) event.preventDefault()
        }}
      >
        <Link href={href}>
          {label}
          <Icon name="chevron-down" />
        </Link>
      </Trigger>
      {children}
    </NavigationMenu.Item>
  )
}

interface HeaderNavProps {
  prototypes: NavEntry[]
  tools: NavEntry[]
}

export function HeaderNav({ prototypes, tools }: HeaderNavProps) {
  const pathname = usePathname()

  return (
    <Root aria-label="Main">
      <List>
        <Highlight />
        <Section value="components" label="Components" href="/components" current={pathname.startsWith("/components")}>
          <Content>
            {prototypes.map((entry) => (
              <EntryLink key={entry.href} entry={entry} pathname={pathname} />
            ))}
            <Footer>
              <FooterLink asChild current={pathname === "/components"}>
                <Link href="/components">
                  All prototypes
                  <Icon name="arrow-right" />
                </Link>
              </FooterLink>
            </Footer>
          </Content>
        </Section>
        <Section value="ds" label="DS" href="/ds/components" current={pathname.startsWith("/ds")}>
          <Content size="sm">
            <EntryLink
              entry={{
                title: "Installation",
                description: "Add @isbatak/panda-ds to Panda CSS and copy in the components you need.",
                href: "/ds/installation",
              }}
              pathname={pathname}
            />
            <EntryLink
              entry={{
                title: "Components",
                description: "Ark UI components styled with the design system recipes.",
                href: "/ds/components",
              }}
              pathname={pathname}
            />
          </Content>
        </Section>
        <Section value="tools" label="Tools" href="/tools" current={pathname.startsWith("/tools")}>
          <Content>
            {tools.map((entry) => (
              <EntryLink key={entry.href} entry={entry} pathname={pathname} />
            ))}
            <Footer>
              <FooterLink asChild current={pathname === "/tools"}>
                <Link href="/tools">
                  All tools
                  <Icon name="arrow-right" />
                </Link>
              </FooterLink>
            </Footer>
          </Content>
        </Section>
      </List>
      <Positioner align="start">
        <Viewport />
      </Positioner>
    </Root>
  )
}
