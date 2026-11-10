<script module lang="ts">
  export interface TocTrackProps {
    scrollEl?: (() => HTMLElement | null) | undefined
  }
</script>

<script lang="ts">
  import { useTocContext } from "@ark-ui/svelte/toc"
  import { useTocStyles } from "./toc-styles"
  import { type Track, measureTrack, watchScrollDirection } from "./toc-track-measure"

  let { scrollEl }: TocTrackProps = $props()
  const styles = useTocStyles()
  const api = useTocContext()

  let svgEl = $state<SVGSVGElement | null>(null)
  let track = $state<Track | null>(null)
  let direction = $state<"up" | "down">("down")

  const edge = $derived.by(() => {
    const ids = api().activeIds
    return direction === "up" ? ids[0] : ids[ids.length - 1]
  })
  const viewBox = $derived(track ? `0 0 ${track.width} ${track.height}` : undefined)
  const size = $derived(track ? `width: ${track.width}px; height: ${track.height}px` : undefined)

  $effect(() => {
    const list = svgEl?.parentElement
    if (!list) return
    const update = () => {
      track = measureTrack(list)
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(list)
    const stopScroll = watchScrollDirection(scrollEl, (next) => {
      direction = next
    })
    return () => {
      observer.disconnect()
      stopScroll()
    }
  })

  $effect(() => {
    const list = svgEl?.parentElement
    if (!list) return
    list.dataset.scrollDirection = direction
    list.style.setProperty("--toc-dot-x", `${(edge && track?.x[edge]) ?? 1}px`)
  })
</script>

<svg bind:this={svgEl} aria-hidden="true" {viewBox} style={size} data-slot="track" class={styles().track}>
  {#if track}<path d={track.path} />{/if}
</svg>
<svg aria-hidden="true" data-active="" {viewBox} style={size} data-slot="track" class={styles().track}>
  {#if track}<path d={track.path} />{/if}
</svg>
