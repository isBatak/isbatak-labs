<script setup lang="ts">
import { DateInput } from "@isbatak/vue-ui/date-input"
</script>

<template>
  <DateInput.Root maxW="xs">
    <DateInput.Label>Date</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup>
        <DateInput.Segments />
      </DateInput.SegmentGroup>
    </DateInput.Control>
    <DateInput.HiddenInput />
  </DateInput.Root>
</template>
