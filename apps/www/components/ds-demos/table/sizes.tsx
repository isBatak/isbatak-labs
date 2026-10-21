import { Table } from "@isbatak/react-ui/table"
import { Stack } from "styled-system/jsx"

export function TableSizesDemo() {
  return (
    <Stack gap="8" w="full">
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Size</Table.ColumnHeader>
            <Table.ColumnHeader>Text</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>sm</Table.Cell>
            <Table.Cell>Extra small text with tight rows</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <Table.Root size="md">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Size</Table.ColumnHeader>
            <Table.ColumnHeader>Text</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>md</Table.Cell>
            <Table.Cell>Small text, the default</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <Table.Root size="lg">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Size</Table.ColumnHeader>
            <Table.ColumnHeader>Text</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>lg</Table.Cell>
            <Table.Cell>Medium text with roomy rows</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Stack>
  )
}
