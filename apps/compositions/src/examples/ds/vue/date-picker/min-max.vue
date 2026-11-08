<script setup lang="ts">
import { DatePicker, parseDate } from "@isbatak/vue-ui/date-picker"
</script>

<template>
  <DatePicker.Root :min="parseDate('2026-11-01')" :max="parseDate('2026-11-30')" maxW="xs">
    <DatePicker.Label>Delivery date</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Input />
      <DatePicker.IndicatorGroup>
        <DatePicker.Trigger />
      </DatePicker.IndicatorGroup>
    </DatePicker.Control>
    <Teleport to="body">
      <DatePicker.Positioner>
        <DatePicker.Content>
          <DatePicker.View view="day">
            <DatePicker.Header />
            <DatePicker.DayTable />
          </DatePicker.View>
          <DatePicker.View view="month">
            <DatePicker.Header />
            <DatePicker.MonthTable />
          </DatePicker.View>
          <DatePicker.View view="year">
            <DatePicker.Header />
            <DatePicker.YearTable />
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </Teleport>
  </DatePicker.Root>
</template>
