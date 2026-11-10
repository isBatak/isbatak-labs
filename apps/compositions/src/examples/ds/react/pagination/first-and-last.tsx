import { Pagination } from "@isbatak/react-ui/pagination"

export function PaginationFirstAndLastDemo() {
  return (
    <Pagination.Root count={200} pageSize={10}>
      <Pagination.FirstTrigger />
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
      <Pagination.LastTrigger />
    </Pagination.Root>
  )
}
