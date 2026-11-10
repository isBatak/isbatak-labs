import { Pagination } from "@isbatak/react-ui/pagination"
import { Stack } from "styled-system/jsx"

export function PaginationVariantsDemo() {
  return (
    <Stack gap="4">
      <Pagination.Root count={200} pageSize={10} variant="ghost">
        <Pagination.PrevTrigger />
        <Pagination.Items />
        <Pagination.NextTrigger />
      </Pagination.Root>
      <Pagination.Root count={200} pageSize={10} variant="outline">
        <Pagination.PrevTrigger />
        <Pagination.Items />
        <Pagination.NextTrigger />
      </Pagination.Root>
      <Pagination.Root count={200} pageSize={10} variant="subtle">
        <Pagination.PrevTrigger />
        <Pagination.Items />
        <Pagination.NextTrigger />
      </Pagination.Root>
      <Pagination.Root count={200} pageSize={10} variant="surface">
        <Pagination.PrevTrigger />
        <Pagination.Items />
        <Pagination.NextTrigger />
      </Pagination.Root>
    </Stack>
  )
}
