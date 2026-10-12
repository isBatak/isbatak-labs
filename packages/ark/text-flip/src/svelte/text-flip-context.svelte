<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { UseTextFlipContext } from "./use-text-flip-context.js"

  export interface TextFlipContextProps {
    render?: Snippet<[UseTextFlipContext]>
  }
</script>

<script lang="ts">
  import { useTextFlipContext } from "./use-text-flip-context.js"

  const { render }: TextFlipContextProps = $props()
  const api = useTextFlipContext()
</script>

{@render render?.(api)}
