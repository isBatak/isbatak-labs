import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { Stack } from "@isbatak/react-ui/stack"

export function SegmentGroupSizesDemo() {
  return (
    <Stack gap="4" align="flex-start">
      <SegmentGroup.Root orientation="horizontal" defaultValue="week" size="2xs" aria-label="Range (2xs)">
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="day">
          <SegmentGroup.ItemText>Day</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="week">
          <SegmentGroup.ItemText>Week</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="month">
          <SegmentGroup.ItemText>Month</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
      <SegmentGroup.Root orientation="horizontal" defaultValue="week" size="xs" aria-label="Range (xs)">
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="day">
          <SegmentGroup.ItemText>Day</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="week">
          <SegmentGroup.ItemText>Week</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="month">
          <SegmentGroup.ItemText>Month</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
      <SegmentGroup.Root orientation="horizontal" defaultValue="week" size="sm" aria-label="Range (sm)">
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="day">
          <SegmentGroup.ItemText>Day</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="week">
          <SegmentGroup.ItemText>Week</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="month">
          <SegmentGroup.ItemText>Month</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
      <SegmentGroup.Root orientation="horizontal" defaultValue="week" size="md" aria-label="Range (md)">
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="day">
          <SegmentGroup.ItemText>Day</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="week">
          <SegmentGroup.ItemText>Week</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="month">
          <SegmentGroup.ItemText>Month</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
      <SegmentGroup.Root orientation="horizontal" defaultValue="week" size="lg" aria-label="Range (lg)">
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="day">
          <SegmentGroup.ItemText>Day</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="week">
          <SegmentGroup.ItemText>Week</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="month">
          <SegmentGroup.ItemText>Month</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    </Stack>
  )
}
