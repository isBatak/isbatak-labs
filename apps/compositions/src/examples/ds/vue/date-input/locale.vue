<script setup lang="ts">
import { DateInput, parseDate } from "@isbatak/vue-ui/date-input"
</script>

<template>
  <DateInput.Root locale="de-DE" :defaultValue="[parseDate('2026-11-08')]" maxW="xs">
    <DateInput.Label>Datum</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup>
        <DateInput.Segments />
      </DateInput.SegmentGroup>
    </DateInput.Control>
    <DateInput.HiddenInput />
  </DateInput.Root>
</template>
