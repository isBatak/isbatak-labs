<script module lang="ts">
  import { Steps } from "@ark-ui/svelte/steps"

  export type StepsNextTriggerProps = Steps.NextTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useStepsStyles } from "./steps-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: StepsNextTriggerProps = $props()
  const styles = useStepsStyles()
</script>

<Steps.NextTrigger bind:ref {...props} data-slot="nextTrigger" class={[!unstyled && styles().nextTrigger, className]} />
