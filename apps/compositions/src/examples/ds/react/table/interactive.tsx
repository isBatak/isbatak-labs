import { Table } from "@isbatak/react-ui/table"

export function TableInteractiveDemo() {
  return (
    <Table.Root interactive>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Invoice</Table.ColumnHeader>
          <Table.ColumnHeader>Customer</Table.ColumnHeader>
          <Table.ColumnHeader>Status</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>INV-001</Table.Cell>
          <Table.Cell>Acme</Table.Cell>
          <Table.Cell>Paid</Table.Cell>
        </Table.Row>
        <Table.Row selected>
          <Table.Cell>INV-002</Table.Cell>
          <Table.Cell>Globex</Table.Cell>
          <Table.Cell>Pending</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>INV-003</Table.Cell>
          <Table.Cell>Initech</Table.Cell>
          <Table.Cell>Overdue</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}
