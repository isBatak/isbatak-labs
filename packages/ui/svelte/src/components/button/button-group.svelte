<script module lang="ts">
  import type { ButtonVariantProps } from "@isbatak/panda-ds/recipes"
  import type { GroupProps } from "../group"

  export type ButtonGroupProps = GroupProps & ButtonVariantProps
</script>

<script lang="ts">
  import { button } from "@isbatak/panda-ds/recipes"
  import { Group } from "../group"
  import { provideButtonProps } from "./button-props"

  let { ref = $bindable(null), ...props }: ButtonGroupProps = $props()
  const [variantProps, groupProps] = $derived(button.splitVariantProps(props))
  provideButtonProps(() => variantProps)
</script>

<Group bind:ref {...groupProps} />
