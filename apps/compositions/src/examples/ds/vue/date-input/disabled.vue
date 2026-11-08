<script setup lang="ts">
import { DateInput, parseDate } from "@isbatak/vue-ui/date-input"
</script>

<template>
  <DateInput.Root :disabled="true" :defaultValue="[parseDate('2026-11-08')]" maxW="xs">
    <DateInput.Label>Date</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup>
        <DateInput.Segments />
      </DateInput.SegmentGroup>
    </DateInput.Control>
    <DateInput.HiddenInput />
  </DateInput.Root>
</template>
