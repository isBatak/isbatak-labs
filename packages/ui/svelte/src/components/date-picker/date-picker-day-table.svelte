<script module lang="ts">
  import type { DatePickerTableProps } from "./date-picker-table.svelte"

  export type DatePickerDayTableProps = DatePickerTableProps
</script>

<script lang="ts">
  import { useDatePickerContext } from "@ark-ui/svelte/date-picker"

  import DatePickerTable from "./date-picker-table.svelte"
  import DatePickerTableBody from "./date-picker-table-body.svelte"
  import DatePickerTableCell from "./date-picker-table-cell.svelte"
  import DatePickerTableCellTrigger from "./date-picker-table-cell-trigger.svelte"
  import DatePickerTableRow from "./date-picker-table-row.svelte"
  import DatePickerTableHead from "./date-picker-table-head.svelte"
  import DatePickerTableHeader from "./date-picker-table-header.svelte"

  let { ...props }: DatePickerDayTableProps = $props()
  const datePicker = useDatePickerContext()
</script>

<DatePickerTable {...props}>
  <DatePickerTableHead>
    <DatePickerTableRow>
      {#each datePicker().weekDays as weekDay (weekDay.long)}
        <DatePickerTableHeader>{weekDay.narrow}</DatePickerTableHeader>
      {/each}
    </DatePickerTableRow>
  </DatePickerTableHead>
  <DatePickerTableBody>
    {#each datePicker().weeks as week (week[0]?.toString())}
      <DatePickerTableRow>
        {#each week as day (day.toString())}
          <DatePickerTableCell value={day}>
            <DatePickerTableCellTrigger>{day.day}</DatePickerTableCellTrigger>
          </DatePickerTableCell>
        {/each}
      </DatePickerTableRow>
    {/each}
  </DatePickerTableBody>
</DatePickerTable>
