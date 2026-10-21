import { GridTable } from "@isbatak/react-ui/grid-table"

export function GridTableInteractiveDemo() {
  return (
    <GridTable.Root columns="1fr 1fr 1fr" interactive showColumnBorder>
      <GridTable.Header>
        <GridTable.HeaderRow>
          <GridTable.ColumnHeader>Branch</GridTable.ColumnHeader>
          <GridTable.ColumnHeader>Author</GridTable.ColumnHeader>
          <GridTable.ColumnHeader>Checks</GridTable.ColumnHeader>
        </GridTable.HeaderRow>
      </GridTable.Header>
      <GridTable.Body>
        <GridTable.Row>
          <GridTable.Cell>main</GridTable.Cell>
          <GridTable.Cell>ivica</GridTable.Cell>
          <GridTable.Cell>Passing</GridTable.Cell>
        </GridTable.Row>
        <GridTable.Row selected>
          <GridTable.Cell>feat/toc</GridTable.Cell>
          <GridTable.Cell>ivica</GridTable.Cell>
          <GridTable.Cell>Running</GridTable.Cell>
        </GridTable.Row>
        <GridTable.Row>
          <GridTable.Cell>fix/drawer</GridTable.Cell>
          <GridTable.Cell>ana</GridTable.Cell>
          <GridTable.Cell>Failing</GridTable.Cell>
        </GridTable.Row>
      </GridTable.Body>
    </GridTable.Root>
  )
}
