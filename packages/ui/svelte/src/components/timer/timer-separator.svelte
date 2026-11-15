<script module lang="ts">
  import { Timer } from "@ark-ui/svelte/timer"

  export type TimerSeparatorProps = Timer.SeparatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTimerStyles } from "./timer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TimerSeparatorProps = $props()
  const styles = useTimerStyles()
</script>

<Timer.Separator bind:ref {...props} data-slot="separator" class={[!unstyled && styles().separator, className]} />
