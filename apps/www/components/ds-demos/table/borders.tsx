import { Table } from "@isbatak/react-ui/table"
import { Stack } from "styled-system/jsx"

export function TableBordersDemo() {
  return (
    <Stack gap="8" w="full">
      <Table.Root showColumnBorder>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Region</Table.ColumnHeader>
            <Table.ColumnHeader>Q1</Table.ColumnHeader>
            <Table.ColumnHeader>Q2</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Europe</Table.Cell>
            <Table.Cell>1,204</Table.Cell>
            <Table.Cell>1,388</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Americas</Table.Cell>
            <Table.Cell>980</Table.Cell>
            <Table.Cell>1,102</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <Table.Root showRowBorder={false}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Region</Table.ColumnHeader>
            <Table.ColumnHeader>Q1</Table.ColumnHeader>
            <Table.ColumnHeader>Q2</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Europe</Table.Cell>
            <Table.Cell>1,204</Table.Cell>
            <Table.Cell>1,388</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Americas</Table.Cell>
            <Table.Cell>980</Table.Cell>
            <Table.Cell>1,102</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Stack>
  )
}
