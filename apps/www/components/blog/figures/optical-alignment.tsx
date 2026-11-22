"use client"

import { Button } from "@isbatak/react-ui/button"
import { EndIcon, StartIcon } from "@isbatak/react-ui/icon"
import { Kbd } from "@isbatak/react-ui/kbd"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { Span } from "@isbatak/react-ui/span"
import { useState } from "react"
import { css, cx } from "styled-system/css"
import { HStack, VStack } from "styled-system/jsx"

import { Caliper } from "../../ui/caliper"
import { Icon } from "../../ui/icon"

type Alignment = "equal" | "optical"

const md = {
  border: 1,
  padding: 16,
  height: 40,
  icon: 20,
  iconTop: 10,
  offset: 4,
}
const plusInk = (md.icon * 5.25) / 24
const arrowInk = (md.icon * 4.25) / 24

const px = (value: number) => `${Number(value.toFixed(1))}px`
const roundPx = (value: number) => `${Math.round(value)}px`

const iconMotion = css({
  transitionProperty: "margin",
  transitionDuration: "moderate",
  transitionTimingFunction: "default",
})

const equalIcon = css({ ms: "0", me: "0" })

function NewProjectButton({ alignment }: { alignment: Alignment }) {
  return (
    <Button variant="outline" colorPalette="gray" data-hover tabIndex={-1}>
      <StartIcon asChild className={cx(iconMotion, alignment === "equal" && equalIcon)}>
        <Icon name="plus" />
      </StartIcon>
      New project
    </Button>
  )
}

export function OpticalAlignmentFigure() {
  const [alignment, setAlignment] = useState<Alignment>("equal")
  const boxStart = md.border + md.padding - (alignment === "equal" ? 0 : md.offset)
  const inkGap = boxStart - md.border + plusInk
  const palette = alignment === "equal" ? "red" : "blue"

  return (
    <Caliper.Figure caption="The md Button with a plus icon. Equal padding puts 16px before the icon's box, but the glyph starts about 4px inside it. The recipe pulls the icon out by a fixed 4px, close to that empty space.">
      <Caliper.Frame magnify="fit" annotated>
        <Caliper.Subject>
          <NewProjectButton alignment={alignment} />
        </Caliper.Subject>
        <Caliper.Outline spanX={{ start: boxStart, size: md.icon }} spanY={{ start: md.iconTop, size: md.icon }} />
        <Caliper.Hatch
          colorPalette={palette}
          spanX={{ start: boxStart, size: plusInk }}
          spanY={{ start: md.iconTop, size: md.icon }}
        />
        <Caliper.Dimension placement="top" reach={md.iconTop} span={{ start: md.border, size: boxStart - md.border }}>
          <Caliper.DimensionLabel>{px(boxStart - md.border)}</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension placement="top" reach={md.iconTop} span={{ end: md.border, size: md.padding }}>
          <Caliper.DimensionLabel>{px(md.padding)}</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Callout
          colorPalette={palette}
          anchors={[{ x: boxStart + plusInk / 2, y: md.height / 2 }]}
          to={{ x: -6, y: md.height / 2 }}
        >
          <Caliper.CalloutLabel>{roundPx(plusInk)}</Caliper.CalloutLabel>
        </Caliper.Callout>
        <Caliper.Dimension colorPalette={palette} reach={md.iconTop} span={{ start: md.border, size: inkGap }}>
          <Caliper.DimensionLabel>{roundPx(inkGap)}</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension colorPalette={palette} reach={md.iconTop} span={{ end: md.border, size: md.padding }}>
          <Caliper.DimensionLabel>{px(md.padding)}</Caliper.DimensionLabel>
        </Caliper.Dimension>
      </Caliper.Frame>

      <Caliper.Legend>
        <Caliper.LegendItem>
          <Caliper.LegendSwatch kind="dashed" />
          Icon box
        </Caliper.LegendItem>
        <Caliper.LegendItem>
          <Caliper.LegendSwatch kind="hatch" colorPalette={palette} />
          Empty space inside the icon
        </Caliper.LegendItem>
      </Caliper.Legend>

      <SegmentGroup.Root
        size="sm"
        orientation="horizontal"
        value={alignment}
        onValueChange={(details) => setAlignment(details.value === "optical" ? "optical" : "equal")}
        aria-label="Alignment"
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="equal" h="auto" py="2" flexDirection="column" gap="0.5">
          <SegmentGroup.ItemText>Equal</SegmentGroup.ItemText>
          <Span color="fg.muted" fontWeight="normal">
            No pull
          </Span>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="optical" h="auto" py="2" flexDirection="column" gap="0.5">
          <SegmentGroup.ItemText>Optical</SegmentGroup.ItemText>
          <Span color="fg.muted" fontWeight="normal">
            {px(md.offset)} pull
          </Span>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    </Caliper.Figure>
  )
}

