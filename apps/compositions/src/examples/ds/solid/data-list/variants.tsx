import { DataList } from "@isbatak/solid-ui/data-list"
import { VStack } from "@isbatak/solid-ui/stack"

export function DataListVariantsDemo() {
  return (
    <VStack gap="6" alignItems="stretch">
      <DataList.Root variant="subtle" maxW="md">
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
      <DataList.Root variant="bold" maxW="md">
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
