<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"
  import { popover, type PopoverVariantProps } from "@isbatak/panda-ds/recipes"

  export type PopoverRootProps = Popover.RootProps & PopoverVariantProps
</script>

<script lang="ts">
  import { providePopoverStyles } from "./popover-styles"

  let { open = $bindable(), ...props }: PopoverRootProps = $props()
  const [variantProps, localProps] = $derived(popover.splitVariantProps(props))
  const styles = $derived(popover(variantProps))
  providePopoverStyles(() => styles)
</script>

<Popover.Root bind:open {...localProps} />
