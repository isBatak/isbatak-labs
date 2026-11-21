<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { SegmentGroup } from "@isbatak/svelte-ui/segment-group"
  import { Span } from "@isbatak/svelte-ui/span"
  import { css } from "styled-system/css"

  const item = css({ h: "auto", py: "2", flexDirection: "column", gap: "0.5" })
</script>

<Box w="full" maxW="xl">
  <SegmentGroup.Root orientation="horizontal" defaultValue="express" fitted aria-label="Delivery">
    <SegmentGroup.Indicator />
    <SegmentGroup.Item value="standard" class={item}>
      <SegmentGroup.ItemText>Standard</SegmentGroup.ItemText>
      <Span color="fg.muted" fontWeight="normal">3–5 business days</Span>
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
    <SegmentGroup.Item value="express" class={item}>
      <SegmentGroup.ItemText>Express</SegmentGroup.ItemText>
      <Span color="fg.muted" fontWeight="normal">1–2 business days</Span>
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
    <SegmentGroup.Item value="overnight" class={item}>
      <SegmentGroup.ItemText>Overnight</SegmentGroup.ItemText>
      <Span color="fg.muted" fontWeight="normal">Next business day</Span>
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  </SegmentGroup.Root>
</Box>
