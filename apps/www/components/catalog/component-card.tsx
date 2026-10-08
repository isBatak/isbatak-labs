import Link from "next/link"
import type { ComponentProps } from "react"
import { styled } from "styled-system/jsx"

import { demos } from "../ds-demos"
import { DocLink } from "../docs/doc-link"
import { ExampleThumbnail } from "../examples/example-view"
import { Icon } from "../ui/icon"

// Inline `styled()` configs: don't pass style props to these, the Panda transformer would drop the base styles.

function ComponentLink({ prototype, ...props }: ComponentProps<typeof Link> & { href: string; prototype: boolean }) {
  return prototype ? <DocLink {...props} /> : <Link prefetch {...props} />
}

const Card = styled("article", {
  base: {
    "--card-inset": "{spacing.2}",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    p: "var(--card-inset)",
    borderRadius: "l3",
    borderWidth: "1px",
    bg: "bg",
    transitionProperty: "border-color, box-shadow, translate",
    transitionDuration: "moderate",
    _hover: { borderColor: "border.emphasized", shadow: "md", translate: "0 -2px" },
    "&:has(a:focus-visible)": { outline: "2px solid", outlineColor: "colorPalette.focusRing", outlineOffset: "2px" },
  },
})

const CardLink = styled(ComponentLink, {
  base: {
    outline: "none",
    _after: { content: '""', position: "absolute", inset: "0", zIndex: "1", borderRadius: "l3" },
  },
})

const Header = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3",
    px: "2",
    pt: "1",
    pb: "2.5",
    textStyle: "sm",
  },
})

const Category = styled("span", {
  base: {
    minW: "0",
    truncate: true,
    color: "fg.subtle",
  },
})

const Action = styled("span", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "1",
    flexShrink: "0",
    fontWeight: "medium",
    color: "fg.muted",
    transitionProperty: "color",
    transitionDuration: "fast",
    _groupHover: { color: "fg" },
  },
})

const Preview = styled("div", {
  base: {
    position: "relative",
    display: "grid",
    placeItems: "center",
    height: "64",
    overflow: "hidden",
    borderRadius: "max(token(radii.l1), calc(token(radii.l3) - var(--card-inset)))",
    borderWidth: "1px",
    borderStyle: "dashed",
  },
})

const Body = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1",
    px: "2",
    pt: "3.5",
    pb: "2",
  },
})

const Title = styled("h2", {
  base: {
    minW: "0",
    truncate: true,
    textStyle: "lg",
    fontWeight: "medium",
    letterSpacing: "tight",
  },
})

const Description = styled("p", {
  base: {
    textStyle: "sm",
    color: "fg.muted",
    truncate: true,
  },
})

export interface ComponentCardProps {
  slug: string
  href: string
  title: string
  description?: string | undefined
  category: string
  prototype: boolean
  example?: string | undefined
}

function DemoThumbnail({ slug }: { slug: string }) {
  const Demo = demos[slug]
  if (!Demo) return null

  return (
    <styled.div display="contents" inert aria-hidden>
      <Demo />
    </styled.div>
  )
}

export function ComponentCard(props: ComponentCardProps) {
  const { slug, href, title, description, category, prototype, example } = props

  return (
    <Card className="group">
      <Header>
        <Category>{category}</Category>
        <Action>
          View component
          <Icon name="chevron-right" />
        </Action>
      </Header>
      <Preview>{prototype ? example && <ExampleThumbnail id={example} /> : <DemoThumbnail slug={slug} />}</Preview>
      <Body>
        <Title>
          <CardLink href={href} prototype={prototype}>
            {title}
          </CardLink>
        </Title>
        {description && <Description>{description}</Description>}
      </Body>
    </Card>
  )
}
