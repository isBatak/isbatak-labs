<script module lang="ts">
  import type { Snippet } from "svelte"

  import type { SliderMarkerGroupProps } from "./slider-marker-group.svelte"

  export type SliderMarksProps = SliderMarkerGroupProps & {
    marks?: Array<number | { value: number; label: string | Snippet }> | undefined
  }
</script>

<script lang="ts">
  import SliderMarker from "./slider-marker.svelte"
  import SliderMarkerGroup from "./slider-marker-group.svelte"
  import SliderMarkerIndicator from "./slider-marker-indicator.svelte"
  import SliderMarkerLabel from "./slider-marker-label.svelte"

  let { marks, ...props }: SliderMarksProps = $props()
</script>

{#if marks?.length}
  <SliderMarkerGroup {...props}>
    {#each marks as mark (typeof mark === "number" ? mark : mark.value)}
      <SliderMarker value={typeof mark === "number" ? mark : mark.value}>
        <SliderMarkerIndicator />
        {#if typeof mark !== "number"}
          <SliderMarkerLabel>
            {#if typeof mark.label === "string"}{mark.label}{:else}{@render mark.label()}{/if}
          </SliderMarkerLabel>
        {/if}
      </SliderMarker>
    {/each}
  </SliderMarkerGroup>
{/if}
