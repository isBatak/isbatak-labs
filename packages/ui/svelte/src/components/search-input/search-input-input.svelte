<script module lang="ts">
  import { SearchInput } from "@isbatak/ark-search-input/svelte"

  export type SearchInputInputProps = SearchInput.InputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSearchInputStyles } from "./search-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SearchInputInputProps = $props()
  const styles = useSearchInputStyles()
</script>

<SearchInput.Input bind:ref {...props} data-slot="input" class={[!unstyled && styles().input, className]} />
