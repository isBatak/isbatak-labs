"use client"

import { ark } from "@ark-ui/react/factory"
import { NavigationMenu as ArkNavigationMenu } from "@ark-ui/react/navigation-menu"
import { ActionItem } from "@isbatak/react-ui/action-item"
import { NavigationMenu } from "@isbatak/react-ui/navigation-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLayoutEffect, useRef, useState, type MouseEvent, type ReactNode } from "react"
import { css } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { Seat, SeatIcon } from "../home/sponsors"
import { Icon, type IconName } from "../ui/icon"
import { LayoutContainer } from "./layout-container"
import { SPONSOR_URL } from "./site-links"

export interface NavEntry {
  title: string
  description?: string | undefined
  href: string
  external?: boolean | undefined
  icon?: IconName | undefined
}

type LayoutSize = "default" | "wide"

const viewportClass = css({
  "--height": "var(--viewport-height)",
  w: "full",
  transform: "none",
  bg: "bg",
  borderWidth: "0",
  borderBottomWidth: "1px",
  borderRadius: "none",
  boxShadow: "lg",
  _open: {
    animationName: "expand-height, fade-in",
    animationDuration: "moderate",
    animationTimingFunction: "ease-in-smooth",
  },
  _closed: {
    animationName: "collapse-height, fade-out",
    animationDuration: "normal",
    animationTimingFunction: "ease-in-smooth",
  },
  _motionReduce: { animationName: "fade-in" },
})

const Pill = styled("span", {
  base: {
    position: "absolute",
    zIndex: "-1",
    pointerEvents: "none",
    borderRadius: "l2",
    bg: "bg.muted",
    opacity: "0",
    transitionProperty: "left, width, opacity",
    transitionDuration: "moderate",
    transitionTimingFunction: "ease-in-smooth",
    _open: { opacity: "1" },
    "&[data-instant]": { transitionProperty: "opacity" },
    _motionReduce: { transitionProperty: "opacity" },
  },
})

interface PillRect {
  left: number
  top: number
  width: number
  height: number
}

function getCurrentValue(pathname: string) {
  if (pathname.startsWith("/components")) return "components"
  if (pathname.startsWith("/ds")) return "ds"
  if (pathname.startsWith("/tools")) return "tools"
  if (pathname.startsWith("/blog")) return "blog"
  return ""
}

function NavPill({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [rect, setRect] = useState<PillRect | null>(null)
  const [instant, setInstant] = useState(true)

  useLayoutEffect(() => {
    const list = ref.current?.parentElement
    if (!list || !target) return
    const measure = () => {
      const node = list.querySelector<HTMLElement>(
        `[data-slot=trigger][data-value="${target}"], [data-slot=link][data-value="${target}"]`,
      )
      if (!node) return
      setRect({ left: node.offsetLeft, top: node.offsetTop, width: node.offsetWidth, height: node.offsetHeight })
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(list)
    return () => observer.disconnect()
  }, [target])

  useLayoutEffect(() => {
    if (!rect) return
    const frame = requestAnimationFrame(() => setInstant(false))
    return () => cancelAnimationFrame(frame)
  }, [rect])

  return (
    <Pill
      ref={ref}
      aria-hidden
      data-state={target && rect ? "open" : "closed"}
      data-instant={instant ? "" : undefined}
      style={rect ?? undefined}
    />
  )
}

const Backdrop = styled("div", {
  base: {
    position: "fixed",
    insetX: "0",
    bottom: "0",
    top: "{sizes.header}",
    pointerEvents: "none",
    bg: "bg/40",
    backdropFilter: "blur({blurs.md})",
    opacity: "0",
    transitionProperty: "opacity",
    transitionDuration: "moderate",
    transitionTimingFunction: "ease-in-smooth",
    _open: { opacity: "1" },
  },
})

const LinkGrid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    alignContent: "start",
    gap: "1",
  },
})

const LinkIcon = styled("span", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    boxSize: "9",
    borderWidth: "1px",
    borderRadius: "l2",
    bg: "bg.panel",
    color: "fg.muted",
    transitionProperty: "color, border-color",
    transitionDuration: "fast",
    _groupHover: { color: "fg", borderColor: "border.emphasized" },
    _groupFocusVisible: { color: "fg", borderColor: "border.emphasized" },
  },
})

