<script module lang="ts">
  import type { InputElementVariantProps } from "@isbatak/panda-ds/recipes"
  import type { HTMLAttributes } from "svelte/elements"

  export type InputElementProps = HTMLAttributes<HTMLDivElement> & InputElementVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { inputElement } from "@isbatak/panda-ds/recipes"

  let { unstyled, class: className, children, ...props }: InputElementProps = $props()
  const [variantProps, localProps] = $derived(inputElement.splitVariantProps(props))
</script>

<div data-input-element="" {...localProps} class={[!unstyled && inputElement(variantProps), className]}>{@render children?.()}</div>
