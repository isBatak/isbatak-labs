<script module lang="ts">
  import { Pagination } from "@ark-ui/svelte/pagination"
  import { pagination, type PaginationVariantProps } from "@isbatak/panda-ds/recipes"

  export type PaginationRootProviderProps = Pagination.RootProviderProps & PaginationVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { providePaginationStyles } from "./pagination-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PaginationRootProviderProps = $props()
  const [variantProps, localProps] = $derived(pagination.splitVariantProps(props))
  const styles = $derived(pagination(variantProps))
  providePaginationStyles(() => styles)
</script>

<Pagination.RootProvider
  bind:ref
  {...localProps}
  data-slot="root"
  class={[!unstyled && styles.root, className]}
/>
