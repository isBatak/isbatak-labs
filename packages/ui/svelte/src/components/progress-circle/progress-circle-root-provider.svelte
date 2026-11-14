<script module lang="ts">
  import { Progress } from "@ark-ui/svelte/progress"
  import { progressCircle, type ProgressCircleVariantProps } from "@isbatak/panda-ds/recipes"

  export type ProgressCircleRootProviderProps = Progress.RootProviderProps & ProgressCircleVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { hasProgressCircleProps, provideProgressCircleStyles, useProgressCircleProps } from "./progress-circle-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ProgressCircleRootProviderProps = $props()
  const contextProps = hasProgressCircleProps() ? useProgressCircleProps() : undefined
  const [variantProps, localProps] = $derived(progressCircle.splitVariantProps({ ...contextProps?.(), ...props }))
  const styles = $derived(progressCircle(variantProps))
  provideProgressCircleStyles(() => styles)
</script>

<Progress.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
