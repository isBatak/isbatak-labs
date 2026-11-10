<script module lang="ts">
  import { Pagination } from "@ark-ui/svelte/pagination"

  export type PaginationFirstTriggerProps = Pagination.FirstTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { usePaginationStyles } from "./pagination-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: PaginationFirstTriggerProps = $props()
  const styles = usePaginationStyles()
</script>

<Pagination.FirstTrigger bind:ref {...props} data-slot="firstTrigger" class={[!unstyled && styles().firstTrigger, className]}>
  {#if children}{@render children()}{:else}<Icon name="chevrons-left" />{/if}
</Pagination.FirstTrigger>
