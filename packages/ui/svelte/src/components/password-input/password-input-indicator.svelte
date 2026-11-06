<script module lang="ts">
  import { PasswordInput } from "@ark-ui/svelte/password-input"

  export type PasswordInputIndicatorProps = PasswordInput.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePasswordInputStyles } from "./password-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PasswordInputIndicatorProps = $props()
  const styles = usePasswordInputStyles()
</script>

<PasswordInput.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]} />
