<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioCardItemIndicatorProps = RadioGroup.ItemControlProps
</script>

<script lang="ts">
  import { useRadioCardStyles } from "./radio-card-styles"

  let { ref = $bindable(null), class: className, children, ...props }: RadioCardItemIndicatorProps = $props()
  const styles = useRadioCardStyles()
</script>

<RadioGroup.ItemControl bind:ref {...props} data-slot="itemIndicator" class={[styles().itemIndicator, className]}>
  {#if children}
    {@render children()}
  {:else}
    <span class="dot"></span>
  {/if}
</RadioGroup.ItemControl>
