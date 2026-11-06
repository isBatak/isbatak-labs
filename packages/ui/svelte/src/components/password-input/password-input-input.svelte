<script module lang="ts">
  import { PasswordInput } from "@ark-ui/svelte/password-input"

  export type PasswordInputInputProps = PasswordInput.InputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePasswordInputStyles } from "./password-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PasswordInputInputProps = $props()
  const styles = usePasswordInputStyles()
</script>

<PasswordInput.Input bind:ref {...props} data-slot="input" class={[!unstyled && styles().input, className]} />
