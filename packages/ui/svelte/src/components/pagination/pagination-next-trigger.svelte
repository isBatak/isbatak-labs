<script module lang="ts">
  import { Pagination } from "@ark-ui/svelte/pagination"

  export type PaginationNextTriggerProps = Pagination.NextTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { usePaginationStyles } from "./pagination-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: PaginationNextTriggerProps = $props()
  const styles = usePaginationStyles()
</script>

<Pagination.NextTrigger bind:ref {...props} data-slot="nextTrigger" class={[!unstyled && styles().nextTrigger, className]}>
  {#if children}{@render children()}{:else}<Icon name="chevron-right" />{/if}
</Pagination.NextTrigger>
