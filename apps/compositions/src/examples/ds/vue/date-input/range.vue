<script setup lang="ts">
import { DateInput } from "@isbatak/vue-ui/date-input"
import { Span } from "@isbatak/vue-ui/span"
</script>

<template>
  <DateInput.Root selectionMode="range" maxW="sm">
    <DateInput.Label>Trip dates</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup :index="0">
        <DateInput.Segments />
      </DateInput.SegmentGroup>
      <Span color="fg.muted" px="2">–</Span>
      <DateInput.SegmentGroup :index="1">
        <DateInput.Segments />
      </DateInput.SegmentGroup>
    </DateInput.Control>
    <DateInput.HiddenInput />
  </DateInput.Root>
</template>
