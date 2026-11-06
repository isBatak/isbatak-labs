<script module lang="ts">
  import { SearchInput } from "@isbatak/ark-search-input/svelte"

  export type SearchInputLabelProps = SearchInput.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSearchInputStyles } from "./search-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SearchInputLabelProps = $props()
  const styles = useSearchInputStyles()
</script>

<SearchInput.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
