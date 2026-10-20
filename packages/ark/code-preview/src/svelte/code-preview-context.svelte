<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { UseCodePreviewContext } from "./use-code-preview-context.js"

  export interface CodePreviewContextProps {
    render?: Snippet<[UseCodePreviewContext]>
  }
</script>

<script lang="ts">
  import { useCodePreviewContext } from "./use-code-preview-context.js"

  const { render }: CodePreviewContextProps = $props()
  const api = useCodePreviewContext()
</script>

{@render render?.(api)}
