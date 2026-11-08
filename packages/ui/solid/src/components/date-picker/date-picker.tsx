import { DatePicker, useDatePickerContext } from "@ark-ui/solid/date-picker"
import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, For, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { datePicker } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon"

const { withProvider, withContext } = createSlotRecipeContext(datePicker)

export const DatePickerRoot = withProvider(DatePicker.Root, "root")
export type DatePickerRootProps = ComponentProps<typeof DatePickerRoot>

export const DatePickerRootProvider = withProvider(DatePicker.RootProvider, "root")
export type DatePickerRootProviderProps = ComponentProps<typeof DatePickerRootProvider>

export const DatePickerLabel = withContext(DatePicker.Label, "label")
export type DatePickerLabelProps = ComponentProps<typeof DatePickerLabel>

export const DatePickerControl = withContext(DatePicker.Control, "control")
export type DatePickerControlProps = ComponentProps<typeof DatePickerControl>

export const DatePickerInput = withContext(DatePicker.Input, "input")
export type DatePickerInputProps = ComponentProps<typeof DatePickerInput>

export const DatePickerIndicatorGroup = withContext(ark.div, "indicatorGroup")
export type DatePickerIndicatorGroupProps = ComponentProps<typeof DatePickerIndicatorGroup>

export const DatePickerPositioner = withContext(DatePicker.Positioner, "positioner")
export type DatePickerPositionerProps = ComponentProps<typeof DatePickerPositioner>

export const DatePickerContent = withContext(DatePicker.Content, "content")
export type DatePickerContentProps = ComponentProps<typeof DatePickerContent>

export const DatePickerView = withContext(DatePicker.View, "view")
export type DatePickerViewProps = ComponentProps<typeof DatePickerView>

export const DatePickerViewControl = withContext(DatePicker.ViewControl, "viewControl")
export type DatePickerViewControlProps = ComponentProps<typeof DatePickerViewControl>

export const DatePickerViewTrigger = withContext(DatePicker.ViewTrigger, "viewTrigger")
export type DatePickerViewTriggerProps = ComponentProps<typeof DatePickerViewTrigger>

export const DatePickerRangeText = withContext(DatePicker.RangeText, "rangeText")
export type DatePickerRangeTextProps = ComponentProps<typeof DatePickerRangeText>

export const DatePickerValueText = withContext(DatePicker.ValueText, "valueText")
export type DatePickerValueTextProps = ComponentProps<typeof DatePickerValueText>

export const DatePickerTable = withContext(DatePicker.Table, "table")
export type DatePickerTableProps = ComponentProps<typeof DatePickerTable>

export const DatePickerTableHead = withContext(DatePicker.TableHead, "tableHead")
export type DatePickerTableHeadProps = ComponentProps<typeof DatePickerTableHead>

export const DatePickerTableBody = withContext(DatePicker.TableBody, "tableBody")
export type DatePickerTableBodyProps = ComponentProps<typeof DatePickerTableBody>

export const DatePickerTableRow = withContext(DatePicker.TableRow, "tableRow")
export type DatePickerTableRowProps = ComponentProps<typeof DatePickerTableRow>

export const DatePickerTableHeader = withContext(DatePicker.TableHeader, "tableHeader")
export type DatePickerTableHeaderProps = ComponentProps<typeof DatePickerTableHeader>

export const DatePickerTableCell = withContext(DatePicker.TableCell, "tableCell")
export type DatePickerTableCellProps = ComponentProps<typeof DatePickerTableCell>

export const DatePickerTableCellTrigger = withContext(DatePicker.TableCellTrigger, "tableCellTrigger")
export type DatePickerTableCellTriggerProps = ComponentProps<typeof DatePickerTableCellTrigger>

export const DatePickerMonthSelect = withContext(DatePicker.MonthSelect, "monthSelect")
export type DatePickerMonthSelectProps = ComponentProps<typeof DatePickerMonthSelect>

export const DatePickerYearSelect = withContext(DatePicker.YearSelect, "yearSelect")
export type DatePickerYearSelectProps = ComponentProps<typeof DatePickerYearSelect>

export const DatePickerPresetTrigger = withContext(DatePicker.PresetTrigger, "presetTrigger")
export type DatePickerPresetTriggerProps = ComponentProps<typeof DatePickerPresetTrigger>

const StyledDatePickerTrigger = withContext(DatePicker.Trigger, "trigger")
export type DatePickerTriggerProps = ComponentProps<typeof StyledDatePickerTrigger>

