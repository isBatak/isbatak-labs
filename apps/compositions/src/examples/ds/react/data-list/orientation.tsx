import { DataList } from "@isbatak/react-ui/data-list"
import { VStack } from "styled-system/jsx"

export function DataListOrientationDemo() {
  return (
    <VStack gap="6" alignItems="stretch">
      <DataList.Root orientation="horizontal" maxW="md">
        <DataList.Item>
          <DataList.ItemLabel>New Users</DataList.ItemLabel>
          <DataList.ItemValue>234</DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>Sales</DataList.ItemLabel>
          <DataList.ItemValue>£12,340</DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>Conversion</DataList.ItemLabel>
          <DataList.ItemValue>3.2%</DataList.ItemValue>
        </DataList.Item>
      </DataList.Root>
      <DataList.Root orientation="vertical" maxW="md">
        <DataList.Item>
          <DataList.ItemLabel>New Users</DataList.ItemLabel>
          <DataList.ItemValue>234</DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>Sales</DataList.ItemLabel>
          <DataList.ItemValue>£12,340</DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>Conversion</DataList.ItemLabel>
          <DataList.ItemValue>3.2%</DataList.ItemValue>
        </DataList.Item>
      </DataList.Root>
    </VStack>
  )
}
