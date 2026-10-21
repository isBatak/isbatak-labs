import { GridTable } from "@isbatak/react-ui/grid-table"

export function GridTableDemo() {
  return (
    <GridTable.Root columns="minmax(8rem, 2fr) minmax(6rem, 1fr) auto">
      <GridTable.Header>
        <GridTable.HeaderRow>
          <GridTable.ColumnHeader>File</GridTable.ColumnHeader>
          <GridTable.ColumnHeader>Owner</GridTable.ColumnHeader>
          <GridTable.ColumnHeader justifyContent="flex-end">Size</GridTable.ColumnHeader>
        </GridTable.HeaderRow>
      </GridTable.Header>
      <GridTable.Body>
        <GridTable.Row>
          <GridTable.Cell>brand-guidelines.pdf</GridTable.Cell>
          <GridTable.Cell>Design</GridTable.Cell>
          <GridTable.Cell justifyContent="flex-end">4.2 MB</GridTable.Cell>
        </GridTable.Row>
        <GridTable.Row>
          <GridTable.Cell>roadmap-2027.key</GridTable.Cell>
          <GridTable.Cell>Product</GridTable.Cell>
          <GridTable.Cell justifyContent="flex-end">18.9 MB</GridTable.Cell>
        </GridTable.Row>
        <GridTable.Row>
          <GridTable.Cell>invoice-0042.csv</GridTable.Cell>
          <GridTable.Cell>Finance</GridTable.Cell>
          <GridTable.Cell justifyContent="flex-end">12 KB</GridTable.Cell>
        </GridTable.Row>
      </GridTable.Body>
    </GridTable.Root>
  )
}
