<script module lang="ts">
  import type { ButtonProps } from "./button.svelte"

  export type IconButtonProps = ButtonProps
</script>

<script lang="ts">
  import { css } from "@isbatak/panda-ds/css"
  import Button from "./button.svelte"

  let { ref = $bindable(null), class: className, ...props }: IconButtonProps = $props()
</script>

<Button bind:ref {...props} class={[css({ px: "0", py: "0", _icon: { fontSize: "1.2em" } }), className]} />
