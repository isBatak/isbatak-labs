"use client"

import { SegmentGroup } from "@isbatak/react-ui/segment-group"

import { useDocVariant } from "./doc-variant"
import { createPreference } from "./preference"
import { STYLING_KEY, type StylingId, defaultVariant, stylingIds } from "./variant"

export type { StylingId }

const useStylingPreference = createPreference(STYLING_KEY, stylingIds, defaultVariant.styling)

export function useStyling() {
  const [preference, setPreference] = useStylingPreference()
  const { variant, setVariant } = useDocVariant()

  const setStyling = (styling: StylingId) => {
    setPreference(styling)
    setVariant({ styling })
  }

  return { styling: variant?.styling ?? preference, setStyling }
}

export function StylingPicker() {
  const { styling, setStyling } = useStyling()

  return (
    <SegmentGroup.Root
      size="xs"
      orientation="horizontal"
      aria-label="Styling"
      value={styling}
      onValueChange={(details) => details.value && setStyling(details.value as StylingId)}
    >
      <SegmentGroup.Indicator />
      <SegmentGroup.Item value="panda">
        <SegmentGroup.ItemText>Panda CSS</SegmentGroup.ItemText>
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
      <SegmentGroup.Item value="css">
        <SegmentGroup.ItemText>CSS</SegmentGroup.ItemText>
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    </SegmentGroup.Root>
  )
}
