import { Pagination } from "@isbatak/solid-ui/pagination"

export function PaginationAttachedDemo() {
  return (
    <Pagination.Root count={200} pageSize={10} variant="outline" attached>
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
  )
}
