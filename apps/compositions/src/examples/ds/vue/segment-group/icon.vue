<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { SegmentGroup } from "@isbatak/vue-ui/segment-group"
</script>

<template>
  <SegmentGroup.Root orientation="horizontal" defaultValue="grid" :icon="true" aria-label="Layout">
    <SegmentGroup.Indicator />
    <SegmentGroup.Item value="grid" aria-label="Grid">
      <SegmentGroup.ItemText>
        <Icon name="grid" />
      </SegmentGroup.ItemText>
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
    <SegmentGroup.Item value="list" aria-label="List">
      <SegmentGroup.ItemText>
        <Icon name="menu" />
      </SegmentGroup.ItemText>
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  </SegmentGroup.Root>
</template>
