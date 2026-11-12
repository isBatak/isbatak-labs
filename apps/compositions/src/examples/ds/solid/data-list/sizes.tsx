import { DataList } from "@isbatak/solid-ui/data-list"
import { VStack } from "@isbatak/solid-ui/stack"

export function DataListSizesDemo() {
  return (
    <VStack gap="6" alignItems="stretch">
      <DataList.Root size="sm" maxW="md">
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
      <DataList.Root size="md" maxW="md">
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
      <DataList.Root size="lg" maxW="md">
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
