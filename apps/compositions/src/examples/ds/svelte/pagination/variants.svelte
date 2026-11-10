<script lang="ts">
  import { Pagination } from "@isbatak/svelte-ui/pagination"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

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
