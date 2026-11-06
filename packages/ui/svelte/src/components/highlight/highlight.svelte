<script module lang="ts">
  import type { HighlightProps as ArkHighlightProps } from "@ark-ui/svelte/highlight"
  import type { MarkVariantProps } from "@isbatak/panda-ds/recipes"

  export type HighlightProps = ArkHighlightProps & MarkVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Highlight as ArkHighlight } from "@ark-ui/svelte/highlight"
  import { mark } from "@isbatak/panda-ds/recipes"

  let { unstyled, class: className, ...props }: HighlightProps = $props()
  const [variantProps, rest] = $derived(mark.splitVariantProps(props))
</script>

<ArkHighlight {...rest} class={[!unstyled && mark(variantProps), className]} />
