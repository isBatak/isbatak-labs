<script module lang="ts">
  import { Steps } from "@ark-ui/svelte/steps"

  export type StepsTriggerProps = Steps.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useStepsStyles } from "./steps-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: StepsTriggerProps = $props()
  const styles = useStepsStyles()
</script>

<Steps.Trigger bind:ref {...props} data-slot="trigger" class={[!unstyled && styles().trigger, className]} />
