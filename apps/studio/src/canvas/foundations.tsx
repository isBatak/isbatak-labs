import { Badge } from "@isbatak/react-ui/badge"
import { Button } from "@isbatak/react-ui/button"
import { css, cx } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { Card, Input, Kbd } from "../demos/primitives"
import type { ColorMode, StudioDoc } from "../lib/doc"
import { type TokenEntry, listTokens } from "../lib/theme-meta"
import { Row, Section, Stack } from "./layout"

export interface FoundationProps {
  doc: StudioDoc
  colorMode: ColorMode
  selectedToken: string | undefined
  onSelectToken: (token: string) => void
}

const groupBy = (entries: TokenEntry[]) => {
  const groups = new Map<string, TokenEntry[]>()
  for (const entry of entries) {
    const group = entry.name.includes(".") ? entry.name.split(".")[0]! : entry.name
    groups.set(group, [...(groups.get(group) ?? []), entry])
  }
  return groups
}

/** The value shown under a swatch: the override if there is one, otherwise the theme definition */
export function tokenValue(entry: TokenEntry, doc: StudioDoc, colorMode: ColorMode) {
  const key = `${entry.category}.${entry.name}`
  if (entry.semantic) {
    const override = doc.semanticTokens[key]?.[colorMode]
    if (override) return override
    return typeof entry.value === "string" ? entry.value : (entry.value[colorMode] ?? entry.value.base ?? "")
  }
  return doc.tokens[key] ?? String(entry.value)
}

const isOverridden = (entry: TokenEntry, doc: StudioDoc) =>
  `${entry.category}.${entry.name}` in (entry.semantic ? doc.semanticTokens : doc.tokens)

const swatchCard = css({
  display: "flex",
  flexDirection: "column",
  textAlign: "start",
  borderRadius: "lg",
  overflow: "hidden",
  borderWidth: "1px",
  borderColor: "border.muted",
  bg: "bg",
  cursor: "pointer",
  transition: "box-shadow 0.15s",
  _hover: { shadow: "sm" },
})

const selectedCard = css({ outline: "2px solid #3b82f6", outlineOffset: "2px" })

function Swatch(props: FoundationProps & { entry: TokenEntry }) {
  const { entry } = props
  const key = `${entry.category}.${entry.name}`
  return (
    <button
      type="button"
      className={cx(swatchCard, props.selectedToken === key && selectedCard)}
      onClick={() => props.onSelectToken(key)}
    >
      <styled.span display="block" h="16" style={{ background: `var(${entry.cssVar})` }} />
      <styled.span display="flex" flexDirection="column" gap="0.5" px="3" py="2">
        <styled.span textStyle="xs" fontWeight="medium" display="flex" alignItems="center" gap="1.5">
          {entry.name}
          {isOverridden(entry, props.doc) && <styled.span w="1.5" h="1.5" borderRadius="full" bg="blue.500" />}
        </styled.span>
        <styled.span textStyle="2xs" fontFamily="mono" color="fg.muted" truncate>
          {tokenValue(entry, props.doc, props.colorMode)}
        </styled.span>
      </styled.span>
    </button>
  )
}

function SwatchGrid(props: FoundationProps & { entries: TokenEntry[] }) {
  return (
    <styled.div display="grid" gridTemplateColumns="repeat(auto-fill, minmax(8.5rem, 1fr))" gap="3">
      {props.entries.map((entry) => (
        <Swatch key={entry.name} {...props} entry={entry} />
      ))}
    </styled.div>
  )
}

function WideSection(props: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <styled.section display="flex" flexDirection="column" gap="3">
      <styled.header display="flex" flexDirection="column" gap="0.5">
        <styled.h2 textStyle="sm" fontWeight="semibold">
          {props.title}
        </styled.h2>
        {props.description && (
          <styled.p textStyle="xs" color="fg.muted">
            {props.description}
          </styled.p>
        )}
      </styled.header>
      {props.children}
    </styled.section>
  )
}

export function ColorPage(props: FoundationProps) {
  const semantic = groupBy(listTokens("colors", { semantic: true }))
  const palettes = groupBy(
    listTokens("colors", { semantic: false }).filter((entry) => /^[a-z]+\.\d+$/.test(entry.name)),
  )
  return (
    <>
      <WideSection title="Background" description="Surfaces that pages, panels and components sit on.">
        <SwatchGrid {...props} entries={semantic.get("bg") ?? []} />
      </WideSection>
      <WideSection title="Foreground" description="Text and icon colors, from primary content to subtle hints.">
        <SwatchGrid {...props} entries={semantic.get("fg") ?? []} />
      </WideSection>
      <WideSection title="Border" description="Hairlines, dividers and field outlines.">
        <SwatchGrid {...props} entries={semantic.get("border") ?? []} />
      </WideSection>
      {Array.from(semantic.entries())
        .filter(([group]) => group !== "bg" && group !== "fg" && group !== "border")
        .map(([group, entries]) => (
          <WideSection key={group} title={`Palette · ${group}`} description="Used through colorPalette.* in recipes.">
            <SwatchGrid {...props} entries={entries} />
          </WideSection>
        ))}
      {Array.from(palettes.entries()).map(([group, entries]) => (
        <WideSection key={group} title={`Scale · ${group}`}>
          <SwatchGrid {...props} entries={entries} />
        </WideSection>
      ))}
    </>
  )
}

