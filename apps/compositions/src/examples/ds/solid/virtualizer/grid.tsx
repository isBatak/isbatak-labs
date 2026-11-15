import { GridVirtualizer, useGridVirtualizer } from "@isbatak/solid-ui/virtualizer"
import { Index } from "solid-js"

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
        <Index each={virtualizer.getVirtualRows()}>
          {(row) => (
            <GridVirtualizer.Row row={row()}>
              <Index each={row().columns}>
                {(column) => (
                  <GridVirtualizer.Cell column={column()}>
                    R{row().row + 1}C{column().column + 1}
                  </GridVirtualizer.Cell>
                )}
              </Index>
            </GridVirtualizer.Row>
          )}
        </Index>
      </GridVirtualizer.Content>
    </GridVirtualizer.Root>
  )
}
