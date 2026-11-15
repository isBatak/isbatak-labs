<script lang="ts">
  import { GridVirtualizer, useGridVirtualizer } from "@isbatak/svelte-ui/virtualizer"
  import { css } from "styled-system/css"

  const virtualizer = useGridVirtualizer(() => ({
    observeScrollElementSize: true,
    rowCount: 1000,
    columnCount: 50,
    estimatedRowSize: () => 40,
    estimatedColumnSize: () => 120,
  }))
</script>

<GridVirtualizer.Root value={virtualizer} striped class={css({ h: "96", maxW: "4xl" })}>
  <GridVirtualizer.Content>
    {#each virtualizer.getVirtualRows() as row (row.row)}
      <GridVirtualizer.Row {row}>
        {#each row.columns as column (column.column)}
          <GridVirtualizer.Cell {column}>R{row.row + 1}C{column.column + 1}</GridVirtualizer.Cell>
        {/each}
      </GridVirtualizer.Row>
    {/each}
  </GridVirtualizer.Content>
</GridVirtualizer.Root>
