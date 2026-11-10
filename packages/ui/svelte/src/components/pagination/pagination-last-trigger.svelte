<script module lang="ts">
  import { Pagination } from "@ark-ui/svelte/pagination"

  export type PaginationLastTriggerProps = Pagination.LastTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { usePaginationStyles } from "./pagination-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: PaginationLastTriggerProps = $props()
  const styles = usePaginationStyles()
</script>

<Pagination.LastTrigger bind:ref {...props} data-slot="lastTrigger" class={[!unstyled && styles().lastTrigger, className]}>
  {#if children}{@render children()}{:else}<Icon name="chevrons-right" />{/if}
</Pagination.LastTrigger>
