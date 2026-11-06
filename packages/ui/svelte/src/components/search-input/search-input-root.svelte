<script module lang="ts">
  import { SearchInput } from "@isbatak/ark-search-input/svelte"
  import { searchInput, type SearchInputVariantProps } from "@isbatak/panda-ds/recipes"

  export type SearchInputRootProps = SearchInput.RootProps & SearchInputVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideSearchInputStyles } from "./search-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SearchInputRootProps = $props()
  const [variantProps, localProps] = $derived(searchInput.splitVariantProps(props))
  const styles = $derived(searchInput(variantProps))
  provideSearchInputStyles(() => styles)
</script>

<SearchInput.Root bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
