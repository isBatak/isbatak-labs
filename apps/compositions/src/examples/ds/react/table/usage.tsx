import { Table } from "@isbatak/react-ui/table"

export function TableDemo() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Product</Table.ColumnHeader>
          <Table.ColumnHeader>Category</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Laptop</Table.Cell>
          <Table.Cell>Electronics</Table.Cell>
          <Table.Cell textAlign="end">$999.99</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Coffee maker</Table.Cell>
          <Table.Cell>Home appliances</Table.Cell>
          <Table.Cell textAlign="end">$49.99</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Desk chair</Table.Cell>
          <Table.Cell>Furniture</Table.Cell>
          <Table.Cell textAlign="end">$150.00</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={2}>Total</Table.Cell>
          <Table.Cell textAlign="end">$1,199.98</Table.Cell>
        </Table.Row>
      </Table.Footer>
      <Table.Caption>Prices include tax.</Table.Caption>
    </Table.Root>
  )
}
