"use client"

import { NavigationMenu as ArkNavigationMenu } from "@ark-ui/react/navigation-menu"
import { NavigationMenu } from "@isbatak/react-ui/navigation-menu"
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

const FooterLink = styled(ArkNavigationMenu.Link, {
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
      <NavigationMenu.Link href={entry.href} target="_blank" rel="noopener">
        {body}
      </NavigationMenu.Link>
    )
  }

  return (
    <NavigationMenu.Link asChild current={pathname === entry.href}>
      <Link href={entry.href}>{body}</Link>
    </NavigationMenu.Link>
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
      <NavigationMenu.Trigger
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
      </NavigationMenu.Trigger>
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
    <NavigationMenu.Root aria-label="Main" display={{ base: "none", md: "flex" }}>
      <NavigationMenu.List>
        <NavigationMenu.Indicator />
        <Section value="components" label="Experiments" href="/components" current={pathname.startsWith("/components")}>
          <NavigationMenu.Content w="sm">
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
          </NavigationMenu.Content>
        </Section>
        <NavigationMenu.Item value="blocks">
          <NavigationMenu.Trigger asChild data-current={pathname.startsWith("/blocks") ? "" : undefined}>
            <Link href="/blocks">Blocks</Link>
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
        <Section value="ds" label="DS" href="/ds/components" current={pathname.startsWith("/ds")}>
          <NavigationMenu.Content w="xs">
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
            <EntryLink
              entry={{
                title: "Styles",
                description: "Style props that extend the design system, like concentric radius.",
                href: "/ds/styles",
              }}
              pathname={pathname}
            />
          </NavigationMenu.Content>
        </Section>
        <Section value="tools" label="Tools" href="/tools" current={pathname.startsWith("/tools")}>
          <NavigationMenu.Content w="sm">
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
          </NavigationMenu.Content>
        </Section>
      </NavigationMenu.List>
      <NavigationMenu.ViewportPositioner align="start">
        <NavigationMenu.Viewport />
      </NavigationMenu.ViewportPositioner>
    </NavigationMenu.Root>
  )
}
