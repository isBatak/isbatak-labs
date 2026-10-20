<script module lang="ts">
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface CodePreviewThemeTriggerBaseProps extends PolymorphicProps<"button">, RefAttribute {}
  export interface CodePreviewThemeTriggerProps extends HTMLProps<"button">, CodePreviewThemeTriggerBaseProps {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useCodePreviewContext } from "./use-code-preview-context.js"

  let { ref = $bindable(null), ...props }: CodePreviewThemeTriggerProps = $props()
  const api = useCodePreviewContext()
  const mergedProps = $derived(mergeProps(api().getThemeTriggerProps(), props))
</script>

<Ark as="button" bind:ref {...mergedProps} />
