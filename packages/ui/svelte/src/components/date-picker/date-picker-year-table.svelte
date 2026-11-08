<script module lang="ts">
  import type { DatePickerTableProps } from "./date-picker-table.svelte"

  export type DatePickerYearTableProps = DatePickerTableProps
</script>

<script lang="ts">
  import { useDatePickerContext } from "@ark-ui/svelte/date-picker"

  import DatePickerTable from "./date-picker-table.svelte"
  import DatePickerTableBody from "./date-picker-table-body.svelte"
  import DatePickerTableCell from "./date-picker-table-cell.svelte"
  import DatePickerTableCellTrigger from "./date-picker-table-cell-trigger.svelte"
  import DatePickerTableRow from "./date-picker-table-row.svelte"

  let { ...props }: DatePickerYearTableProps = $props()
  const datePicker = useDatePickerContext()
</script>

<DatePickerTable columns={4} {...props}>
  <DatePickerTableBody>
    {#each datePicker().getYearsGrid({ columns: 4 }) as years (years[0]?.value)}
      <DatePickerTableRow>
        {#each years as year (year.value)}
          <DatePickerTableCell value={year.value}>
            <DatePickerTableCellTrigger>{year.label}</DatePickerTableCellTrigger>
          </DatePickerTableCell>
        {/each}
      </DatePickerTableRow>
    {/each}
  </DatePickerTableBody>
</DatePickerTable>
