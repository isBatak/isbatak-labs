<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { UseMasonryContext } from "./use-masonry-context.js"

  export interface MasonryContextProps {
    render?: Snippet<[UseMasonryContext]>
  }
</script>

<script lang="ts">
  import { useMasonryContext } from "./use-masonry-context.js"

  const { render }: MasonryContextProps = $props()
  const api = useMasonryContext()
</script>

{@render render?.(api)}
