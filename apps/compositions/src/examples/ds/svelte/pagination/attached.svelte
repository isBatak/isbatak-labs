<script lang="ts">
  import { Pagination } from "@isbatak/svelte-ui/pagination"
</script>

<Pagination.Root count={200} pageSize={10} variant="outline" attached>
  <Pagination.PrevTrigger />
  <Pagination.Items />
  <Pagination.NextTrigger />
</Pagination.Root>
