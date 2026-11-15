<script module lang="ts">
  import { Timer } from "@ark-ui/svelte/timer"

  export type TimerActionTriggerProps = Timer.ActionTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTimerStyles } from "./timer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TimerActionTriggerProps = $props()
  const styles = useTimerStyles()
</script>

<Timer.ActionTrigger bind:ref {...props} data-slot="actionTrigger" class={[!unstyled && styles().actionTrigger, className]} />
