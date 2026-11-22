import { HStack, styled } from "styled-system/jsx"

import { Caliper } from "../ui/caliper"
import { Icon } from "../ui/icon"

const Sample = styled("div", {
  base: {
    bg: "bg",
    rounded: "l2",
    borderWidth: "1px",
    borderColor: "border.emphasized",
  },
  variants: {
    size: {
      tile: { boxSize: "6" },
      chip: { w: "16", h: "10" },
      card: { w: "40", h: "24" },
    },
  },
  defaultVariants: { size: "chip" },
})

const Caption = styled("p", {
  base: {
    textStyle: "xs",
    fontFamily: "mono",
    color: "fg.muted",
    textAlign: "center",
  },
})

const Toolbar = styled("div", {
  base: {
    display: "flex",
    gap: "1",
    w: "80",
    p: "1",
    bg: "bg",
    rounded: "l3",
    borderWidth: "1px",
    borderColor: "border.emphasized",
  },
})

const Tool = styled("span", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "8",
    rounded: "l2",
    color: "fg.muted",
    _last: { ms: "auto" },
  },
})

export function CaliperBoxModelDemo() {
  return (
    <Caliper.Figure caption="A 160 × 96 card with 16px padding: hatched padding, an outlined content box and a chain of dimensions.">
      <Caliper.Frame magnify={2} annotated>
        <Caliper.Subject>
          <Sample size="card" />
        </Caliper.Subject>
        <Caliper.Hatch colorPalette="blue" spanY={{ start: 0, size: 16 }} />
        <Caliper.Hatch colorPalette="blue" spanY={{ end: 0, size: 16 }} />
        <Caliper.Hatch colorPalette="blue" spanX={{ start: 0, size: 16 }} spanY={{ start: 16, end: 16 }} />
        <Caliper.Hatch colorPalette="blue" spanX={{ end: 0, size: 16 }} spanY={{ start: 16, end: 16 }} />
        <Caliper.Outline spanX={{ start: 16, end: 16 }} spanY={{ start: 16, end: 16 }} />
        <Caliper.Dimension placement="top">
          <Caliper.DimensionLabel>160px</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension placement="left" extension="none">
          <Caliper.DimensionLabel>96px</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension colorPalette="blue" span={{ start: 0, size: 16 }} distance="sm">
          <Caliper.DimensionLabel>16</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension span={{ start: 16, end: 16 }} reach={16} distance="sm">
          <Caliper.DimensionLabel>128px</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension colorPalette="blue" span={{ end: 0, size: 16 }} distance="sm">
          <Caliper.DimensionLabel>16</Caliper.DimensionLabel>
        </Caliper.Dimension>
      </Caliper.Frame>
      <Caliper.Legend>
        <Caliper.LegendItem>
          <Caliper.LegendSwatch kind="hatch" colorPalette="blue" />
          Padding
        </Caliper.LegendItem>
        <Caliper.LegendItem>
          <Caliper.LegendSwatch kind="dashed" />
          Content box
        </Caliper.LegendItem>
      </Caliper.Legend>
    </Caliper.Figure>
  )
}

export function CaliperScaleDemo() {
  return (
    <Caliper.Figure caption="The same 24px tile at magnify 1, 2 and 3. The label quotes the real size at every scale.">
      <HStack gap="12" alignItems="flex-end">
        <Caliper.Frame magnify={1} annotated>
          <Caliper.Subject>
            <Sample size="tile" />
          </Caliper.Subject>
          <Caliper.Dimension distance="sm">
            <Caliper.DimensionLabel>24px</Caliper.DimensionLabel>
          </Caliper.Dimension>
        </Caliper.Frame>
        <Caliper.Frame magnify={2} annotated>
          <Caliper.Subject>
            <Sample size="tile" />
          </Caliper.Subject>
          <Caliper.Dimension distance="sm">
            <Caliper.DimensionLabel>24px</Caliper.DimensionLabel>
          </Caliper.Dimension>
        </Caliper.Frame>
        <Caliper.Frame magnify={3} annotated>
          <Caliper.Subject>
            <Sample size="tile" />
          </Caliper.Subject>
          <Caliper.Dimension distance="sm">
            <Caliper.DimensionLabel>24px</Caliper.DimensionLabel>
          </Caliper.Dimension>
        </Caliper.Frame>
      </HStack>
    </Caliper.Figure>
  )
}

