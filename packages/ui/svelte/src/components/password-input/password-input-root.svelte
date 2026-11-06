<script module lang="ts">
  import { PasswordInput } from "@ark-ui/svelte/password-input"
  import { passwordInput, type PasswordInputVariantProps } from "@isbatak/panda-ds/recipes"

  export type PasswordInputRootProps = PasswordInput.RootProps & PasswordInputVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { providePasswordInputStyles } from "./password-input-styles"

  let { ref = $bindable(null), visible = $bindable(), unstyled, class: className, ...props }: PasswordInputRootProps = $props()
  const [variantProps, localProps] = $derived(passwordInput.splitVariantProps(props))
  const styles = $derived(passwordInput(variantProps))
  providePasswordInputStyles(() => styles)
</script>

<PasswordInput.Root bind:ref bind:visible {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
