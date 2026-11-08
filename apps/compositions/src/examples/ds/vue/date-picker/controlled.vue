<script setup lang="ts">
import { DatePicker, parseDate } from "@isbatak/vue-ui/date-picker"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

const value = ref([parseDate("2026-11-08")])
</script>

<template>
  <Stack gap="3" maxW="xs">
    <DatePicker.Root v-model="value">
      <DatePicker.Label>Date</DatePicker.Label>
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
    <Text textStyle="sm" color="fg.muted">Value: {{ value[0]?.toString() ?? "none" }}</Text>
  </Stack>
</template>
