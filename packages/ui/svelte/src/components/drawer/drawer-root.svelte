<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"
  import { drawer, type DrawerVariantProps } from "@isbatak/panda-ds/recipes"

  export type DrawerRootProps = Drawer.RootProps & DrawerVariantProps
</script>

<script lang="ts">
  import { provideDrawerStyles } from "./drawer-styles"

  const swipeDirections = { start: "start", end: "end", top: "up", bottom: "down" } as const

  let { open = $bindable(), lazyMount = true, unmountOnExit = true, ...props }: DrawerRootProps = $props()
  const placement = $derived(props.placement ?? (props.swipeDirection ? undefined : "end"))
  const swipeDirection = $derived(typeof placement === "string" ? swipeDirections[placement] : undefined)
  const [variantProps, localProps] = $derived(drawer.splitVariantProps({ ...props, placement }))
  const styles = $derived(drawer(variantProps))
  provideDrawerStyles(() => styles)
</script>

<Drawer.Root bind:open {lazyMount} {unmountOnExit} {swipeDirection} {...localProps} />
