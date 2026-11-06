<script module lang="ts">
  import { Field } from "@ark-ui/svelte/field"
  import type { InputVariantProps } from "@isbatak/panda-ds/recipes"

  export type InputProps = Field.InputProps & InputVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { input } from "@isbatak/panda-ds/recipes"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: InputProps = $props()
  const [variantProps, localProps] = $derived(input.splitVariantProps(props))
</script>

<Field.Input bind:ref bind:value {...localProps} class={[!unstyled && input(variantProps), className]} />
