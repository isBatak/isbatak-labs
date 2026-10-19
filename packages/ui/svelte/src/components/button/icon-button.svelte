<script module lang="ts">
  import type { ButtonProps } from "./button.svelte"

  export type IconButtonProps = ButtonProps
</script>

<script lang="ts">
  import Button from "./button.svelte"

  let { ref = $bindable(null), ...props }: IconButtonProps = $props()
</script>

<Button bind:ref icon {...props} />
