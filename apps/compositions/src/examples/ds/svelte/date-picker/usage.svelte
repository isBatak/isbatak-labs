<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { DatePicker } from "@isbatak/svelte-ui/date-picker"
  import { css } from "styled-system/css"
</script>

<DatePicker.Root class={css({ maxW: "xs" })}>
  <DatePicker.Label>Date</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Input />
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
