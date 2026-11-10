<script lang="ts">
  import { Pagination } from "@isbatak/svelte-ui/pagination"
</script>

<Pagination.Root count={200} pageSize={10}>
  <Pagination.PageText format="long" />
  <Pagination.PrevTrigger />
  <Pagination.NextTrigger />
</Pagination.Root>