export function IconGridFigure() {
  return (
    <Caliper.Figure caption="The plus and the arrow on our 24-unit grid. The hatched band is the 2-unit trim area every glyph stays out of; the keylines inside it are the shapes glyphs are drawn to. The plus's ink starts 5.25 units in, the arrow's tip 4.25 units from the end.">
      <HStack gap="12" flexWrap="wrap" justifyContent="center">
        <Caliper.Frame magnify={8} annotated>
          <Caliper.Subject>
            <Icon name="plus" size="lg" />
          </Caliper.Subject>
          <Caliper.IconGrid colorPalette="red" />
          <Caliper.Dimension placement="top" reach={12} span={{ start: 0, size: 5.25 }}>
            <Caliper.DimensionLabel>5.25</Caliper.DimensionLabel>
          </Caliper.Dimension>
        </Caliper.Frame>
        <Caliper.Frame magnify={8} annotated>
          <Caliper.Subject>
            <Icon name="arrow-right" size="lg" />
          </Caliper.Subject>
          <Caliper.IconGrid colorPalette="red" />
          <Caliper.Dimension placement="top" reach={12} span={{ end: 0, size: 4.25 }}>
            <Caliper.DimensionLabel>4.25</Caliper.DimensionLabel>
          </Caliper.Dimension>
        </Caliper.Frame>
      </HStack>
    </Caliper.Figure>
  )
}

export function OpticalComparisonFigure() {
  const inkY = md.height / 2
  const labelX = -24
  const dotX = md.border + 5

  return (
    <Caliper.Figure caption="The same two buttons at 2×. The top one looks heavier on the left; the bottom one looks centered.">
      <Caliper.Frame magnify={2}>
        <Caliper.Subject>
          <NewProjectButton alignment="equal" />
        </Caliper.Subject>
        <Caliper.Callout anchors={[{ x: dotX, y: inkY }]} to={{ x: labelX, y: inkY }}>
          <Caliper.CalloutLabel maxW="40">
            <Caliper.CalloutTitle>equal</Caliper.CalloutTitle>
            <Caliper.CalloutDescription>no pull</Caliper.CalloutDescription>
          </Caliper.CalloutLabel>
        </Caliper.Callout>
      </Caliper.Frame>
      <Caliper.Frame magnify={2}>
        <Caliper.Subject>
          <NewProjectButton alignment="optical" />
        </Caliper.Subject>
        <Caliper.Callout colorPalette="blue" anchors={[{ x: dotX, y: inkY }]} to={{ x: labelX, y: inkY }}>
          <Caliper.CalloutLabel maxW="40">
            <Caliper.CalloutTitle>optical</Caliper.CalloutTitle>
            <Caliper.CalloutDescription>{px(md.offset)} pull</Caliper.CalloutDescription>
          </Caliper.CalloutLabel>
        </Caliper.Callout>
      </Caliper.Frame>
    </Caliper.Figure>
  )
}

