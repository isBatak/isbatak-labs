<script module lang="ts">
  import type { ButtonVariantProps } from "@isbatak/panda-ds/recipes"
  import type { GroupProps } from "../group"

  export type ButtonGroupProps = GroupProps & Omit<ButtonVariantProps, "orientation">
</script>

<script lang="ts">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { button } from "@isbatak/panda-ds/recipes"
  import { Group } from "../group"
  import { provideButtonProps } from "./button-props"

  let { ref = $bindable(null), ...props }: ButtonGroupProps = $props()
  const sharedKeys = button.variantKeys.filter((key) => key !== "orientation")
  const [variantProps, groupProps] = $derived(splitProps(props, sharedKeys))
  provideButtonProps(() => variantProps)
</script>

<Group bind:ref {...groupProps} />
