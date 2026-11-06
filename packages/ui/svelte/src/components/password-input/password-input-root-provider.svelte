<script module lang="ts">
  import { PasswordInput } from "@ark-ui/svelte/password-input"
  import { passwordInput, type PasswordInputVariantProps } from "@isbatak/panda-ds/recipes"

  export type PasswordInputRootProviderProps = PasswordInput.RootProviderProps & PasswordInputVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { providePasswordInputStyles } from "./password-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PasswordInputRootProviderProps = $props()
  const [variantProps, localProps] = $derived(passwordInput.splitVariantProps(props))
  const styles = $derived(passwordInput(variantProps))
  providePasswordInputStyles(() => styles)
</script>

<PasswordInput.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
