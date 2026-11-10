<script lang="ts">
  import { Pagination } from "@isbatak/svelte-ui/pagination"
</script>

<Pagination.Root count={200} pageSize={10}>
  <Pagination.PrevTrigger />
  <Pagination.PageText />
  <Pagination.NextTrigger />
</Pagination.Root>
