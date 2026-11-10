<script module lang="ts">
  import { Steps } from "@ark-ui/svelte/steps"

  export type StepsPrevTriggerProps = Steps.PrevTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useStepsStyles } from "./steps-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: StepsPrevTriggerProps = $props()
  const styles = useStepsStyles()
</script>

<Steps.PrevTrigger bind:ref {...props} data-slot="prevTrigger" class={[!unstyled && styles().prevTrigger, className]} />