export function EndIconFigure() {
  const [width, setWidth] = useState(0)
  const boxEnd = md.border + md.padding - md.offset
  const inkGap = boxEnd - md.border + arrowInk

  return (
    <Caliper.Figure caption="EndIcon mirrors it: the arrow's tip sits about 4px inside its box, so the recipe pulls the box 4px toward the edge and the ink lands 16px from it.">
      <Caliper.Frame magnify="fit" annotated>
        <Caliper.Subject>
          <Button
            ref={(node) => setWidth(node?.offsetWidth ?? 0)}
            variant="outline"
            colorPalette="gray"
            data-hover
            tabIndex={-1}
          >
            Continue
            <EndIcon asChild>
              <Icon name="arrow-right" />
            </EndIcon>
          </Button>
        </Caliper.Subject>
        <Caliper.Dimension placement="left" extension="none" distance="sm">
          <Caliper.DimensionLabel>{px(md.height)}</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Outline spanX={{ end: boxEnd, size: md.icon }} spanY={{ start: md.iconTop, size: md.icon }} />
        <Caliper.Hatch
          colorPalette="blue"
          spanX={{ end: boxEnd, size: arrowInk }}
          spanY={{ start: md.iconTop, size: md.icon }}
        />
        <Caliper.Dimension placement="top" reach={md.iconTop} span={{ start: md.border, size: md.padding }}>
          <Caliper.DimensionLabel>{px(md.padding)}</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension placement="top" reach={md.iconTop} span={{ end: md.border, size: boxEnd - md.border }}>
          <Caliper.DimensionLabel>{px(boxEnd - md.border)}</Caliper.DimensionLabel>
        </Caliper.Dimension>
        {width > 0 && (
          <Caliper.Callout
            colorPalette="blue"
            anchors={[{ x: width - boxEnd - arrowInk / 2, y: md.height / 2 }]}
            to={{ x: width + 6, y: md.height / 2 }}
          >
            <Caliper.CalloutLabel>{roundPx(arrowInk)}</Caliper.CalloutLabel>
          </Caliper.Callout>
        )}
        <Caliper.Dimension colorPalette="blue" reach={md.iconTop} span={{ start: md.border, size: md.padding }}>
          <Caliper.DimensionLabel>{px(md.padding)}</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension colorPalette="blue" reach={md.iconTop} span={{ end: md.border, size: inkGap }}>
          <Caliper.DimensionLabel>{roundPx(inkGap)}</Caliper.DimensionLabel>
        </Caliper.Dimension>
      </Caliper.Frame>
    </Caliper.Figure>
  )
}

type Pull = "fixed" | "ink"

const guide = css({ borderRightWidth: "0", translate: "[-0.5px 0]" })

const centerGuide = css({ borderColor: { base: "yellow.600", _dark: "yellow.400" } })

const inkShift = (units: number, pull: Pull) => (pull === "ink" ? (md.icon * units) / 24 - md.offset : 0)

const inkOffset = (units: number, pull: Pull) => (pull === "ink" ? px(inkShift(units, pull)) : undefined)

