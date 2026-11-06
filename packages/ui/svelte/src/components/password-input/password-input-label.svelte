<script module lang="ts">
  import { PasswordInput } from "@ark-ui/svelte/password-input"

  export type PasswordInputLabelProps = PasswordInput.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePasswordInputStyles } from "./password-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PasswordInputLabelProps = $props()
  const styles = usePasswordInputStyles()
</script>

<PasswordInput.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
