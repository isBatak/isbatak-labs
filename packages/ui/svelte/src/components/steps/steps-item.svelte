<script module lang="ts">
  import { Steps } from "@ark-ui/svelte/steps"

  export type StepsItemProps = Steps.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useStepsStyles } from "./steps-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: StepsItemProps = $props()
  const styles = useStepsStyles()
</script>

<Steps.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
