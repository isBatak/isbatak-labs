import { useState } from "react"
import { css } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { toPresetSource } from "../lib/export"
import { generateCss } from "../lib/css"
import { PartStylePanel } from "./part-style-panel"
import { ColorPanel, OverviewPanel, RadiusPanel, ShadowPanel, SpacingPanel, TypographyPanel } from "./token-panels"
import { Muted, PanelSection, Toggle, ToggleItem } from "./ui"
import type { Studio } from "./use-studio"

type Tab = "style" | "code" | "lint"

export function Inspector(props: { studio: Studio }) {
  const [tab, setTab] = useState<Tab>("style")

  return (
    <styled.aside
      display="flex"
      flexDirection="column"
      minH="0"
      borderLeftWidth="1px"
      borderColor="border.muted"
      bg="bg"
    >
      <styled.div display="flex" alignItems="center" h="12" px="3" borderBottomWidth="1px" borderColor="border.muted">
        <Toggle aria-label="Inspector" value={tab} onChange={setTab}>
          <ToggleItem value="style">Style</ToggleItem>
          <ToggleItem value="code">Code</ToggleItem>
          <ToggleItem value="lint">
            Lint
            <LintCount studio={props.studio} />
          </ToggleItem>
        </Toggle>
      </styled.div>
      <styled.div flex="1" minH="0" overflowY="auto" pb="8">
        {tab === "style" && <StyleTab studio={props.studio} />}
        {tab === "code" && <CodeTab studio={props.studio} />}
        {tab === "lint" && <LintTab studio={props.studio} />}
      </styled.div>
    </styled.aside>
  )
}

function StyleTab(props: { studio: Studio }) {
  const { page } = props.studio.state
  if (page.kind === "component") return <PartStylePanel studio={props.studio} />
  if (page.kind === "components") return <OverviewPanel studio={props.studio} />
  switch (page.id) {
    case "color":
      return <ColorPanel studio={props.studio} />
    case "typography":
      return <TypographyPanel studio={props.studio} />
    case "radius":
      return <RadiusPanel studio={props.studio} />
    case "shadow":
      return <ShadowPanel studio={props.studio} />
    case "spacing":
      return <SpacingPanel studio={props.studio} />
    default:
      return <OverviewPanel studio={props.studio} />
  }
}

export const codeBlock = css({
  fontFamily: "mono",
  fontSize: "11px",
  lineHeight: "1.6",
  whiteSpace: "pre",
  overflow: "auto",
  bg: "bg.subtle",
  borderWidth: "1px",
  borderColor: "border.muted",
  borderRadius: "md",
  p: "3",
  maxH: "96",
})

function CodeTab(props: { studio: Studio }) {
  const { doc, themeName } = props.studio.state
  return (
    <>
      <PanelSection title="Panda preset">
        <Muted>Add it to `presets` in a Panda config that uses @isbatak/panda-ds.</Muted>
        <pre className={codeBlock}>{toPresetSource(doc, themeName)}</pre>
      </PanelSection>
      <PanelSection title="Generated CSS">
        <pre className={codeBlock}>{generateCss(doc) || "/* No edits yet */"}</pre>
      </PanelSection>
    </>
  )
}

function LintCount(props: { studio: Studio }) {
  const failing = props.studio.state.lint.filter((result) => result.ratio < 4.5).length
  if (!failing) return null
  return (
    <styled.span px="1" minW="4" h="4" borderRadius="full" bg="red.500" color="white" fontSize="10px" lineHeight="16px">
      {failing}
    </styled.span>
  )
}

function LintTab(props: { studio: Studio }) {
  const { lint, colorMode } = props.studio.state
  return (
    <PanelSection title={`Contrast · ${colorMode === "_dark" ? "dark" : "light"} mode`}>
      <Muted>WCAG contrast of the color pairs components use. Body text needs 4.5:1 (AA).</Muted>
      {lint.map((result) => (
        <styled.div key={result.id} display="flex" alignItems="center" gap="2" textStyle="xs">
          <styled.span
            w="6"
            h="6"
            flexShrink="0"
            borderRadius="sm"
            borderWidth="1px"
            borderColor="border"
            display="grid"
            placeItems="center"
            fontWeight="semibold"
            style={{ background: result.background, color: result.foreground }}
          >
            Aa
          </styled.span>
          <styled.span flex="1" truncate title={result.label}>
            {result.label}
          </styled.span>
          <styled.span fontFamily="mono">{result.ratio.toFixed(2)}</styled.span>
          <styled.span
            w="9"
            textAlign="center"
            borderRadius="sm"
            fontSize="10px"
            fontWeight="semibold"
            bg={
              result.ratio >= 7
                ? "green.100"
                : result.ratio >= 4.5
                  ? "blue.100"
                  : result.ratio >= 3
                    ? "orange.100"
                    : "red.100"
            }
            color={
              result.ratio >= 7
                ? "green.800"
                : result.ratio >= 4.5
                  ? "blue.800"
                  : result.ratio >= 3
                    ? "orange.800"
                    : "red.800"
            }
          >
            {result.ratio >= 7 ? "AAA" : result.ratio >= 4.5 ? "AA" : result.ratio >= 3 ? "AA18" : "Fail"}
          </styled.span>
        </styled.div>
      ))}
    </PanelSection>
  )
}
