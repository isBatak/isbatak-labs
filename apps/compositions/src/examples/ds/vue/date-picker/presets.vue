<script setup lang="ts">
import { DatePicker } from "@isbatak/vue-ui/date-picker"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <DatePicker.Root selectionMode="range" maxW="sm">
    <DatePicker.Label>Report period</DatePicker.Label>
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
          <HStack gap="2" flexWrap="wrap">
            <DatePicker.PresetTrigger value="last7Days">Last 7 days</DatePicker.PresetTrigger>
            <DatePicker.PresetTrigger value="last30Days">Last 30 days</DatePicker.PresetTrigger>
            <DatePicker.PresetTrigger value="thisMonth">This month</DatePicker.PresetTrigger>
          </HStack>
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
