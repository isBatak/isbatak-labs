<script module lang="ts">
  import { AngleSlider } from "@ark-ui/svelte/angle-slider"

  export type AngleSliderValueTextProps = AngleSlider.ValueTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useAngleSliderContext } from "@ark-ui/svelte/angle-slider"
  import { useAngleSliderStyles } from "./angle-slider-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: AngleSliderValueTextProps = $props()
  const styles = useAngleSliderStyles()
  const angleSlider = useAngleSliderContext()
</script>

<AngleSlider.ValueText bind:ref {...props} data-slot="valueText" class={[!unstyled && styles().valueText, className]}>
  {#if children}
    {@render children()}
  {:else}
    {angleSlider().value}°
  {/if}
</AngleSlider.ValueText>
