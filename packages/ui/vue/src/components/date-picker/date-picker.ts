import { DatePicker, useDatePickerContext } from "@ark-ui/vue/date-picker"
import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
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

export const DatePickerTrigger = defineComponent({
  name: "DatePickerTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledDatePickerTrigger as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "calendar" }))
  },
}) as unknown as typeof StyledDatePickerTrigger

const StyledDatePickerClearTrigger = withContext(DatePicker.ClearTrigger, "clearTrigger")
export type DatePickerClearTriggerProps = ComponentProps<typeof StyledDatePickerClearTrigger>

export const DatePickerClearTrigger = defineComponent({
  name: "DatePickerClearTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(
        StyledDatePickerClearTrigger as Component,
        { "aria-label": "Clear date", ...attrs },
        () => slots.default?.() ?? h(Icon, { name: "close" }),
      )
  },
}) as unknown as typeof StyledDatePickerClearTrigger

const StyledDatePickerPrevTrigger = withContext(DatePicker.PrevTrigger, "prevTrigger")
export type DatePickerPrevTriggerProps = ComponentProps<typeof StyledDatePickerPrevTrigger>

export const DatePickerPrevTrigger = defineComponent({
  name: "DatePickerPrevTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledDatePickerPrevTrigger as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "chevron-left" }))
  },
}) as unknown as typeof StyledDatePickerPrevTrigger

const StyledDatePickerNextTrigger = withContext(DatePicker.NextTrigger, "nextTrigger")
export type DatePickerNextTriggerProps = ComponentProps<typeof StyledDatePickerNextTrigger>

export const DatePickerNextTrigger = defineComponent({
  name: "DatePickerNextTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledDatePickerNextTrigger as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "chevron-right" }))
  },
}) as unknown as typeof StyledDatePickerNextTrigger

export type DatePickerHeaderProps = DatePickerViewControlProps

export const DatePickerHeader = defineComponent({
  name: "DatePickerHeader",
  inheritAttrs: false,
  setup(_, { attrs }) {
    return () =>
      h(DatePickerViewControl as Component, attrs, () => [
        h(DatePickerPrevTrigger as Component),
        h(DatePickerViewTrigger as Component, null, () => h(DatePickerRangeText as Component)),
        h(DatePickerNextTrigger as Component),
      ])
  },
}) as unknown as Component<DatePickerHeaderProps>

export type DatePickerDayTableProps = DatePickerTableProps

export const DatePickerDayTable = defineComponent({
  name: "DatePickerDayTable",
  inheritAttrs: false,
  setup(_, { attrs }) {
    const datePicker = useDatePickerContext()
    return () =>
      h(DatePickerTable as Component, attrs, () => [
        h(DatePickerTableHead as Component, null, () =>
          h(DatePickerTableRow as Component, null, () =>
            datePicker.value.weekDays.map((weekDay) =>
              h(DatePickerTableHeader as Component, { key: weekDay.long }, () => weekDay.narrow),
            ),
          ),
        ),
        h(DatePickerTableBody as Component, null, () =>
          datePicker.value.weeks.map((week) =>
            h(DatePickerTableRow as Component, { key: week[0]?.toString() }, () =>
              week.map((day) =>
                h(DatePickerTableCell as Component, { key: day.toString(), value: day }, () =>
                  h(DatePickerTableCellTrigger as Component, null, () => day.day),
                ),
              ),
            ),
          ),
        ),
      ])
  },
}) as unknown as Component<DatePickerDayTableProps>

export type DatePickerMonthTableProps = DatePickerTableProps

export const DatePickerMonthTable = defineComponent({
  name: "DatePickerMonthTable",
  inheritAttrs: false,
  setup(_, { attrs }) {
    const datePicker = useDatePickerContext()
    return () =>
      h(DatePickerTable as Component, { columns: 4, ...attrs }, () =>
        h(DatePickerTableBody as Component, null, () =>
          datePicker.value
            .getMonthsGrid({ columns: 4, format: "short" })
            .map((months) =>
              h(DatePickerTableRow as Component, { key: months[0]?.value }, () =>
                months.map((month) =>
                  h(DatePickerTableCell as Component, { key: month.value, value: month.value }, () =>
                    h(DatePickerTableCellTrigger as Component, null, () => month.label),
                  ),
                ),
              ),
            ),
        ),
      )
  },
}) as unknown as Component<DatePickerMonthTableProps>

export type DatePickerYearTableProps = DatePickerTableProps

export const DatePickerYearTable = defineComponent({
  name: "DatePickerYearTable",
  inheritAttrs: false,
  setup(_, { attrs }) {
    const datePicker = useDatePickerContext()
    return () =>
      h(DatePickerTable as Component, { columns: 4, ...attrs }, () =>
        h(DatePickerTableBody as Component, null, () =>
          datePicker.value
            .getYearsGrid({ columns: 4 })
            .map((years) =>
              h(DatePickerTableRow as Component, { key: years[0]?.value }, () =>
                years.map((year) =>
                  h(DatePickerTableCell as Component, { key: year.value, value: year.value }, () =>
                    h(DatePickerTableCellTrigger as Component, null, () => year.label),
                  ),
                ),
              ),
            ),
        ),
      )
  },
}) as unknown as Component<DatePickerYearTableProps>

export const DatePickerContext = DatePicker.Context
export type DatePickerContextProps = ComponentProps<typeof DatePickerContext>
