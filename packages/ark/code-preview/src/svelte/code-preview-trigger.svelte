<script module lang="ts">
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface CodePreviewTriggerBaseProps extends PolymorphicProps<"button">, RefAttribute {}
  export interface CodePreviewTriggerProps extends HTMLProps<"button">, CodePreviewTriggerBaseProps {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useCodePreviewContext } from "./use-code-preview-context.js"

  let { ref = $bindable(null), ...props }: CodePreviewTriggerProps = $props()
  const api = useCodePreviewContext()
  const mergedProps = $derived(mergeProps(api().getTriggerProps(), props))
</script>

<Ark as="button" bind:ref {...mergedProps} />
