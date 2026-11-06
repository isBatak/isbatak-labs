<script module lang="ts">
  import { PasswordInput } from "@ark-ui/svelte/password-input"

  export type PasswordInputControlProps = PasswordInput.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePasswordInputStyles } from "./password-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PasswordInputControlProps = $props()
  const styles = usePasswordInputStyles()
</script>

<PasswordInput.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
