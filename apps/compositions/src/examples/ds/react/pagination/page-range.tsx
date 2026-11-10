import { Pagination } from "@isbatak/react-ui/pagination"

export function PaginationPageRangeDemo() {
  return (
    <Pagination.Root count={200} pageSize={10}>
      <Pagination.PageText format="long" />
      <Pagination.PrevTrigger />
      <Pagination.NextTrigger />
    </Pagination.Root>
  )
}
