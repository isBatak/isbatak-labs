<script lang="ts">
  import { Pagination } from "@isbatak/svelte-ui/pagination"
</script>

<Pagination.Root count={500} pageSize={10} siblingCount={2} defaultPage={12}>
  <Pagination.PrevTrigger />
  <Pagination.Items />
  <Pagination.NextTrigger />
</Pagination.Root>
