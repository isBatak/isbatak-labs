<script module lang="ts">
  import { Field } from "@ark-ui/svelte/field"
  import type { TextareaVariantProps } from "@isbatak/panda-ds/recipes"

  export type TextareaProps = Field.TextareaProps & TextareaVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { textarea } from "@isbatak/panda-ds/recipes"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: TextareaProps = $props()
  const [variantProps, localProps] = $derived(textarea.splitVariantProps(props))
</script>

<Field.Textarea bind:ref bind:value {...localProps} class={[!unstyled && textarea(variantProps), className]} />
