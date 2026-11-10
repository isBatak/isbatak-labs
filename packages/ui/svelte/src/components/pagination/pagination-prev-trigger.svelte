<script module lang="ts">
  import { Pagination } from "@ark-ui/svelte/pagination"

  export type PaginationPrevTriggerProps = Pagination.PrevTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { usePaginationStyles } from "./pagination-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: PaginationPrevTriggerProps = $props()
  const styles = usePaginationStyles()
</script>

<Pagination.PrevTrigger bind:ref {...props} data-slot="prevTrigger" class={[!unstyled && styles().prevTrigger, className]}>
  {#if children}{@render children()}{:else}<Icon name="chevron-left" />{/if}
</Pagination.PrevTrigger>
