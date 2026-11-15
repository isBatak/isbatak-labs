<script module lang="ts">
  import { Timer } from "@ark-ui/svelte/timer"

  export type TimerAreaProps = Timer.AreaProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTimerStyles } from "./timer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TimerAreaProps = $props()
  const styles = useTimerStyles()
</script>

<Timer.Area bind:ref {...props} data-slot="area" class={[!unstyled && styles().area, className]} />
