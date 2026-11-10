import { Pagination } from "@isbatak/solid-ui/pagination"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { createSignal } from "solid-js"

export function PaginationControlledDemo() {
  const [page, setPage] = createSignal(1)

  return (
    <Stack gap="3">
      <Pagination.Root count={200} pageSize={10} page={page()} onPageChange={(details) => setPage(details.page)}>
        <Pagination.PrevTrigger />
        <Pagination.Items />
        <Pagination.NextTrigger />
      </Pagination.Root>
      <Text textStyle="sm" color="fg.muted">
        Page {page()}
      </Text>
    </Stack>
  )
}
