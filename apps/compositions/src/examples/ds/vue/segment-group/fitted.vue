<script setup lang="ts">
import { SegmentGroup } from "@isbatak/vue-ui/segment-group"
</script>

<template>
  <SegmentGroup.Root orientation="horizontal" defaultValue="week" fitted w="full" maxW="sm" aria-label="Range">
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
</template>
