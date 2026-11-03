import { GridTable } from "@isbatak/react-ui/grid-table"

export function GridTableStickyDemo() {
  return (
    <GridTable.Root
      columns="repeat(5, minmax(9rem, 1fr))"
      stickyHeader
      highlightedHeader
      maxH="64"
      borderWidth="1px"
      borderRadius="l2"
      whiteSpace="nowrap"
    >
      <GridTable.Header>
        <GridTable.HeaderRow>
          <GridTable.ColumnHeader sticky="start">Service</GridTable.ColumnHeader>
          <GridTable.ColumnHeader>Region</GridTable.ColumnHeader>
          <GridTable.ColumnHeader>Instances</GridTable.ColumnHeader>
          <GridTable.ColumnHeader>Uptime</GridTable.ColumnHeader>
          <GridTable.ColumnHeader sticky="end">Status</GridTable.ColumnHeader>
        </GridTable.HeaderRow>
      </GridTable.Header>
      <GridTable.Body>
        <GridTable.Row>
          <GridTable.Cell sticky="start">api-gateway</GridTable.Cell>
          <GridTable.Cell>eu-west-1</GridTable.Cell>
          <GridTable.Cell>3</GridTable.Cell>
          <GridTable.Cell>99.98%</GridTable.Cell>
          <GridTable.Cell sticky="end">Healthy</GridTable.Cell>
        </GridTable.Row>
        <GridTable.Row>
          <GridTable.Cell sticky="start">auth-service</GridTable.Cell>
          <GridTable.Cell>us-east-1</GridTable.Cell>
          <GridTable.Cell>5</GridTable.Cell>
          <GridTable.Cell>99.95%</GridTable.Cell>
          <GridTable.Cell sticky="end">Healthy</GridTable.Cell>
        </GridTable.Row>
        <GridTable.Row>
          <GridTable.Cell sticky="start">billing-worker</GridTable.Cell>
          <GridTable.Cell>eu-west-1</GridTable.Cell>
          <GridTable.Cell>2</GridTable.Cell>
          <GridTable.Cell>99.40%</GridTable.Cell>
          <GridTable.Cell sticky="end">Degraded</GridTable.Cell>
        </GridTable.Row>
        <GridTable.Row>
          <GridTable.Cell sticky="start">search-index</GridTable.Cell>
          <GridTable.Cell>ap-south-1</GridTable.Cell>
          <GridTable.Cell>4</GridTable.Cell>
          <GridTable.Cell>99.99%</GridTable.Cell>
          <GridTable.Cell sticky="end">Healthy</GridTable.Cell>
        </GridTable.Row>
        <GridTable.Row>
          <GridTable.Cell sticky="start">media-encoder</GridTable.Cell>
          <GridTable.Cell>us-west-2</GridTable.Cell>
          <GridTable.Cell>6</GridTable.Cell>
          <GridTable.Cell>99.90%</GridTable.Cell>
          <GridTable.Cell sticky="end">Healthy</GridTable.Cell>
        </GridTable.Row>
        <GridTable.Row>
          <GridTable.Cell sticky="start">notifications</GridTable.Cell>
          <GridTable.Cell>eu-central-1</GridTable.Cell>
          <GridTable.Cell>3</GridTable.Cell>
          <GridTable.Cell>98.70%</GridTable.Cell>
          <GridTable.Cell sticky="end">Degraded</GridTable.Cell>
        </GridTable.Row>
        <GridTable.Row>
          <GridTable.Cell sticky="start">reports</GridTable.Cell>
          <GridTable.Cell>us-east-1</GridTable.Cell>
          <GridTable.Cell>1</GridTable.Cell>
          <GridTable.Cell>99.99%</GridTable.Cell>
          <GridTable.Cell sticky="end">Healthy</GridTable.Cell>
        </GridTable.Row>
        <GridTable.Row>
          <GridTable.Cell sticky="start">webhooks</GridTable.Cell>
          <GridTable.Cell>eu-west-1</GridTable.Cell>
          <GridTable.Cell>2</GridTable.Cell>
          <GridTable.Cell>99.97%</GridTable.Cell>
          <GridTable.Cell sticky="end">Healthy</GridTable.Cell>
        </GridTable.Row>
      </GridTable.Body>
    </GridTable.Root>
  )
}
