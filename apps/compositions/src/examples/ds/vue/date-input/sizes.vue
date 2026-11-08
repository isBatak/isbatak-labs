<script setup lang="ts">
import { DateInput } from "@isbatak/vue-ui/date-input"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="4" maxW="xs">
    <DateInput.Root size="xs">
      <DateInput.Label>size xs</DateInput.Label>
      <DateInput.Control>
        <DateInput.SegmentGroup>
          <DateInput.Segments />
        </DateInput.SegmentGroup>
      </DateInput.Control>
      <DateInput.HiddenInput />
    </DateInput.Root>
    <DateInput.Root size="sm">
      <DateInput.Label>size sm</DateInput.Label>
      <DateInput.Control>
        <DateInput.SegmentGroup>
          <DateInput.Segments />
        </DateInput.SegmentGroup>
      </DateInput.Control>
      <DateInput.HiddenInput />
    </DateInput.Root>
    <DateInput.Root size="md">
      <DateInput.Label>size md</DateInput.Label>
      <DateInput.Control>
        <DateInput.SegmentGroup>
          <DateInput.Segments />
        </DateInput.SegmentGroup>
      </DateInput.Control>
      <DateInput.HiddenInput />
    </DateInput.Root>
    <DateInput.Root size="lg">
      <DateInput.Label>size lg</DateInput.Label>
      <DateInput.Control>
        <DateInput.SegmentGroup>
          <DateInput.Segments />
        </DateInput.SegmentGroup>
      </DateInput.Control>
      <DateInput.HiddenInput />
    </DateInput.Root>
  </Stack>
</template>
