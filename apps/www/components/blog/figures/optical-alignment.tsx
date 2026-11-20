"use client"

import { Badge } from "@isbatak/react-ui/badge"
import { Button } from "@isbatak/react-ui/button"
import { EndIcon, StartIcon } from "@isbatak/react-ui/icon"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { useState } from "react"
import { css, cx } from "styled-system/css"
import { HStack } from "styled-system/jsx"

import { Caliper } from "../../ui/caliper"
import { Icon } from "../../ui/icon"

type Alignment = "equal" | "optical"

const md = { border: 1, padding: 16, height: 40, icon: 20, iconTop: 10, offset: 4 }
const plusInk = (md.icon * 5.25) / 24
const arrowInk = (md.icon * 4.25) / 24

const px = (value: number) => `${Number(value.toFixed(1))}px`

const iconMotion = css({
  transitionProperty: "margin",
  transitionDuration: "moderate",
  transitionTimingFunction: "default",
})

const equalIcon = css({ ms: "0", me: "0" })

function NewProjectButton({ alignment }: { alignment: Alignment }) {
  return (
    <Button variant="outline" colorPalette="gray" bg="bg" tabIndex={-1}>
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

  return (
    <Caliper.Figure caption="The md Button with a plus icon. Equal padding puts 16px before the icon's box, but the glyph starts 4.4px inside it. The recipe pulls the icon 4px out so the ink lands where the label ends on the other side.">
      <Caliper.Frame magnify="fit" annotated>
        <Caliper.Subject>
          <NewProjectButton alignment={alignment} />
        </Caliper.Subject>
        <Caliper.Outline spanX={{ start: boxStart, size: md.icon }} spanY={{ start: md.iconTop, size: md.icon }} />
        <Caliper.Hatch
          colorPalette={alignment === "equal" ? "red" : "blue"}
          spanX={{ start: boxStart, size: plusInk }}
          spanY={{ start: md.iconTop, size: md.icon }}
        />
        <Caliper.Dimension placement="top" reach={md.iconTop} span={{ start: md.border, size: boxStart - md.border }}>
          <Caliper.DimensionLabel>{px(boxStart - md.border)} to the box</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension placement="top" reach={md.iconTop} span={{ end: md.border, size: md.padding }}>
          <Caliper.DimensionLabel>{px(md.padding)} to the box</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension
          colorPalette={alignment === "equal" ? "red" : "blue"}
          reach={md.iconTop}
          span={{ start: md.border, size: inkGap }}
        >
          <Caliper.DimensionLabel>{px(inkGap)} to the ink</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension
          colorPalette={alignment === "equal" ? "red" : "blue"}
          reach={md.iconTop}
          span={{ end: md.border, size: md.padding }}
        >
          <Caliper.DimensionLabel>{px(md.padding)} to the ink</Caliper.DimensionLabel>
        </Caliper.Dimension>
      </Caliper.Frame>

      <Caliper.Legend>
        <Caliper.LegendItem>
          <Caliper.LegendSwatch kind="dashed" />
          Icon box
        </Caliper.LegendItem>
        <Caliper.LegendItem>
          <Caliper.LegendSwatch kind="hatch" colorPalette={alignment === "equal" ? "red" : "blue"} />
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
        <SegmentGroup.Item value="equal">
          <SegmentGroup.ItemText>Equal</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="optical">
          <SegmentGroup.ItemText>Optical</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    </Caliper.Figure>
  )
}

export function OpticalComparisonFigure() {
  return (
    <Caliper.Figure caption="The same two buttons at 2×, with no guides. The top one looks heavier on the left; the bottom one looks centered.">
      <HStack gap="4">
        <Badge variant="solid" colorPalette="red" size="md">
          Equal
        </Badge>
        <Caliper.Frame magnify={2}>
          <Caliper.Subject>
            <NewProjectButton alignment="equal" />
          </Caliper.Subject>
        </Caliper.Frame>
      </HStack>
      <HStack gap="4">
        <Badge variant="solid" colorPalette="blue" size="md">
          Optical
        </Badge>
        <Caliper.Frame magnify={2}>
          <Caliper.Subject>
            <NewProjectButton alignment="optical" />
          </Caliper.Subject>
        </Caliper.Frame>
      </HStack>
    </Caliper.Figure>
  )
}

export function EndIconFigure() {
  const boxEnd = md.border + md.padding - md.offset
  const inkGap = boxEnd - md.border + arrowInk

  return (
    <Caliper.Figure caption="EndIcon mirrors it: the arrow's tip sits 3.5px inside its box, so the recipe pulls the box 4px toward the edge.">
      <Caliper.Frame magnify="fit" annotated>
        <Caliper.Subject>
          <Button variant="outline" colorPalette="gray" bg="bg" tabIndex={-1}>
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
        <Caliper.Dimension placement="top" reach={md.iconTop} span={{ end: md.border, size: boxEnd - md.border }}>
          <Caliper.DimensionLabel>{px(boxEnd - md.border)} to the box</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension colorPalette="blue" reach={md.iconTop} span={{ start: md.border, size: md.padding }}>
          <Caliper.DimensionLabel>{px(md.padding)} to the ink</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension colorPalette="blue" reach={md.iconTop} span={{ end: md.border, size: inkGap }}>
          <Caliper.DimensionLabel>{px(inkGap)} to the ink</Caliper.DimensionLabel>
        </Caliper.Dimension>
      </Caliper.Frame>
    </Caliper.Figure>
  )
}
