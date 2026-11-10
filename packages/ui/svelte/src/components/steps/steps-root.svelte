<script module lang="ts">
  import { Steps } from "@ark-ui/svelte/steps"
  import { steps, type StepsVariantProps } from "@isbatak/panda-ds/recipes"

  export type StepsRootProps = Steps.RootProps & StepsVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideStepsStyles } from "./steps-styles"

  let { ref = $bindable(null), step = $bindable(), unstyled, class: className, ...props }: StepsRootProps = $props()
  const [variantProps, localProps] = $derived(steps.splitVariantProps(props))
  const styles = $derived(steps(variantProps))
  provideStepsStyles(() => styles)
</script>

<Steps.Root
  bind:ref
  bind:step
  {...localProps}
  orientation={typeof variantProps.orientation === "string" ? variantProps.orientation : undefined}
  data-slot="root"
  class={[!unstyled && styles.root, className]}
/>
