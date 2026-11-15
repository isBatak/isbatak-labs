<script module lang="ts">
  import { Timer } from "@ark-ui/svelte/timer"

  export type TimerItemProps = Timer.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTimerStyles } from "./timer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TimerItemProps = $props()
  const styles = useTimerStyles()
</script>

<Timer.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
