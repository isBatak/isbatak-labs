import { Pagination } from "@isbatak/react-ui/pagination"

export function PaginationCompactDemo() {
  return (
    <Pagination.Root count={200} pageSize={10}>
      <Pagination.PrevTrigger />
      <Pagination.PageText />
      <Pagination.NextTrigger />
    </Pagination.Root>
  )
}
