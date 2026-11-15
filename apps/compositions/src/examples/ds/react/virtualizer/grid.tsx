import { GridVirtualizer, useGridVirtualizer } from "@isbatak/react-ui/virtualizer"

export function VirtualizerGridDemo() {
  const virtualizer = useGridVirtualizer({
    observeScrollElementSize: true,
    rowCount: 1000,
    columnCount: 50,
    estimatedRowSize: () => 40,
    estimatedColumnSize: () => 120,
  })

  return (
    <GridVirtualizer.Root value={virtualizer} striped h="96" maxW="4xl">
      <GridVirtualizer.Content>
        {virtualizer.getVirtualRows().map((row) => (
          <GridVirtualizer.Row key={row.row} row={row}>
            {row.columns.map((column) => (
              <GridVirtualizer.Cell key={column.column} column={column}>
                R{row.row + 1}C{column.column + 1}
              </GridVirtualizer.Cell>
            ))}
          </GridVirtualizer.Row>
        ))}
      </GridVirtualizer.Content>
    </GridVirtualizer.Root>
  )
}
