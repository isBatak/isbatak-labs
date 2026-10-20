<script module lang="ts">
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface CodePreviewStageBaseProps extends PolymorphicProps<"div">, RefAttribute {}
  export interface CodePreviewStageProps extends HTMLProps<"div">, CodePreviewStageBaseProps {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useCodePreviewContext } from "./use-code-preview-context.js"

  let { ref = $bindable(null), ...props }: CodePreviewStageProps = $props()
  const api = useCodePreviewContext()
  const mergedProps = $derived(mergeProps(api().getStageProps(), props))
</script>

<Ark as="div" bind:ref {...mergedProps} />
