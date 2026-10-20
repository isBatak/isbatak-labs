<script module lang="ts">
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface CodePreviewDirTriggerBaseProps extends PolymorphicProps<"button">, RefAttribute {}
  export interface CodePreviewDirTriggerProps extends HTMLProps<"button">, CodePreviewDirTriggerBaseProps {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useCodePreviewContext } from "./use-code-preview-context.js"

  let { ref = $bindable(null), ...props }: CodePreviewDirTriggerProps = $props()
  const api = useCodePreviewContext()
  const mergedProps = $derived(mergeProps(api().getDirTriggerProps(), props))
</script>

<Ark as="button" bind:ref {...mergedProps} />