export function StackedButtonsFigure() {
  const [pull, setPull] = useState<Pull>("ink")
  const stackHeight = md.height * 3 + 16
  const inkX = md.border + md.padding
  const labelX = md.border + md.padding - md.offset + md.icon + 8
  const iconCenterX = md.border + md.padding - md.offset + md.icon / 2
  const iconGap = 8
  const rowStep = md.height + 8
  const plusX = iconCenterX - md.icon / 2 - inkShift(5.25, pull)
  const shareX = iconCenterX - md.icon / 2 - inkShift(2.25, pull)
  const settingsX = iconCenterX - md.icon / 2 - inkShift(1.25, pull)

  return (
    <Caliper.Figure caption="Three md Buttons stacked, left aligned. Pull each icon to its own ink and the icons line up, but the labels drift. With the fixed pull the labels share one edge and the icons' ink lands up to 3.333px apart.">
      <Caliper.Frame magnify={2}>
        <Caliper.Subject>
          <VStack gap="2" alignItems="stretch" w="60">
            <Button variant="outline" colorPalette="gray" justifyContent="flex-start" data-hover tabIndex={-1}>
              <StartIcon asChild offset={inkOffset(5.25, pull)} className={iconMotion}>
                <Icon name="plus" />
              </StartIcon>
              New project
            </Button>
            <Button variant="outline" colorPalette="gray" justifyContent="flex-start" data-hover tabIndex={-1}>
              <StartIcon asChild offset={inkOffset(2.25, pull)} className={iconMotion}>
                <Icon name="share" />
              </StartIcon>
              Share
            </Button>
            <Button variant="outline" colorPalette="gray" justifyContent="flex-start" data-hover tabIndex={-1}>
              <StartIcon asChild offset={inkOffset(1.25, pull)} className={iconMotion}>
                <Icon name="settings" />
              </StartIcon>
              Settings
            </Button>
          </VStack>
        </Caliper.Subject>
        <Caliper.Outline
          className={guide}
          colorPalette="red"
          spanX={{ start: inkX, size: 0 }}
          spanY={{ start: -8, size: stackHeight + 16 }}
        />
        <Caliper.Outline
          className={guide}
          colorPalette="blue"
          spanX={{ start: labelX, size: 0 }}
          spanY={{ start: -8, size: stackHeight + 16 }}
        />
        <Caliper.Outline spanX={{ start: plusX, size: md.icon }} spanY={{ start: md.iconTop, size: md.icon }} />
        <Caliper.Outline
          spanX={{ start: shareX, size: md.icon }}
          spanY={{ start: rowStep + md.iconTop, size: md.icon }}
        />
        <Caliper.Outline
          spanX={{ start: settingsX, size: md.icon }}
          spanY={{ start: rowStep * 2 + md.iconTop, size: md.icon }}
        />
        <Caliper.Hatch
          colorPalette="pink"
          spanX={{ start: plusX + md.icon, size: iconGap }}
          spanY={{ start: md.iconTop, size: md.icon }}
        />
        <Caliper.Hatch
          colorPalette="pink"
          spanX={{ start: shareX + md.icon, size: iconGap }}
          spanY={{ start: rowStep + md.iconTop, size: md.icon }}
        />
        <Caliper.Hatch
          colorPalette="pink"
          spanX={{ start: settingsX + md.icon, size: iconGap }}
          spanY={{ start: rowStep * 2 + md.iconTop, size: md.icon }}
        />
        <Caliper.Outline
          className={cx(guide, centerGuide)}
          colorPalette="yellow"
          spanX={{ start: iconCenterX, size: 0 }}
          spanY={{ start: -8, size: stackHeight + 16 }}
        />
      </Caliper.Frame>

      <SegmentGroup.Root
        size="sm"
        orientation="horizontal"
        value={pull}
        onValueChange={(details) => setPull(details.value === "fixed" ? "fixed" : "ink")}
        aria-label="Pull"
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="ink" h="auto" py="2" flexDirection="column" gap="0.5">
          <SegmentGroup.ItemText>To the ink</SegmentGroup.ItemText>
          <Span display="inline-flex" alignItems="center" gap="1" color="fg.muted" fontWeight="normal">
            <Icon name="close" color="fg.error" />
            Labels drift
          </Span>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="fixed" h="auto" py="2" flexDirection="column" gap="0.5">
          <SegmentGroup.ItemText>Fixed pull</SegmentGroup.ItemText>
          <Span display="inline-flex" alignItems="center" gap="1" color="fg.muted" fontWeight="normal">
            <Icon name="check" color="fg.success" />
            Labels line up
          </Span>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    </Caliper.Figure>
  )
}

type Balance = "box" | "ink"

const key = { border: 1, padding: 4, icon: 16, iconTop: 3.5, iconBottom: 4.5 }
const keyAir = (units: number) => (key.icon * units) / 24
const exactPx = (value: number) => `${Number(value.toFixed(3))}px`

