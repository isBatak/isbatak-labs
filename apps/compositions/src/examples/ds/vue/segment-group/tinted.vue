<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { SegmentGroup } from "@isbatak/vue-ui/segment-group"
</script>

<template>
  <Box colorPalette="green">
    <SegmentGroup.Root orientation="horizontal" defaultValue="week" :tinted="true" aria-label="Range">
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
  </Box>
</template>
