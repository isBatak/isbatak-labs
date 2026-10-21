import { Table } from "@isbatak/react-ui/table"
import { styled } from "styled-system/jsx"

export function TableStickyDemo() {
  return (
    <styled.div overflow="auto" maxH="64" w="full" borderWidth="1px" borderRadius="l2">
      <Table.Root stickyHeader highlightedHeader minW="2xl" whiteSpace="nowrap">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader sticky="start">Name</Table.ColumnHeader>
            <Table.ColumnHeader>Team</Table.ColumnHeader>
            <Table.ColumnHeader>Location</Table.ColumnHeader>
            <Table.ColumnHeader>Role</Table.ColumnHeader>
            <Table.ColumnHeader sticky="end">Status</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell sticky="start">Ada Lovelace</Table.Cell>
            <Table.Cell>Engineering</Table.Cell>
            <Table.Cell>London</Table.Cell>
            <Table.Cell>Lead</Table.Cell>
            <Table.Cell sticky="end">Active</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell sticky="start">Grace Hopper</Table.Cell>
            <Table.Cell>Platform</Table.Cell>
            <Table.Cell>Arlington</Table.Cell>
            <Table.Cell>Principal</Table.Cell>
            <Table.Cell sticky="end">Active</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell sticky="start">Alan Turing</Table.Cell>
            <Table.Cell>Research</Table.Cell>
            <Table.Cell>Manchester</Table.Cell>
            <Table.Cell>Fellow</Table.Cell>
            <Table.Cell sticky="end">Away</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell sticky="start">Katherine Johnson</Table.Cell>
            <Table.Cell>Analytics</Table.Cell>
            <Table.Cell>Hampton</Table.Cell>
            <Table.Cell>Senior</Table.Cell>
            <Table.Cell sticky="end">Active</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell sticky="start">Linus Torvalds</Table.Cell>
            <Table.Cell>Kernel</Table.Cell>
            <Table.Cell>Portland</Table.Cell>
            <Table.Cell>Maintainer</Table.Cell>
            <Table.Cell sticky="end">Active</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell sticky="start">Margaret Hamilton</Table.Cell>
            <Table.Cell>Flight software</Table.Cell>
            <Table.Cell>Boston</Table.Cell>
            <Table.Cell>Director</Table.Cell>
            <Table.Cell sticky="end">Away</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell sticky="start">Dennis Ritchie</Table.Cell>
            <Table.Cell>Languages</Table.Cell>
            <Table.Cell>Murray Hill</Table.Cell>
            <Table.Cell>Staff</Table.Cell>
            <Table.Cell sticky="end">Active</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell sticky="start">Barbara Liskov</Table.Cell>
            <Table.Cell>Systems</Table.Cell>
            <Table.Cell>Cambridge</Table.Cell>
            <Table.Cell>Professor</Table.Cell>
            <Table.Cell sticky="end">Active</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </styled.div>
  )
}
