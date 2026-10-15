import { Badge } from "@isbatak/react-ui/badge"
import { Button } from "@isbatak/react-ui/button"
import Link from "next/link"
import { styled } from "styled-system/jsx"

import { BlockExample } from "../blocks/block-example"
import { TimeWheelsDemo } from "../blocks/time-wheels-demo"
import { Eyebrow, Section, SectionHeading } from "../home/section"
import { Icon } from "../ui/icon"

const GroupLabel = styled("h3", {
  base: {
    fontFamily: "mono",
    textStyle: "overline",
    color: "fg.subtle",
  },
})

const BlockGrid = styled("ul", {
  base: {
    display: "grid",
    gridTemplateColumns: {
      base: "minmax(0, 1fr)",
      sm: "repeat(2, minmax(0, 1fr))",
      lg: "repeat(4, minmax(0, 1fr))",
    },
    gap: "3",
    mt: "4",
  },
})

const BlockCard = styled("li", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "2",
    p: "5",
    rounded: "l3",
    borderWidth: "1px",
  },
  variants: {
    stage: {
      launch: { bg: "bg.subtle", borderColor: "transparent" },
      next: { borderStyle: "dashed" },
    },
  },
})

const BlockTitle = styled("h4", {
  base: {
    mt: "1",
    textStyle: "md",
    fontWeight: "medium",
  },
})

const BlockText = styled("p", {
  base: {
    textStyle: "sm",
    lineHeight: "1.6",
    color: "fg.muted",
    textWrap: "pretty",
  },
})

const Point = styled("li", {
  base: {
    display: "flex",
    alignItems: "flex-start",
    gap: "2.5",
    textStyle: "sm",
    lineHeight: "1.6",
    "& > svg": { flexShrink: "0", mt: "0.5", color: "fg.subtle" },
  },
})

export function PlusLibrary() {
  return (
    <Section id="library" style={{ scrollMarginTop: "var(--sizes-header)" }}>
      <styled.div py={{ base: "20", md: "28" }} borderTopWidth="1px">
        <styled.div
          display="grid"
          gap={{ base: "10", md: "8" }}
          gridTemplateColumns={{ md: "repeat(12, minmax(0, 1fr))" }}
        >
          <styled.div gridColumn={{ md: "span 6 / span 6" }}>
            <Eyebrow>What's inside</Eyebrow>
            <SectionHeading>Media blocks with the hard parts done.</SectionHeading>
            <styled.p mt="4" maxW="md" textStyle="sm" lineHeight="1.7" color="fg.muted" textWrap="pretty">
              The library opens with a complete watch page, then grows by about one block a month. Every block is source
              you own, not another dependency.
            </styled.p>
          </styled.div>
          <styled.ul gridColumn={{ md: "8 / span 5" }} alignSelf="end" display="flex" flexDirection="column" gap="2.5">
            <Point>
              <Icon name="check" />
              React, Ark UI and Panda CSS source
            </Point>
            <Point>
              <Icon name="check" />A Figma component with its Code Connect mapping
            </Point>
            <Point>
              <Icon name="check" />
              Installs with the shadcn CLI, or by your AI agent
            </Point>
            <Point>
              <Icon name="check" />
              Keyboard and screen reader support built in
            </Point>
            <Point>
              <Icon name="check" />A free Figma kit on Figma Community, and the Pro file with Plus
            </Point>
          </styled.ul>
        </styled.div>

        <styled.div mt="16">
          <GroupLabel>Launch set</GroupLabel>
          <BlockGrid>
            <BlockCard stage="launch">
              <Badge size="sm" colorPalette="green">
                In progress
              </Badge>
              <BlockTitle>App shell</BlockTitle>
              <BlockText>Header, collapsible sidebar and search: the frame every screen sits in.</BlockText>
            </BlockCard>
            <BlockCard stage="launch">
              <Badge size="sm" colorPalette="green">
                In progress
              </Badge>
              <BlockTitle>Video gallery</BlockTitle>
              <BlockText>A YouTube-style grid with hover previews, filters and an up-next list.</BlockText>
            </BlockCard>
            <BlockCard stage="launch">
              <Badge size="sm" colorPalette="green">
                In progress
              </Badge>
              <BlockTitle>Video player</BlockTitle>
              <BlockText>Custom controls, captions, chapters, keyboard shortcuts and picture-in-picture.</BlockText>
            </BlockCard>
            <BlockCard stage="launch">
              <Badge size="sm" colorPalette="green">
                In progress
              </Badge>
              <BlockTitle>Transcripts</BlockTitle>
              <BlockText>A searchable transcript that follows playback and seeks when you click a line.</BlockText>
            </BlockCard>
          </BlockGrid>
        </styled.div>

        <styled.div mt="10">
          <GroupLabel>Next, about one a month</GroupLabel>
          <BlockGrid>
            <BlockCard stage="next">
              <Badge size="sm">Planned</Badge>
              <BlockTitle>Audio player</BlockTitle>
              <BlockText>Podcast-style playback with speed, chapters, a waveform scrubber and a mini player.</BlockText>
            </BlockCard>
            <BlockCard stage="next">
              <Badge size="sm">Planned</Badge>
              <BlockTitle>Image gallery</BlockTitle>
              <BlockText>A masonry grid with an accessible lightbox and a before/after slider.</BlockText>
            </BlockCard>
            <BlockCard stage="next">
              <Badge size="sm">Planned</Badge>
              <BlockTitle>Comments</BlockTitle>
              <BlockText>Threaded comments with replies and reactions. Bring your own backend.</BlockText>
            </BlockCard>
            <BlockCard stage="next">
              <Badge size="sm">Planned</Badge>
              <BlockTitle>Live chat</BlockTitle>
              <BlockText>A chat panel for streams and live events. Bring your own backend.</BlockText>
            </BlockCard>
          </BlockGrid>
        </styled.div>

        <styled.div mt="16">
          <styled.div display="flex" flexWrap="wrap" alignItems="center" justifyContent="space-between" gap="4" mb="4">
            <GroupLabel>Live today: time wheels</GroupLabel>
            <Button asChild variant="ghost" size="sm">
              <Link href="/blocks">
                See all blocks
                <Icon name="arrow-right" />
              </Link>
            </Button>
          </styled.div>
          <BlockExample files={["time-wheels-demo.tsx", "time-wheels.tsx", "wheel-column.tsx"]}>
            <TimeWheelsDemo />
          </BlockExample>
        </styled.div>
      </styled.div>
    </Section>
  )
}
