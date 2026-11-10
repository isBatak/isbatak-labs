<script module lang="ts">
  import { Steps } from "@ark-ui/svelte/steps"

  export type StepsListProps = Steps.ListProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useStepsStyles } from "./steps-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: StepsListProps = $props()
  const styles = useStepsStyles()
</script>

<Steps.List bind:ref {...props} data-slot="list" class={[!unstyled && styles().list, className]} />
