<script module lang="ts">
  import type { Assign, Optional } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"
  import type { UseCodePreviewProps } from "./use-code-preview.svelte.js"

  export interface CodePreviewRootBaseProps
    extends Optional<UseCodePreviewProps, "id">, PolymorphicProps<"div">, RefAttribute {}
  export interface CodePreviewRootProps extends Assign<HTMLProps<"div">, CodePreviewRootBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import * as codePreview from "../core/index.js"
  import { CodePreviewProvider } from "./use-code-preview-context.js"
  import { useCodePreview } from "./use-code-preview.svelte.js"

  let { ref = $bindable(null), ...props }: CodePreviewRootProps = $props()
  const providedId = $props.id()

  const [useCodePreviewProps, localProps] = $derived(codePreview.splitProps(props as Omit<typeof props, "dir">))

  const api = useCodePreview(() => ({ ...useCodePreviewProps, id: useCodePreviewProps.id ?? providedId }))
  const mergedProps = $derived(mergeProps(api().getRootProps(), localProps))

  CodePreviewProvider(api)
</script>

<Ark as="div" bind:ref {...mergedProps} />
