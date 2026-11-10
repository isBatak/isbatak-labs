import { Pagination } from "@isbatak/react-ui/pagination"
import { Text } from "@isbatak/react-ui/text"
import { Stack } from "styled-system/jsx"
import { useState } from "react"

export function PaginationControlledDemo() {
  const [page, setPage] = useState(1)

  return (
    <Stack gap="3">
      <Pagination.Root count={200} pageSize={10} page={page} onPageChange={(details) => setPage(details.page)}>
        <Pagination.PrevTrigger />
        <Pagination.Items />
        <Pagination.NextTrigger />
      </Pagination.Root>
      <Text textStyle="sm" color="fg.muted">
        Page {page}
      </Text>
    </Stack>
  )
}
