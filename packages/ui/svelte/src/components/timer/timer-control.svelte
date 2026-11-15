<script module lang="ts">
  import { Timer } from "@ark-ui/svelte/timer"

  export type TimerControlProps = Timer.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTimerStyles } from "./timer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TimerControlProps = $props()
  const styles = useTimerStyles()
</script>

<Timer.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
