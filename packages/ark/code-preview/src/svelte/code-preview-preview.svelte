<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { HTMLProps, RefAttribute } from "./types.js"

  export interface CodePreviewPreviewBaseProps extends RefAttribute {
    children?: Snippet
  }
  export interface CodePreviewPreviewProps extends Omit<HTMLProps<"div">, "children">, CodePreviewPreviewBaseProps {}
</script>

<script lang="ts">
  import { LocaleProvider } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useCodePreviewContext } from "./use-code-preview-context.js"

  let { ref = $bindable(null), children, ...props }: CodePreviewPreviewProps = $props()
  const api = useCodePreviewContext()
  const mergedProps = $derived(mergeProps(api().getPreviewProps(), props))
</script>

<div bind:this={ref} {...mergedProps}>
  <LocaleProvider locale={api().previewLocale}>
    {@render children?.()}
  </LocaleProvider>
</div>
