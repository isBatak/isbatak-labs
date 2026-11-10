<script module lang="ts">
  import { Pagination } from "@ark-ui/svelte/pagination"
  import { pagination, type PaginationVariantProps } from "@isbatak/panda-ds/recipes"

  export type PaginationRootProps = Pagination.RootProps & PaginationVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { providePaginationStyles } from "./pagination-styles"

  let { ref = $bindable(null), page = $bindable(), pageSize = $bindable(), unstyled, class: className, ...props }: PaginationRootProps = $props()
  const [variantProps, localProps] = $derived(pagination.splitVariantProps(props))
  const styles = $derived(pagination(variantProps))
  providePaginationStyles(() => styles)
</script>

<Pagination.Root
  bind:ref bind:page bind:pageSize
  {...localProps}
  data-slot="root"
  class={[!unstyled && styles.root, className]}
/>
