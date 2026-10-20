<script module lang="ts">
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"
  import type { UseCodePreviewReturn } from "./use-code-preview.svelte.js"

  interface RootProviderProps {
    value: UseCodePreviewReturn
  }

  export interface CodePreviewRootProviderBaseProps extends RootProviderProps, PolymorphicProps<"div">, RefAttribute {}
  export interface CodePreviewRootProviderProps extends Assign<HTMLProps<"div">, CodePreviewRootProviderBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { CodePreviewProvider } from "./use-code-preview-context.js"

  let { ref = $bindable(null), value: api, ...localProps }: CodePreviewRootProviderProps = $props()
  const mergedProps = $derived(mergeProps(api().getRootProps(), localProps))

  CodePreviewProvider(() => api())
</script>

<Ark as="div" bind:ref {...mergedProps} />
