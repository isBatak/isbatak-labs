<script module lang="ts">
  import { SearchInput } from "@isbatak/ark-search-input/svelte"

  export type SearchInputClearTriggerProps = SearchInput.ClearTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSearchInputStyles } from "./search-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SearchInputClearTriggerProps = $props()
  const styles = useSearchInputStyles()
</script>

<SearchInput.ClearTrigger bind:ref {...props} data-slot="clearTrigger" class={[!unstyled && styles().clearTrigger, className]} />
