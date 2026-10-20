<script module lang="ts">
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface CodePreviewResizerBaseProps extends PolymorphicProps<"div">, RefAttribute {}
  export interface CodePreviewResizerProps extends HTMLProps<"div">, CodePreviewResizerBaseProps {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useCodePreviewContext } from "./use-code-preview-context.js"

  let { ref = $bindable(null), ...props }: CodePreviewResizerProps = $props()
  const api = useCodePreviewContext()
  const mergedProps = $derived(mergeProps(api().getResizerProps(), props))
</script>

<Ark as="div" bind:ref {...mergedProps} />
