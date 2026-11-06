<script module lang="ts">
  import { SearchInput } from "@isbatak/ark-search-input/svelte"

  export type SearchInputControlProps = SearchInput.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSearchInputStyles } from "./search-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SearchInputControlProps = $props()
  const styles = useSearchInputStyles()
</script>

<SearchInput.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
