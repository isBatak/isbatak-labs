<script setup lang="ts">
import { DatePicker, parseDate } from "@isbatak/vue-ui/date-picker"
</script>

<template>
  <DatePicker.Root :defaultValue="[parseDate('2026-11-08')]" maxW="xs">
    <DatePicker.Label>Date</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Input />
      <DatePicker.IndicatorGroup>
        <DatePicker.ClearTrigger />
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
