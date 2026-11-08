<script setup lang="ts">
import { DatePicker } from "@isbatak/vue-ui/date-picker"
import { field } from "@isbatak/panda-ds/recipes"

const fieldClasses = field()
</script>

<template>
  <DatePicker.Root :invalid="true" maxW="xs">
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
    <span :class="fieldClasses.errorText">Pick a date in the future.</span>
  </DatePicker.Root>
</template>
