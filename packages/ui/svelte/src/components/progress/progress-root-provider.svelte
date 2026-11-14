<script module lang="ts">
  import { Progress } from "@ark-ui/svelte/progress"
  import { progress, type ProgressVariantProps } from "@isbatak/panda-ds/recipes"

  export type ProgressRootProviderProps = Progress.RootProviderProps & ProgressVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { hasProgressProps, provideProgressStyles, useProgressProps } from "./progress-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ProgressRootProviderProps = $props()
  const contextProps = hasProgressProps() ? useProgressProps() : undefined
  const [variantProps, localProps] = $derived(progress.splitVariantProps({ ...contextProps?.(), ...props }))
  const styles = $derived(progress(variantProps))
  provideProgressStyles(() => styles)
</script>

<Progress.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
