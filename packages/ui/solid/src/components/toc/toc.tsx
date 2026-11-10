import { Toc, useTocContext } from "@ark-ui/solid/toc"
import { type ComponentProps, Show, createEffect, createSignal, onCleanup, onMount } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
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

export function TocTrack(props: TocTrackProps) {
  let svgEl: SVGSVGElement | undefined
  const [track, setTrack] = createSignal<Track | null>(null)
  const [direction, setDirection] = createSignal<"up" | "down">("down")
  const [listEl, setListEl] = createSignal<HTMLElement | null>(null)
  const api = useTocContext()
  const edge = () => {
    const ids = api().activeIds
    return direction() === "up" ? ids[0] : ids[ids.length - 1]
  }

  onMount(() => {
    const list = svgEl?.parentElement
    if (!list) return
    setListEl(list)
    const update = () => setTrack(measureTrack(list))
    update()
    const observer = new ResizeObserver(update)
    observer.observe(list)
    const stopScroll = watchScrollDirection(props.scrollEl, setDirection)
    onCleanup(() => {
      observer.disconnect()
      stopScroll()
    })
  })

  createEffect(() => {
    const list = listEl()
    if (!list) return
    const id = edge()
    list.dataset.scrollDirection = direction()
    list.style.setProperty("--toc-dot-x", `${(id && track()?.x[id]) ?? 1}px`)
  })

  const viewBox = () => {
    const current = track()
    return current ? `0 0 ${current.width} ${current.height}` : undefined
  }
  const size = () => {
    const current = track()
    return current ? { width: `${current.width}px`, height: `${current.height}px` } : undefined
  }

  return (
    <>
      <TrackSvg ref={(el: SVGSVGElement) => (svgEl = el)} aria-hidden="true" viewBox={viewBox()} style={size()}>
        <Show when={track()}>{(current) => <path d={current().path} />}</Show>
      </TrackSvg>
      <TrackSvg aria-hidden="true" data-active="" viewBox={viewBox()} style={size()}>
        <Show when={track()}>{(current) => <path d={current().path} />}</Show>
      </TrackSvg>
    </>
  )
}
