<script module lang="ts">
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface CodePreviewCopyTriggerBaseProps extends PolymorphicProps<"button">, RefAttribute {}
  export interface CodePreviewCopyTriggerProps extends HTMLProps<"button">, CodePreviewCopyTriggerBaseProps {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useCodePreviewContext } from "./use-code-preview-context.js"

  let { ref = $bindable(null), ...props }: CodePreviewCopyTriggerProps = $props()
  const api = useCodePreviewContext()
  const mergedProps = $derived(mergeProps(api().getCopyTriggerProps(), props))
</script>

<Ark as="button" bind:ref {...mergedProps} />
