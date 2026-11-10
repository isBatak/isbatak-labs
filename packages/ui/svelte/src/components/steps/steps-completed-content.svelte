<script module lang="ts">
  import { Steps } from "@ark-ui/svelte/steps"

  export type StepsCompletedContentProps = Steps.CompletedContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useStepsStyles } from "./steps-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: StepsCompletedContentProps = $props()
  const styles = useStepsStyles()
</script>

<Steps.CompletedContent bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
