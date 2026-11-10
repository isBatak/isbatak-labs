<script module lang="ts">
  import { Pagination } from "@ark-ui/svelte/pagination"

  export type PaginationEllipsisProps = Pagination.EllipsisProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { usePaginationStyles } from "./pagination-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: PaginationEllipsisProps = $props()
  const styles = usePaginationStyles()
</script>

<Pagination.Ellipsis bind:ref {...props} data-slot="ellipsis" class={[!unstyled && styles().ellipsis, className]}>
  {#if children}{@render children()}{:else}<Icon name="dots" />{/if}
</Pagination.Ellipsis>
