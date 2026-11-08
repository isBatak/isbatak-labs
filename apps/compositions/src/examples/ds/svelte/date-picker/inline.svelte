<script lang="ts">
  import { DatePicker } from "@isbatak/svelte-ui/date-picker"
  import { css } from "styled-system/css"
</script>

<DatePicker.Root inline class={css({ maxW: "xs" })}>
  <DatePicker.Label>Date</DatePicker.Label>
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
</DatePicker.Root>
