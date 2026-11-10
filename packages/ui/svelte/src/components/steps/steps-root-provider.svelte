<script module lang="ts">
  import { Steps } from "@ark-ui/svelte/steps"
  import { steps, type StepsVariantProps } from "@isbatak/panda-ds/recipes"

  export type StepsRootProviderProps = Steps.RootProviderProps & StepsVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideStepsStyles } from "./steps-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: StepsRootProviderProps = $props()
  const [variantProps, localProps] = $derived(steps.splitVariantProps(props))
  const styles = $derived(steps(variantProps))
  provideStepsStyles(() => styles)
</script>

<Steps.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
