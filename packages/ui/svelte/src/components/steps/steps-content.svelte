<script module lang="ts">
  import { Steps } from "@ark-ui/svelte/steps"

  export type StepsContentProps = Steps.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useStepsStyles } from "./steps-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: StepsContentProps = $props()
  const styles = useStepsStyles()
</script>

<Steps.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