export function CaliperPlacementDemo() {
  return (
    <Caliper.Figure caption="A dimension on each side of a 64 × 40 chip. Without a span, a dimension covers the whole frame.">
      <Caliper.Frame magnify={2} annotated>
        <Caliper.Subject>
          <Sample />
        </Caliper.Subject>
        <Caliper.Dimension placement="top">
          <Caliper.DimensionLabel>top</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension placement="bottom">
          <Caliper.DimensionLabel>bottom</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension placement="left">
          <Caliper.DimensionLabel>left</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension placement="right">
          <Caliper.DimensionLabel>right</Caliper.DimensionLabel>
        </Caliper.Dimension>
      </Caliper.Frame>
    </Caliper.Figure>
  )
}

export function CaliperLinesDemo() {
  return (
    <Caliper.Figure caption="Extension lines dashed, solid or hidden; a dashed dimension line; and a dimension without ticks.">
      <HStack gap="8" flexWrap="wrap" justifyContent="center">
        <styled.div display="flex" flexDirection="column" alignItems="center">
          <Caliper.Frame magnify={1.5} annotated>
            <Caliper.Subject>
              <Sample />
            </Caliper.Subject>
            <Caliper.Dimension>
              <Caliper.DimensionLabel>64px</Caliper.DimensionLabel>
            </Caliper.Dimension>
          </Caliper.Frame>
          <Caption>extension=&quot;dashed&quot;</Caption>
        </styled.div>
        <styled.div display="flex" flexDirection="column" alignItems="center">
          <Caliper.Frame magnify={1.5} annotated>
            <Caliper.Subject>
              <Sample />
            </Caliper.Subject>
            <Caliper.Dimension extension="solid">
              <Caliper.DimensionLabel>64px</Caliper.DimensionLabel>
            </Caliper.Dimension>
          </Caliper.Frame>
          <Caption>extension=&quot;solid&quot;</Caption>
        </styled.div>
        <styled.div display="flex" flexDirection="column" alignItems="center">
          <Caliper.Frame magnify={1.5} annotated>
            <Caliper.Subject>
              <Sample />
            </Caliper.Subject>
            <Caliper.Dimension extension="none" distance="sm">
              <Caliper.DimensionLabel>64px</Caliper.DimensionLabel>
            </Caliper.Dimension>
          </Caliper.Frame>
          <Caption>extension=&quot;none&quot;</Caption>
        </styled.div>
        <styled.div display="flex" flexDirection="column" alignItems="center">
          <Caliper.Frame magnify={1.5} annotated>
            <Caliper.Subject>
              <Sample />
            </Caliper.Subject>
            <Caliper.Dimension line="dashed">
              <Caliper.DimensionLabel>64px</Caliper.DimensionLabel>
            </Caliper.Dimension>
          </Caliper.Frame>
          <Caption>line=&quot;dashed&quot;</Caption>
        </styled.div>
        <styled.div display="flex" flexDirection="column" alignItems="center">
          <Caliper.Frame magnify={1.5} annotated>
            <Caliper.Subject>
              <Sample />
            </Caliper.Subject>
            <Caliper.Dimension ticks={false}>
              <Caliper.DimensionLabel>64px</Caliper.DimensionLabel>
            </Caliper.Dimension>
          </Caliper.Frame>
          <Caption>ticks=&#123;false&#125;</Caption>
        </styled.div>
      </HStack>
    </Caliper.Figure>
  )
}

export function CaliperReachDemo() {
  return (
    <Caliper.Figure caption="reach pulls the extension lines into the subject, here up to the content box 16px inside the card.">
      <Caliper.Frame magnify={2} annotated>
        <Caliper.Subject>
          <Sample size="card" />
        </Caliper.Subject>
        <Caliper.Outline spanX={{ start: 16, end: 16 }} spanY={{ start: 16, end: 16 }} />
        <Caliper.Dimension placement="top" span={{ start: 16, end: 16 }} reach={16}>
          <Caliper.DimensionLabel>reach=&#123;16&#125;</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension span={{ start: 16, end: 16 }}>
          <Caliper.DimensionLabel>reach=&#123;0&#125;</Caliper.DimensionLabel>
        </Caliper.Dimension>
      </Caliper.Frame>
    </Caliper.Figure>
  )
}

export function CaliperDistanceDemo() {
  return (
    <Caliper.Figure caption="distance sets how far the dimension line sits from the frame, so dimensions can stack in rows.">
      <Caliper.Frame magnify={2} annotated>
        <Caliper.Subject>
          <Sample size="card" />
        </Caliper.Subject>
        <Caliper.Dimension span={{ start: 0, size: 40 }} distance="sm">
          <Caliper.DimensionLabel>sm</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension span={{ start: 40, size: 80 }} distance="md">
          <Caliper.DimensionLabel>md</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension span={{ end: 0, size: 40 }} distance="lg">
          <Caliper.DimensionLabel>lg</Caliper.DimensionLabel>
        </Caliper.Dimension>
      </Caliper.Frame>
    </Caliper.Figure>
  )
}

