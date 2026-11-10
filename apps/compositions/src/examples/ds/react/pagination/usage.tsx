import { Pagination } from "@isbatak/react-ui/pagination"

export function PaginationDemo() {
  return (
    <Pagination.Root count={200} pageSize={10} defaultPage={1}>
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
  )
}
