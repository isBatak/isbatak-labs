<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"
  import { actionBar, type ActionBarVariantProps } from "@isbatak/panda-ds/recipes"

  export type ActionBarRootProps = Popover.RootProps & ActionBarVariantProps
</script>

<script lang="ts">
  import { provideActionBarStyles } from "./action-bar-styles"

  let {
    open = $bindable(),
    lazyMount = true,
    unmountOnExit = true,
    modal = false,
    autoFocus = false,
    closeOnInteractOutside = false,
    ...props
  }: ActionBarRootProps = $props()
  const [variantProps, localProps] = $derived(actionBar.splitVariantProps(props))
  const styles = $derived(actionBar(variantProps))
  provideActionBarStyles(() => styles)
</script>

<Popover.Root
  bind:open
  {lazyMount}
  {unmountOnExit}
  {modal}
  {autoFocus}
  {closeOnInteractOutside}
  {...localProps}
/>
