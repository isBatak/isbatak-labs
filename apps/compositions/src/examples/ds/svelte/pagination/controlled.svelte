<script lang="ts">
  import { Pagination } from "@isbatak/svelte-ui/pagination"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  let page = $state(1)
</script>

<Stack gap="3">
  <Pagination.Root count={200} pageSize={10} bind:page={page}>
    <Pagination.PrevTrigger />
    <Pagination.Items />
    <Pagination.NextTrigger />
  </Pagination.Root>
  <Text textStyle="sm" color="fg.muted">Page {page}</Text>
</Stack>
