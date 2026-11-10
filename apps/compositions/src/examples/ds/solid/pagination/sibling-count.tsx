import { Pagination } from "@isbatak/solid-ui/pagination"

export function PaginationSiblingCountDemo() {
  return (
    <Pagination.Root count={500} pageSize={10} siblingCount={2} defaultPage={12}>
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
  )
}
