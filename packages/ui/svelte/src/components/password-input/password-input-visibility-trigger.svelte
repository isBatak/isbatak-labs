<script module lang="ts">
  import { PasswordInput } from "@ark-ui/svelte/password-input"

  export type PasswordInputVisibilityTriggerProps = PasswordInput.VisibilityTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePasswordInputStyles } from "./password-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PasswordInputVisibilityTriggerProps = $props()
  const styles = usePasswordInputStyles()
</script>

<PasswordInput.VisibilityTrigger bind:ref {...props} data-slot="visibilityTrigger" class={[!unstyled && styles().visibilityTrigger, className]} />
