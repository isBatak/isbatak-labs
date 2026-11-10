<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type PaginationPageTextFormat = "short" | "compact" | "long"

  export type PaginationPageTextProps = HTMLAttributes<HTMLSpanElement> & {
    format?: PaginationPageTextFormat | undefined
    unstyled?: boolean | undefined
  }
</script>

<script lang="ts">
  import { usePaginationContext } from "@ark-ui/svelte/pagination"
  import { usePaginationStyles } from "./pagination-styles"

  let { format = "compact", unstyled, class: className, children, ...props }: PaginationPageTextProps = $props()
  const styles = usePaginationStyles()
  const context = usePaginationContext()
  const text = $derived.by(() => {
    const { page, totalPages, pageRange, count } = context()
    if (format === "short") return `${page} / ${totalPages}`
    if (format === "compact") return `${page} of ${totalPages}`
    return `${pageRange.start + 1} - ${Math.min(pageRange.end, count)} of ${count}`
  })
</script>

<span {...props} data-slot="pageText" class={[!unstyled && styles().pageText, className]}>
  {#if children}{@render children()}{:else}{text}{/if}
</span>
