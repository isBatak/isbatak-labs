<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"
  import { select, type SelectVariantProps } from "@isbatak/panda-ds/recipes"

  export type SelectRootProps = Select.RootProps & SelectVariantProps
</script>

<script lang="ts">
  import { provideSelectStyles } from "./select-styles"

  let { ref = $bindable(null), class: className, ...props }: SelectRootProps = $props()
  const [variantProps, localProps] = $derived(select.splitVariantProps(props))
  const styles = $derived(select(variantProps))
  provideSelectStyles(() => styles)
</script>

<Select.Root bind:ref {...localProps} data-slot="root" class={[styles.root, className]} />
