<script setup lang="ts">
import { DateInput } from "@isbatak/vue-ui/date-input"
import { field } from "@isbatak/panda-ds/recipes"

const fieldClasses = field()
</script>

<template>
  <DateInput.Root :invalid="true" maxW="xs">
    <DateInput.Label>Date</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup>
        <DateInput.Segments />
      </DateInput.SegmentGroup>
    </DateInput.Control>
    <DateInput.HiddenInput />
    <span :class="fieldClasses.errorText">Enter a date in the future.</span>
  </DateInput.Root>
</template>
