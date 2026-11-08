<script setup lang="ts">
import { DatePicker } from "@isbatak/vue-ui/date-picker"
</script>

<template>
  <DatePicker.Root selectionMode="range" maxW="sm">
    <DatePicker.Label>Trip dates</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Input :index="0" />
      <DatePicker.Input :index="1" />
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