const LinkText = styled("span", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minW: "0",
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

const ContentLink = styled(ark.a, {
  base: {
    display: "flex",
    alignItems: "flex-start",
    gap: "3",
    p: "3",
    borderRadius: "l2",
    outline: "none",
    transitionProperty: "background",
    transitionDuration: "fast",
    _hover: { bg: "bg.muted" },
    _focusVisible: { bg: "bg.muted" },
    _currentPage: { bg: "bg.muted" },
  },
})

function SponsorCard() {
  return (
    <styled.div display={{ base: "none", lg: "grid" }} w="xs" flexShrink="0">
      <Seat data-open="" href={SPONSOR_URL} target="_blank" rel="noopener">
        <SeatIcon>
          <Icon name="plus" />
        </SeatIcon>
        <styled.span display="block" textStyle="sm">
          Sponsor
          <styled.span display="block" mt="1" color="fg.muted">
            Claim this seat
          </styled.span>
        </styled.span>
      </Seat>
    </styled.div>
  )
}

function FooterAction({ href, label, current }: { href: string; label: string; current: boolean }) {
  return (
    <ArkNavigationMenu.Link asChild current={current}>
      <ActionItem.Root asChild mt="auto">
        <Link href={href}>
          <ActionItem.Label textStyle="sm">{label}</ActionItem.Label>
          <ActionItem.EndElement>
            <Icon name="arrow-right" />
          </ActionItem.EndElement>
        </Link>
      </ActionItem.Root>
    </ArkNavigationMenu.Link>
  )
}

function Panel({ size, footer, children }: { size: LayoutSize | undefined; footer?: ReactNode; children: ReactNode }) {
  return (
    <LayoutContainer size={size} display="flex" gap="8" py="6" ps={{ base: "5", md: "10" }} pe={{ base: "3", md: "8" }}>
      <styled.div flex="1" minW="0" display="flex" flexDirection="column" gap="3">
        <LinkGrid>{children}</LinkGrid>
        {footer}
      </styled.div>
      <SponsorCard />
    </LayoutContainer>
  )
}

function EntryLink({ entry, pathname }: { entry: NavEntry; pathname: string }) {
  const body = (
    <>
      {entry.icon && (
        <LinkIcon>
          <Icon name={entry.icon} />
        </LinkIcon>
      )}
      <LinkText>
        <LinkTitle>
          {entry.title}
          {entry.external && <Icon name="external-link" color="fg.subtle" />}
        </LinkTitle>
        {entry.description && <LinkDescription>{entry.description}</LinkDescription>}
      </LinkText>
    </>
  )

  if (entry.external) {
    return (
      <ContentLink className="group" href={entry.href} target="_blank" rel="noopener">
        {body}
      </ContentLink>
    )
  }

  return (
    <ContentLink asChild className="group" aria-current={pathname === entry.href ? "page" : undefined}>
      <Link href={entry.href}>{body}</Link>
    </ContentLink>
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
    <NavigationMenu.Item value={value} position="static">
      <NavigationMenu.Trigger
        asChild
        data-current={current ? "" : undefined}
        onClick={(event: MouseEvent) => {
          if (event.detail === 0) event.preventDefault()
        }}
      >
        <Link href={href}>
          {label}
          {/* <Icon name="chevron-down" /> */}
        </Link>
      </NavigationMenu.Trigger>
      <NavigationMenu.Content w="full" p="0" px="2">
        {children}
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  )
}

interface HeaderNavProps {
  prototypes: NavEntry[]
  tools: NavEntry[]
  size?: LayoutSize | undefined
}

export function HeaderNav({ prototypes, tools, size }: HeaderNavProps) {
  const pathname = usePathname()
  const [value, setValue] = useState("")
  const currentValue = getCurrentValue(pathname)

  return (
    <NavigationMenu.Root
      aria-label="Main"
      value={value}
      onValueChange={(details) => setValue(details.value)}
      position="static"
      display={{ base: "none", md: "flex" }}
    >
      <NavigationMenu.List>
        <NavPill target={value || currentValue} />
        <Section value="components" label="Experiments" href="/components" current={pathname.startsWith("/components")}>
          <Panel
            size={size}
            footer={<FooterAction href="/components" label="All prototypes" current={pathname === "/components"} />}
          >
            {prototypes.map((entry) => (
              <EntryLink key={entry.href} entry={entry} pathname={pathname} />
            ))}
          </Panel>
        </Section>
        <Section value="ds" label="DS" href="/ds/components" current={pathname.startsWith("/ds")}>
          <Panel size={size}>
            <EntryLink
              entry={{
                title: "Installation",
                description: "Add @isbatak/panda-ds to Panda CSS and copy in the components you need.",
                href: "/ds/installation",
                icon: "download",
              }}
              pathname={pathname}
            />
            <EntryLink
              entry={{
                title: "Components",
                description: "Ark UI components styled with the design system recipes.",
                href: "/ds/components",
                icon: "components",
              }}
              pathname={pathname}
            />
            <EntryLink
              entry={{
                title: "Styles",
                description: "Style props that extend the design system, like concentric radius.",
                href: "/ds/styles",
                icon: "color-picker",
              }}
              pathname={pathname}
            />
          </Panel>
        </Section>
        <Section value="tools" label="Tools" href="/tools" current={pathname.startsWith("/tools")}>
          <Panel size={size} footer={<FooterAction href="/tools" label="All tools" current={pathname === "/tools"} />}>
            {tools.map((entry) => (
              <EntryLink key={entry.href} entry={entry} pathname={pathname} />
            ))}
          </Panel>
        </Section>
        <NavigationMenu.Item value="blog" position="static">
          <NavigationMenu.Link asChild value="blog" current={pathname.startsWith("/blog")}>
            <Link href="/blog">Blog</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <Backdrop aria-hidden data-state={value ? "open" : "closed"} />
      <NavigationMenu.ViewportPositioner align="start" right="0" pt="0">
        <NavigationMenu.Viewport className={viewportClass} />
      </NavigationMenu.ViewportPositioner>
    </NavigationMenu.Root>
  )
}
