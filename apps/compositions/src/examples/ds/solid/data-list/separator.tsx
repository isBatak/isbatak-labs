import { DataList } from "@isbatak/solid-ui/data-list"

export function DataListSeparatorDemo() {
  return (
    <DataList.Root separator maxW="md">
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
  )
}
