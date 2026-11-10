<script lang="ts">
  import { Pagination } from "@isbatak/svelte-ui/pagination"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="4">
  <Pagination.Root count={200} pageSize={10} size="xs">
    <Pagination.PrevTrigger />
    <Pagination.Items />
    <Pagination.NextTrigger />
  </Pagination.Root>
  <Pagination.Root count={200} pageSize={10} size="sm">
    <Pagination.PrevTrigger />
    <Pagination.Items />
    <Pagination.NextTrigger />
  </Pagination.Root>
  <Pagination.Root count={200} pageSize={10} size="md">
    <Pagination.PrevTrigger />
    <Pagination.Items />
    <Pagination.NextTrigger />
  </Pagination.Root>
  <Pagination.Root count={200} pageSize={10} size="lg">
    <Pagination.PrevTrigger />
    <Pagination.Items />
    <Pagination.NextTrigger />
  </Pagination.Root>
</Stack>