export function DatePickerTrigger(props: DatePickerTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return <StyledDatePickerTrigger {...rest}>{local.children ?? <Icon name="calendar" />}</StyledDatePickerTrigger>
}

const StyledDatePickerClearTrigger = withContext(DatePicker.ClearTrigger, "clearTrigger")
export type DatePickerClearTriggerProps = ComponentProps<typeof StyledDatePickerClearTrigger>

export function DatePickerClearTrigger(props: DatePickerClearTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledDatePickerClearTrigger aria-label="Clear date" {...rest}>
      {local.children ?? <Icon name="close" />}
    </StyledDatePickerClearTrigger>
  )
}

const StyledDatePickerPrevTrigger = withContext(DatePicker.PrevTrigger, "prevTrigger")
export type DatePickerPrevTriggerProps = ComponentProps<typeof StyledDatePickerPrevTrigger>

export function DatePickerPrevTrigger(props: DatePickerPrevTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledDatePickerPrevTrigger {...rest}>
      {local.children ?? <Icon name="chevron-left" />}
    </StyledDatePickerPrevTrigger>
  )
}

const StyledDatePickerNextTrigger = withContext(DatePicker.NextTrigger, "nextTrigger")
export type DatePickerNextTriggerProps = ComponentProps<typeof StyledDatePickerNextTrigger>

export function DatePickerNextTrigger(props: DatePickerNextTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledDatePickerNextTrigger {...rest}>
      {local.children ?? <Icon name="chevron-right" />}
    </StyledDatePickerNextTrigger>
  )
}

export type DatePickerHeaderProps = DatePickerViewControlProps

export function DatePickerHeader(props: DatePickerHeaderProps) {
  return (
    <DatePickerViewControl {...props}>
      <DatePickerPrevTrigger />
      <DatePickerViewTrigger>
        <DatePickerRangeText />
      </DatePickerViewTrigger>
      <DatePickerNextTrigger />
    </DatePickerViewControl>
  )
}

export type DatePickerDayTableProps = DatePickerTableProps

export function DatePickerDayTable(props: DatePickerDayTableProps) {
  const datePicker = useDatePickerContext()
  return (
    <DatePickerTable {...props}>
      <DatePickerTableHead>
        <DatePickerTableRow>
          <For each={datePicker().weekDays}>
            {(weekDay) => <DatePickerTableHeader>{weekDay.narrow}</DatePickerTableHeader>}
          </For>
        </DatePickerTableRow>
      </DatePickerTableHead>
      <DatePickerTableBody>
        <For each={datePicker().weeks}>
          {(week) => (
            <DatePickerTableRow>
              <For each={week}>
                {(day) => (
                  <DatePickerTableCell value={day}>
                    <DatePickerTableCellTrigger>{day.day}</DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                )}
              </For>
            </DatePickerTableRow>
          )}
        </For>
      </DatePickerTableBody>
    </DatePickerTable>
  )
}

export type DatePickerMonthTableProps = DatePickerTableProps

export function DatePickerMonthTable(props: DatePickerMonthTableProps) {
  const datePicker = useDatePickerContext()
  return (
    <DatePickerTable columns={4} {...props}>
      <DatePickerTableBody>
        <For each={datePicker().getMonthsGrid({ columns: 4, format: "short" })}>
          {(months) => (
            <DatePickerTableRow>
              <For each={months}>
                {(month) => (
                  <DatePickerTableCell value={month.value}>
                    <DatePickerTableCellTrigger>{month.label}</DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                )}
              </For>
            </DatePickerTableRow>
          )}
        </For>
      </DatePickerTableBody>
    </DatePickerTable>
  )
}

export type DatePickerYearTableProps = DatePickerTableProps

export function DatePickerYearTable(props: DatePickerYearTableProps) {
  const datePicker = useDatePickerContext()
  return (
    <DatePickerTable columns={4} {...props}>
      <DatePickerTableBody>
        <For each={datePicker().getYearsGrid({ columns: 4 })}>
          {(years) => (
            <DatePickerTableRow>
              <For each={years}>
                {(year) => (
                  <DatePickerTableCell value={year.value}>
                    <DatePickerTableCellTrigger>{year.label}</DatePickerTableCellTrigger>
                  </DatePickerTableCell>
                )}
              </For>
            </DatePickerTableRow>
          )}
        </For>
      </DatePickerTableBody>
    </DatePickerTable>
  )
}

export const DatePickerContext = DatePicker.Context
export type DatePickerContextProps = ComponentProps<typeof DatePickerContext>