export function KbdSymbolsFigure() {
  const [balance, setBalance] = useState<Balance>("box")
  const palette = balance === "ink" ? "blue" : "red"
  const pull = (units: number) => (balance === "ink" ? keyAir(units) : 0)
  const offset = (units: number) => (balance === "ink" ? `${units / 24}em` : undefined)
  const boxEdge = (units: number) => key.border + key.padding - pull(units)
  const inkGap = (units: number) => key.padding - pull(units) + keyAir(units)

  return (
    <Caliper.Figure caption="Shortcut keys at 3×. Each symbol carries its own air: the command and option glyphs start 4.25 units into their box, the shift arrow 3.664, the up arrow ends 6.25 units short. An offset in em pulls each one to its ink at every Kbd size.">
      <HStack columnGap="16" rowGap="8" flexWrap="wrap" justifyContent="center">
        <Caliper.Frame magnify={3} annotated>
          <Caliper.Subject>
            <Kbd size="lg">
              <StartIcon asChild offset={offset(4.25)} className={iconMotion}>
                <Icon name="command" />
              </StartIcon>
              K
            </Kbd>
          </Caliper.Subject>
          <Caliper.Outline
            spanX={{ start: boxEdge(4.25), size: key.icon }}
            spanY={{ start: key.iconTop, size: key.icon }}
          />
          <Caliper.Hatch
            colorPalette={palette}
            spanX={{ start: boxEdge(4.25), size: keyAir(4.25) }}
            spanY={{ start: key.iconTop, size: key.icon }}
          />
          <Caliper.Dimension
            colorPalette={palette}
            reach={key.iconBottom}
            span={{ start: key.border, size: inkGap(4.25) }}
          >
            <Caliper.DimensionLabel>{exactPx(inkGap(4.25))}</Caliper.DimensionLabel>
          </Caliper.Dimension>
          <Caliper.Dimension
            colorPalette={palette}
            reach={key.iconBottom}
            span={{ end: key.border, size: key.padding }}
          >
            <Caliper.DimensionLabel>{exactPx(key.padding)}</Caliper.DimensionLabel>
          </Caliper.Dimension>
        </Caliper.Frame>

        <Caliper.Frame magnify={3} annotated>
          <Caliper.Subject>
            <Kbd size="lg">
              <StartIcon asChild offset={offset(3.664)} className={iconMotion}>
                <Icon name="shift" />
              </StartIcon>
              <Icon name="command" />P
            </Kbd>
          </Caliper.Subject>
          <Caliper.Outline
            spanX={{ start: boxEdge(3.664), size: key.icon }}
            spanY={{ start: key.iconTop, size: key.icon }}
          />
          <Caliper.Hatch
            colorPalette={palette}
            spanX={{ start: boxEdge(3.664), size: keyAir(3.664) }}
            spanY={{ start: key.iconTop, size: key.icon }}
          />
          <Caliper.Dimension
            colorPalette={palette}
            reach={key.iconBottom}
            span={{ start: key.border, size: inkGap(3.664) }}
          >
            <Caliper.DimensionLabel>{exactPx(inkGap(3.664))}</Caliper.DimensionLabel>
          </Caliper.Dimension>
          <Caliper.Dimension
            colorPalette={palette}
            reach={key.iconBottom}
            span={{ end: key.border, size: key.padding }}
          >
            <Caliper.DimensionLabel>{exactPx(key.padding)}</Caliper.DimensionLabel>
          </Caliper.Dimension>
        </Caliper.Frame>

        <Caliper.Frame magnify={3} annotated>
          <Caliper.Subject>
            <Kbd size="lg">
              <StartIcon asChild offset={offset(4.25)} className={iconMotion}>
                <Icon name="option" />
              </StartIcon>
              <EndIcon asChild offset={offset(6.25)} className={iconMotion}>
                <Icon name="arrow-up" />
              </EndIcon>
            </Kbd>
          </Caliper.Subject>
          <Caliper.Outline
            spanX={{ start: boxEdge(4.25), size: key.icon }}
            spanY={{ start: key.iconTop, size: key.icon }}
          />
          <Caliper.Outline
            spanX={{ end: boxEdge(6.25), size: key.icon }}
            spanY={{ start: key.iconTop, size: key.icon }}
          />
          <Caliper.Hatch
            colorPalette={palette}
            spanX={{ start: boxEdge(4.25), size: keyAir(4.25) }}
            spanY={{ start: key.iconTop, size: key.icon }}
          />
          <Caliper.Hatch
            colorPalette={palette}
            spanX={{ end: boxEdge(6.25), size: keyAir(6.25) }}
            spanY={{ start: key.iconTop, size: key.icon }}
          />
          <Caliper.Dimension
            colorPalette={palette}
            reach={key.iconBottom}
            span={{ start: key.border, size: inkGap(4.25) }}
          >
            <Caliper.DimensionLabel>{exactPx(inkGap(4.25))}</Caliper.DimensionLabel>
          </Caliper.Dimension>
          <Caliper.Dimension
            colorPalette={palette}
            reach={key.iconBottom}
            span={{ end: key.border, size: inkGap(6.25) }}
          >
            <Caliper.DimensionLabel>{exactPx(inkGap(6.25))}</Caliper.DimensionLabel>
          </Caliper.Dimension>
        </Caliper.Frame>
      </HStack>

      <SegmentGroup.Root
        size="sm"
        orientation="horizontal"
        value={balance}
        onValueChange={(details) => setBalance(details.value === "ink" ? "ink" : "box")}
        aria-label="Balance"
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="box">
          <SegmentGroup.ItemText>Box</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="ink">
          <SegmentGroup.ItemText>Ink</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    </Caliper.Figure>
  )
}
