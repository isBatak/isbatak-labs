<script module lang="ts">
  import type { PaginationItemProps } from "./pagination-item.svelte"

  export type PaginationItemsProps = Omit<PaginationItemProps, "type" | "value" | "children">
</script>

<script lang="ts">
  import { usePaginationContext } from "@ark-ui/svelte/pagination"
  import PaginationEllipsis from "./pagination-ellipsis.svelte"
  import PaginationItem from "./pagination-item.svelte"

  let props: PaginationItemsProps = $props()
  const context = usePaginationContext()
</script>

{#each context().pages as page, index (index)}
  {#if page.type === "page"}
    <PaginationItem {...props} type="page" value={page.value}>{page.value}</PaginationItem>
  {:else}
    <PaginationEllipsis {index} />
  {/if}
{/each}
