<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { DatePicker } from "@isbatak/svelte-ui/date-picker"
  import { css } from "styled-system/css"
</script>

<DatePicker.Root selectionMode="range" class={css({ maxW: "sm" })}>
  <DatePicker.Label>Trip dates</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Input index={0} />
    <DatePicker.Input index={1} />
    <DatePicker.IndicatorGroup>
      <DatePicker.Trigger />
    </DatePicker.IndicatorGroup>
  </DatePicker.Control>
  <Portal>
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
  </Portal>
</DatePicker.Root>
