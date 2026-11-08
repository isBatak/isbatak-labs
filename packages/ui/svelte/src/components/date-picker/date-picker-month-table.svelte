<script module lang="ts">
  import type { DatePickerTableProps } from "./date-picker-table.svelte"

  export type DatePickerMonthTableProps = DatePickerTableProps
</script>

<script lang="ts">
  import { useDatePickerContext } from "@ark-ui/svelte/date-picker"

  import DatePickerTable from "./date-picker-table.svelte"
  import DatePickerTableBody from "./date-picker-table-body.svelte"
  import DatePickerTableCell from "./date-picker-table-cell.svelte"
  import DatePickerTableCellTrigger from "./date-picker-table-cell-trigger.svelte"
  import DatePickerTableRow from "./date-picker-table-row.svelte"

  let { ...props }: DatePickerMonthTableProps = $props()
  const datePicker = useDatePickerContext()
</script>

<DatePickerTable columns={4} {...props}>
  <DatePickerTableBody>
    {#each datePicker().getMonthsGrid({ columns: 4, format: "short" }) as months (months[0]?.value)}
      <DatePickerTableRow>
        {#each months as month (month.value)}
          <DatePickerTableCell value={month.value}>
            <DatePickerTableCellTrigger>{month.label}</DatePickerTableCellTrigger>
          </DatePickerTableCell>
        {/each}
      </DatePickerTableRow>
    {/each}
  </DatePickerTableBody>
</DatePickerTable>
