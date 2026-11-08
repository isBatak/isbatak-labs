<script setup lang="ts">
import { DateInput, parseDate } from "@isbatak/vue-ui/date-input"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

const value = ref([parseDate("2026-11-08")])
</script>

<template>
  <Stack gap="3" maxW="xs">
    <DateInput.Root v-model="value">
      <DateInput.Label>Date</DateInput.Label>
      <DateInput.Control>
        <DateInput.SegmentGroup>
          <DateInput.Segments />
        </DateInput.SegmentGroup>
      </DateInput.Control>
      <DateInput.HiddenInput />
    </DateInput.Root>
    <Text textStyle="sm" color="fg.muted">Value: {{ value[0]?.toString() ?? "none" }}</Text>
  </Stack>
</template>
