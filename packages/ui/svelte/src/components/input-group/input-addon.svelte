<script module lang="ts">
  import type { InputAddonVariantProps } from "@isbatak/panda-ds/recipes"
  import type { HTMLAttributes } from "svelte/elements"

  export type InputAddonProps = HTMLAttributes<HTMLDivElement> & InputAddonVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { inputAddon } from "@isbatak/panda-ds/recipes"

  let { unstyled, class: className, children, ...props }: InputAddonProps = $props()
  const [variantProps, localProps] = $derived(inputAddon.splitVariantProps(props))
</script>

<div {...localProps} class={[!unstyled && inputAddon(variantProps), className]}>{@render children?.()}</div>
