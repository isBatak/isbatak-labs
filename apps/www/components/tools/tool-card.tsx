import type { Tool } from "#site/content"
import { Badge } from "@isbatak/react-ui/badge"
import Link from "next/link"
import type { ComponentProps } from "react"
import { styled } from "styled-system/jsx"

import { Icon, type IconName } from "../ui/icon"

const itemStyles = {
  display: "flex",
  alignItems: "flex-start",
  gap: "5",
  p: "6",
  borderRadius: "l3",
  borderWidth: "1px",
  borderColor: "transparent",
  outline: "none",
  transitionProperty: "background, border-color, box-shadow, translate",
  transitionDuration: "moderate",
  _hover: { bg: "bg", borderColor: "border.emphasized", shadow: "md", translate: "0 -2px" },
  _focusVisible: { outline: "2px solid", outlineColor: "colorPalette.focusRing", outlineOffset: "2px" },
} as const

const InternalItem = styled(Link, { base: itemStyles }, { defaultProps: { prefetch: true } })
const ExternalItem = styled("a", { base: itemStyles })

const Glyph = styled("span", {
  base: {
    flexShrink: "0",
    mt: "0.5",
    color: "colorPalette.solid",
  },
  variants: {
    palette: {
      gray: { colorPalette: "gray" },
      purple: { colorPalette: "purple" },
      teal: { colorPalette: "teal" },
      blue: { colorPalette: "blue" },
      orange: { colorPalette: "orange" },
      pink: { colorPalette: "pink" },
    },
  },
  defaultVariants: {
    palette: "gray",
  },
})

type Palette = NonNullable<ComponentProps<typeof Glyph>["palette"]>

const Title = styled("h2", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2",
    textStyle: "xl",
    fontWeight: "medium",
    letterSpacing: "tight",
  },
})

const Description = styled("p", {
  base: {
    mt: "1.5",
    textStyle: "md",
    lineHeight: "1.6",
    color: "fg.muted",
    textWrap: "pretty",
  },
})

function ItemBody({ tool }: { tool: Tool }) {
  return (
    <>
      <Glyph palette={tool.color as Palette}>
        {tool.logo ? (
          <styled.img src={tool.logo} alt="" boxSize="8" objectFit="contain" />
        ) : (
          <Icon name={tool.icon as IconName} size="2xl" />
        )}
      </Glyph>
      <styled.div minW="0">
        <Title>
          {tool.title}
          {tool.status === "new" && <Badge colorPalette="green">New</Badge>}
          {tool.status === "beta" && <Badge colorPalette="orange">Beta</Badge>}
          {tool.external && <Icon name="arrow-up-right" color="fg.subtle" />}
        </Title>
        <Description>{tool.description}</Description>
      </styled.div>
    </>
  )
}

export function ToolCard({ tool }: { tool: Tool }) {
  if (tool.external) {
    return (
      <ExternalItem href={tool.permalink} target="_blank" rel="noopener">
        <ItemBody tool={tool} />
      </ExternalItem>
    )
  }

  return (
    <InternalItem href={tool.permalink}>
      <ItemBody tool={tool} />
    </InternalItem>
  )
}
