<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { UseSearchInputContext } from "./use-search-input-context.js"

  export interface SearchInputContextProps {
    render?: Snippet<[UseSearchInputContext]>
  }
</script>

<script lang="ts">
  import { useSearchInputContext } from "./use-search-input-context.js"

  const { render }: SearchInputContextProps = $props()
  const api = useSearchInputContext()
</script>

{@render render?.(api)}
