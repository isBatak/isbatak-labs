<script module lang="ts">
  import { Timer } from "@ark-ui/svelte/timer"
  import { timer, type TimerVariantProps } from "@isbatak/panda-ds/recipes"

  export type TimerRootProps = Timer.RootProps & TimerVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideTimerStyles } from "./timer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TimerRootProps = $props()
  const [variantProps, localProps] = $derived(timer.splitVariantProps(props))
  const styles = $derived(timer(variantProps))
  provideTimerStyles(() => styles)
</script>

<Timer.Root bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
