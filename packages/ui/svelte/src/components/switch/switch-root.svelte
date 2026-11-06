<script module lang="ts">
  import { Switch } from "@ark-ui/svelte/switch"
  import { type SwittchVariantProps, swittch } from "@isbatak/panda-ds/recipes"

  export type SwitchRootProps = Switch.RootProps & SwittchVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideSwitchStyles } from "./switch-styles"

  let { ref = $bindable(null), checked = $bindable(), unstyled, class: className, ...props }: SwitchRootProps = $props()
  const [variantProps, localProps] = $derived(swittch.splitVariantProps(props))
  const styles = $derived(swittch(variantProps))
  provideSwitchStyles(() => styles)
</script>

<Switch.Root bind:ref bind:checked  {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
