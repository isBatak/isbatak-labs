import { Toc, useTocContext } from "@ark-ui/vue/toc"
import {
  type Component,
  type PropType,
  computed,
  defineComponent,
  h,
  onMounted,
  onUnmounted,
  ref,
  watchEffect,
} from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { toc } from "@isbatak/panda-ds/recipes"
import { type Track, measureTrack, watchScrollDirection } from "./toc-track-measure"

const { withProvider, withContext } = createSlotRecipeContext(toc)

export const TocRoot = withProvider(Toc.Root, "root")
export type TocRootProps = ComponentProps<typeof TocRoot>

export const TocTitle = withContext(Toc.Title, "title")
export type TocTitleProps = ComponentProps<typeof TocTitle>

export const TocList = withContext(Toc.List, "list")
export type TocListProps = ComponentProps<typeof TocList>

export const TocItem = withContext(Toc.Item, "item")
export type TocItemProps = ComponentProps<typeof TocItem>

export const TocLink = withContext(Toc.Link, "link")
export type TocLinkProps = ComponentProps<typeof TocLink>

export const TocIndicator = withContext(Toc.Indicator, "indicator")
export type TocIndicatorProps = ComponentProps<typeof TocIndicator>

export const TocContext = Toc.Context
export type TocContextProps = Toc.ContextProps

const TrackSvg = withContext("svg", "track")

export interface TocTrackProps {
  scrollEl?: () => HTMLElement | null
}

export const TocTrack = defineComponent({
  name: "TocTrack",
  props: {
    scrollEl: { type: Function as PropType<() => HTMLElement | null>, required: false },
  },
  setup(props) {
    const svgRef = ref<{ $el?: Element } | Element | null>(null)
    const track = ref<Track | null>(null)
    const direction = ref<"up" | "down">("down")
    const listEl = ref<HTMLElement | null>(null)
    const api = useTocContext()
    const edge = computed(() =>
      direction.value === "up" ? api.value.activeIds[0] : api.value.activeIds[api.value.activeIds.length - 1],
    )

    let observer: ResizeObserver | undefined
    let stopScroll: (() => void) | undefined

    onMounted(() => {
      const node = svgRef.value
      const el = node instanceof Element ? node : (node?.$el ?? null)
      const list = el?.parentElement ?? null
      if (!list) return
      listEl.value = list
      const update = () => {
        track.value = measureTrack(list)
      }
      update()
      observer = new ResizeObserver(update)
      observer.observe(list)
      stopScroll = watchScrollDirection(props.scrollEl, (next) => {
        direction.value = next
      })
    })

    onUnmounted(() => {
      observer?.disconnect()
      stopScroll?.()
    })

    watchEffect(() => {
      const list = listEl.value
      if (!list) return
      list.dataset.scrollDirection = direction.value
      list.style.setProperty("--toc-dot-x", `${(edge.value && track.value?.x[edge.value]) ?? 1}px`)
    })

    return () => {
      const current = track.value
      const svgProps = {
        "aria-hidden": "true",
        viewBox: current ? `0 0 ${current.width} ${current.height}` : undefined,
        style: current ? { width: `${current.width}px`, height: `${current.height}px` } : undefined,
      }
      const path = () => (current ? h("path", { d: current.path }) : null)
      return [
        h(TrackSvg as Component, { ref: svgRef, ...svgProps }, path),
        h(TrackSvg as Component, { "data-active": "", ...svgProps }, path),
      ]
    }
  },
})
