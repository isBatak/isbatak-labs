import { Portal } from "@ark-ui/react/portal"
import { DatePicker } from "@isbatak/react-ui/date-picker"
import { field } from "@isbatak/panda-ds/recipes"

export function DatePickerInvalidDemo() {
  const fieldClasses = field()

  return (
    <DatePicker.Root invalid maxW="xs">
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
      <span className={fieldClasses.errorText}>Pick a date in the future.</span>
    </DatePicker.Root>
  )
}
