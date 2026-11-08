<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { DatePicker, parseDate } from "@isbatak/svelte-ui/date-picker"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  let value = $state([parseDate("2026-11-08")])
</script>

<Stack gap="3" maxW="xs">
  <DatePicker.Root bind:value>
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
  <Text textStyle="sm" color="fg.muted">Value: {value[0]?.toString() ?? "none"}</Text>
</Stack>
