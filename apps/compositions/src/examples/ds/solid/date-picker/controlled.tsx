import { DatePicker, parseDate } from "@isbatak/solid-ui/date-picker"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { createSignal } from "solid-js"
import { Portal } from "solid-js/web"

export function DatePickerControlledDemo() {
  const [value, setValue] = createSignal([parseDate("2026-11-08")])

  return (
    <Stack gap="3" maxW="xs">
      <DatePicker.Root value={value()} onValueChange={(details) => setValue(details.value)}>
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
      <Text textStyle="sm" color="fg.muted">
        Value: {value()[0]?.toString() ?? "none"}
      </Text>
    </Stack>
  )
}