export function TypographyPage(_props: FoundationProps) {
  return (
    <>
      <Section title="Font families">
        <Stack gap="6">
          {listTokens("fonts").map((entry) => (
            <Stack key={entry.name} gap="1">
              <styled.span textStyle="xs" color="fg.muted">
                {entry.name}
              </styled.span>
              <styled.p textStyle="2xl" style={{ fontFamily: `var(${entry.cssVar})` }}>
                The quick brown fox jumps over the lazy dog
              </styled.p>
            </Stack>
          ))}
        </Stack>
      </Section>
      <Section title="Font sizes">
        <Stack gap="3">
          {listTokens("fontSizes").map((entry) => (
            <Row key={entry.name} gap="6" flexWrap="nowrap">
              <styled.span w="12" textStyle="xs" color="fg.muted" flexShrink="0">
                {entry.name}
              </styled.span>
              <styled.span truncate style={{ fontSize: `var(${entry.cssVar})`, lineHeight: 1.2 }}>
                Panda Studio
              </styled.span>
            </Row>
          ))}
        </Stack>
      </Section>
      <Section title="Font weights">
        <Stack gap="2">
          {listTokens("fontWeights").map((entry) => (
            <Row key={entry.name} gap="6">
              <styled.span w="20" textStyle="xs" color="fg.muted">
                {entry.name}
              </styled.span>
              <styled.span textStyle="lg" style={{ fontWeight: `var(${entry.cssVar})` }}>
                Design tokens
              </styled.span>
            </Row>
          ))}
        </Stack>
      </Section>
      <Section title="In context">
        <Card.Root>
          <Card.Header>
            <Card.Title>Typography in components</Card.Title>
            <Card.Description>Headings, body copy and controls share the same scale.</Card.Description>
          </Card.Header>
          <Card.Footer>
            <Button>Primary action</Button>
            <Button variant="outline">Secondary</Button>
          </Card.Footer>
        </Card.Root>
      </Section>
    </>
  )
}

export function RadiusPage(_props: FoundationProps) {
  const radii = listTokens("radii")
  return (
    <>
      <Section title="Scale">
        <styled.div display="grid" gridTemplateColumns="repeat(auto-fill, minmax(5.5rem, 1fr))" gap="4">
          {radii.map((entry) => (
            <Stack key={`${entry.name}-${entry.semantic}`} gap="1.5" alignItems="center">
              <styled.div
                w="16"
                h="16"
                bg="bg.emphasized"
                borderWidth="1px"
                borderColor="border"
                style={{ borderRadius: `var(${entry.cssVar})` }}
              />
              <styled.span textStyle="xs" color={entry.semantic ? "fg" : "fg.muted"}>
                {entry.name}
              </styled.span>
            </Stack>
          ))}
        </styled.div>
      </Section>
      <Section title="In context" description="Components use the l1, l2 and l3 levels">
        <Stack>
          <Row>
            <Button>Button</Button>
            <Button variant="outline">Outline</Button>
            <Badge>Badge</Badge>
            <Kbd>⌘ K</Kbd>
          </Row>
          <Input placeholder="Input" />
          <Card.Root>
            <Card.Header>
              <Card.Title>Card</Card.Title>
              <Card.Description>Cards use the l3 radius.</Card.Description>
            </Card.Header>
          </Card.Root>
        </Stack>
      </Section>
    </>
  )
}

export function ShadowPage(props: FoundationProps) {
  return (
    <Section title="Shadows">
      <styled.div display="grid" gridTemplateColumns="repeat(auto-fill, minmax(8rem, 1fr))" gap="6">
        {listTokens("shadows").map((entry) => (
          <button
            type="button"
            key={entry.name}
            className={cx(
              css({ h: "24", borderRadius: "l3", bg: "bg.panel", textStyle: "xs", cursor: "pointer" }),
              props.selectedToken === `shadows.${entry.name}` && selectedCard,
            )}
            style={{ boxShadow: `var(${entry.cssVar})` }}
            onClick={() => props.onSelectToken(`shadows.${entry.name}`)}
          >
            {entry.name}
          </button>
        ))}
      </styled.div>
    </Section>
  )
}

export function SpacingPage(_props: FoundationProps) {
  return (
    <Section title="Spacing">
      <Stack gap="2">
        {listTokens("spacing").map((entry) => (
          <Row key={entry.name} gap="4" flexWrap="nowrap">
            <styled.span w="10" textStyle="xs" color="fg.muted" flexShrink="0">
              {entry.name}
            </styled.span>
            <styled.div h="3" bg="blue.500" borderRadius="xs" style={{ width: `var(${entry.cssVar})` }} />
          </Row>
        ))}
      </Stack>
    </Section>
  )
}
