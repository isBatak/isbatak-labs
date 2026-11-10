<script module lang="ts">
  import { Steps } from "@ark-ui/svelte/steps"

  export type StepsSeparatorProps = Steps.SeparatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useStepsStyles } from "./steps-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: StepsSeparatorProps = $props()
  const styles = useStepsStyles()
</script>

<Steps.Separator bind:ref {...props} data-slot="separator" class={[!unstyled && styles().separator, className]} />
