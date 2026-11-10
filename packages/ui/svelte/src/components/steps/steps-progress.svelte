<script module lang="ts">
  import { Steps } from "@ark-ui/svelte/steps"

  export type StepsProgressProps = Steps.ProgressProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useStepsStyles } from "./steps-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: StepsProgressProps = $props()
  const styles = useStepsStyles()
</script>

<Steps.Progress bind:ref {...props} data-slot="progress" class={[!unstyled && styles().progress, className]} />