export function CaliperMarksDemo() {
  return (
    <Caliper.Figure caption="Outline frames a region with a dashed box. Hatch fills one with diagonal lines.">
      <HStack gap="12">
        <Caliper.Frame magnify={2}>
          <Caliper.Subject>
            <Sample />
          </Caliper.Subject>
          <Caliper.Outline spanX={{ start: 8, end: 8 }} spanY={{ start: 8, end: 8 }} />
        </Caliper.Frame>
        <Caliper.Frame magnify={2}>
          <Caliper.Subject>
            <Sample />
          </Caliper.Subject>
          <Caliper.Hatch colorPalette="red" spanX={{ start: 0, size: 16 }} />
          <Caliper.Hatch colorPalette="red" spanX={{ end: 0, size: 16 }} />
        </Caliper.Frame>
      </HStack>
    </Caliper.Figure>
  )
}

export function CaliperColorDemo() {
  return (
    <Caliper.Figure caption="Every mark takes its color from colorPalette: gray by default, or any palette set on a part.">
      <Caliper.Frame magnify={2} annotated>
        <Caliper.Subject>
          <Sample size="card" />
        </Caliper.Subject>
        <Caliper.Hatch colorPalette="green" spanX={{ start: 0, size: 16 }} />
        <Caliper.Dimension placement="top">
          <Caliper.DimensionLabel>gray</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension colorPalette="blue" span={{ start: 0, size: 80 }}>
          <Caliper.DimensionLabel>blue</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension colorPalette="red" span={{ end: 0, size: 80 }}>
          <Caliper.DimensionLabel>red</Caliper.DimensionLabel>
        </Caliper.Dimension>
      </Caliper.Frame>
      <Caliper.Legend>
        <Caliper.LegendItem>
          <Caliper.LegendSwatch kind="hatch" colorPalette="green" />
          hatch
        </Caliper.LegendItem>
        <Caliper.LegendItem>
          <Caliper.LegendSwatch kind="dashed" />
          dashed
        </Caliper.LegendItem>
        <Caliper.LegendItem>
          <Caliper.LegendSwatch colorPalette="blue" />
          solid
        </Caliper.LegendItem>
      </Caliper.Legend>
    </Caliper.Figure>
  )
}

export function CaliperCalloutDemo() {
  return (
    <Caliper.Figure caption="Callouts mark points on a 320px toolbar. Bold and italic share one leader line; the theme note lines up with its end.">
      <Caliper.Frame magnify={2} mb="56">
        <Caliper.Subject>
          <Toolbar>
            <Tool>
              <Icon name="bold" />
            </Tool>
            <Tool>
              <Icon name="italic" />
            </Tool>
            <Tool>
              <Icon name="underline" />
            </Tool>
            <Tool>
              <Icon name="contrast" />
            </Tool>
          </Toolbar>
        </Caliper.Subject>
        <Caliper.Callout
          anchors={[
            { x: 20, y: 40 },
            { x: 56, y: 40 },
          ]}
          to={{ x: 0, y: 88 }}
          bend={56}
        >
          <Caliper.CalloutLabel maxW="40">
            <Caliper.CalloutTitle>bold, italic</Caliper.CalloutTitle>
            Both add emphasis, so they sit side by side and share one line.
          </Caliper.CalloutLabel>
        </Caliper.Callout>
        <Caliper.Callout anchors={[{ x: 92, y: 40 }]} to={{ x: 92, y: 88 }}>
          <Caliper.CalloutLabel maxW="40">
            <Caliper.CalloutTitle>underline</Caliper.CalloutTitle>
            Kept apart, because on the web an underline reads as a link.
          </Caliper.CalloutLabel>
        </Caliper.Callout>
        <Caliper.Callout anchors={[{ x: 300, y: 40 }]} to={{ x: 300, y: 88 }} align="end">
          <Caliper.CalloutLabel maxW="40">
            <Caliper.CalloutTitle>theme</Caliper.CalloutTitle>
            One button toggles light and dark. System picks one of the two anyway.
          </Caliper.CalloutLabel>
        </Caliper.Callout>
      </Caliper.Frame>
    </Caliper.Figure>
  )
}

export function CaliperIconGridDemo() {
  return (
    <Caliper.Figure caption="IconGrid over a 24px icon at 8×: the hatched 2-unit trim area, a line per unit, and the keylines.">
      <Caliper.Frame magnify={8}>
        <Caliper.Subject>
          <Icon name="plus" size="lg" />
        </Caliper.Subject>
        <Caliper.IconGrid colorPalette="red" />
      </Caliper.Frame>
    </Caliper.Figure>
  )
}
