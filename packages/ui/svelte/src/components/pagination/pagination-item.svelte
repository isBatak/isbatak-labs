<script module lang="ts">
  import { Pagination } from "@ark-ui/svelte/pagination"

  export type PaginationItemProps = Pagination.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePaginationStyles } from "./pagination-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PaginationItemProps = $props()
  const styles = usePaginationStyles()
</script>

<Pagination.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
