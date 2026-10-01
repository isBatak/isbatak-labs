import { Badge } from "@isbatak/react-ui/badge"
import { styled } from "styled-system/jsx"

import { DocLink } from "../docs/doc-link"
import { ExampleThumbnail } from "../examples/example-view"
import { Icon } from "../ui/icon"

// Inline `styled()` configs: don't pass style props to these, the Panda transformer would drop the base styles.

const Card = styled(DocLink, {
  base: {
    "--card-inset": "{spacing.2}",
    display: "flex",
    flexDirection: "column",
    p: "var(--card-inset)",
    borderRadius: "l3",
    borderWidth: "1px",
    bg: "bg",
    outline: "none",
    transitionProperty: "border-color, box-shadow, translate",
    transitionDuration: "moderate",
    _hover: { borderColor: "border.emphasized", shadow: "md", translate: "0 -2px" },
    _focusVisible: { outline: "2px solid", outlineColor: "colorPalette.focusRing", outlineOffset: "2px" },
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
  href: string
  title: string
  description?: string | undefined
  category: string
  original?: boolean | undefined
  status?: "new" | "beta" | "stable" | undefined
  example?: string | undefined
}

export function ComponentCard({ href, title, description, category, original, status, example }: ComponentCardProps) {
  return (
    <Card href={href} className="group">
      <Header>
        <Category>{category}</Category>
        <Action>
          View component
          <Icon name="chevron-right" />
        </Action>
      </Header>
      <Preview>{example && <ExampleThumbnail id={example} />}</Preview>
      <Body>
        <styled.div display="flex" alignItems="center" gap="2" minW="0">
          <Title>{title}</Title>
          {original && (
            <Badge colorPalette="purple" flexShrink="0">
              Original
            </Badge>
          )}
          {status === "new" && (
            <Badge colorPalette="green" flexShrink="0">
              New
            </Badge>
          )}
          {status === "beta" && (
            <Badge colorPalette="orange" flexShrink="0">
              Beta
            </Badge>
          )}
        </styled.div>
        {description && <Description>{description}</Description>}
      </Body>
    </Card>
  )
}
