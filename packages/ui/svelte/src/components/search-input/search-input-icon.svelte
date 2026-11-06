<script module lang="ts">
  import { SearchInput } from "@isbatak/ark-search-input/svelte"

  export type SearchInputIconProps = SearchInput.IconProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSearchInputStyles } from "./search-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SearchInputIconProps = $props()
  const styles = useSearchInputStyles()
</script>

<SearchInput.Icon bind:ref {...props} data-slot="icon" class={[!unstyled && styles().icon, className]} />
