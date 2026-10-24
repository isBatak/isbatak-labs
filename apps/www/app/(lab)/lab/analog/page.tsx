import { Badge } from "@isbatak/react-ui/badge"
import { Button } from "@isbatak/react-ui/button"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { Slider } from "@isbatak/react-ui/slider"
import { Switch } from "@isbatak/react-ui/switch"
import type { Metadata } from "next"
import { styled } from "styled-system/jsx"

import { Remote } from "./remote"

export const metadata: Metadata = {
  title: "Analog theme",
  robots: { index: false, follow: false },
}

const Panel = styled("section", {
  base: {
    display: "grid",
    gap: "8",
    alignContent: "start",
    w: "full",
    maxW: "md",
    p: "8",
    rounded: "l3",
    layerStyle: "raised",
  },
})

const Group = styled("div", {
  base: {
    display: "grid",
    gap: "3",
  },
})

const Title = styled("p", {
  base: {
    fontFamily: "mono",
    textStyle: "xs",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "fg.subtle",
  },
})

const Wrap = styled("div", {
  base: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2",
  },
})

export default function AnalogThemePage() {
  return (
    <styled.main
      data-panda-theme="analog"
      className="dark"
      minH="100dvh"
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      alignItems={{ base: "center", lg: "flex-start" }}
      justifyContent="center"
      gap={{ base: "16", lg: "24" }}
      px="4"
      py={{ base: "16", md: "24" }}
    >
      <Remote />

      <Panel>
        <Group>
          <Title>Buttons</Title>
          <Wrap>
            <Button variant="solid">Solid</Button>
            <Button variant="surface">Surface</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="solid" colorPalette="red">
              Record
            </Button>
          </Wrap>
        </Group>

        <Group>
          <Title>Badges</Title>
          <Wrap>
            <Badge>Default</Badge>
            <Badge variant="surface">Surface</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge colorPalette="red">Live</Badge>
          </Wrap>
        </Group>

        <Group>
          <Title>Input</Title>
          <SegmentGroup.Root defaultValue="tv">
            <SegmentGroup.Indicator />
            <SegmentGroup.Item value="tv">
              <SegmentGroup.ItemText>TV</SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
            <SegmentGroup.Item value="hdmi">
              <SegmentGroup.ItemText>HDMI</SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
            <SegmentGroup.Item value="aux">
              <SegmentGroup.ItemText>AUX</SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          </SegmentGroup.Root>
        </Group>

        <Group>
          <Title>Settings</Title>
          <Switch.Root defaultChecked display="flex" justifyContent="space-between">
            <Switch.Label color="fg.muted">Standby light</Switch.Label>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.HiddenInput />
          </Switch.Root>
          <Slider.Root defaultValue={[40]} colorPalette="red">
            <Slider.Label color="fg.muted">Bass</Slider.Label>
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb index={0}>
                <Slider.HiddenInput />
              </Slider.Thumb>
            </Slider.Control>
          </Slider.Root>
        </Group>
      </Panel>
    </styled.main>
  )
}
