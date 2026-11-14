<script module lang="ts">
  import { Progress } from "@ark-ui/svelte/progress"
  import { progressCircle, type ProgressCircleVariantProps } from "@isbatak/panda-ds/recipes"

  export type ProgressCircleRootProps = Progress.RootProps & ProgressCircleVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { hasProgressCircleProps, provideProgressCircleStyles, useProgressCircleProps } from "./progress-circle-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ProgressCircleRootProps = $props()
  const contextProps = hasProgressCircleProps() ? useProgressCircleProps() : undefined
  const [variantProps, localProps] = $derived(progressCircle.splitVariantProps({ ...contextProps?.(), ...props }))
  const styles = $derived(progressCircle(variantProps))
  provideProgressCircleStyles(() => styles)
</script>

<Progress.Root bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
