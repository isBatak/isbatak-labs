"use client"

import { Toc, useTocContext } from "@ark-ui/react/toc"
import { type ComponentProps, useEffect, useLayoutEffect, useRef, useState } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { toc } from "@isbatak/panda-ds/recipes"

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

const CURVE = 6

interface Track {
  path: string
  width: number
  height: number
  x: Record<string, number>
}

function measureTrack(listEl: HTMLElement): Track {
  const indent = parseFloat(getComputedStyle(listEl).getPropertyValue("--toc-indent")) || 10
  const x: Record<string, number> = {}
  let path = ""
  let prevX: number | null = null
  let maxX = 0
  let bottom = 0

  for (const el of listEl.querySelectorAll<HTMLElement>(":scope > li[data-value]")) {
    const top = el.offsetTop
    const itemX = 1 + (Number(el.dataset.depth ?? 1) - 1) * indent
    x[el.dataset.value ?? ""] = itemX
    maxX = Math.max(maxX, itemX)
    bottom = top + el.offsetHeight

    if (prevX === null) path += `M ${itemX} ${top}`
    else if (prevX === itemX) path += ` L ${itemX} ${top}`
    else path += ` L ${prevX} ${top - CURVE} C ${prevX} ${top} ${itemX} ${top} ${itemX} ${top + CURVE}`
    prevX = itemX
  }

  if (prevX !== null) path += ` L ${prevX} ${bottom}`
  return { path, width: maxX + 2, height: listEl.offsetHeight, x }
}

function useScrollDirection(getScrollEl?: () => HTMLElement | null) {
  const [direction, setDirection] = useState<"up" | "down">("down")

  useEffect(() => {
    const target: HTMLElement | Window = getScrollEl?.() ?? window
    const read = () => (target instanceof Window ? target.scrollY : target.scrollTop)
    let last = read()
    const onScroll = () => {
      const current = read()
      if (current !== last) setDirection(current > last ? "down" : "up")
      last = current
    }
    target.addEventListener("scroll", onScroll, { passive: true })
    return () => target.removeEventListener("scroll", onScroll)
  }, [getScrollEl])

  return direction
}

export interface TocTrackProps {
  scrollEl?: () => HTMLElement | null
}

export function TocTrack({ scrollEl }: TocTrackProps) {
  const ref = useRef<SVGSVGElement>(null)
  const [track, setTrack] = useState<Track | null>(null)
  const api = useTocContext()
  const direction = useScrollDirection(scrollEl)
  const edge = direction === "up" ? api.activeIds[0] : api.activeIds[api.activeIds.length - 1]

  useLayoutEffect(() => {
    const listEl = ref.current?.parentElement
    if (!listEl) return
    const update = () => setTrack(measureTrack(listEl))
    update()
    const observer = new ResizeObserver(update)
    observer.observe(listEl)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const listEl = ref.current?.parentElement
    if (!listEl) return
    listEl.dataset.scrollDirection = direction
    listEl.style.setProperty("--toc-dot-x", `${(edge && track?.x[edge]) ?? 1}px`)
  }, [direction, edge, track])

  const size = track && { width: track.width, height: track.height }
  const viewBox = track ? `0 0 ${track.width} ${track.height}` : undefined

  return (
    <>
      <TrackSvg ref={ref} aria-hidden viewBox={viewBox} style={size ?? undefined}>
        {track && <path d={track.path} />}
      </TrackSvg>
      <TrackSvg aria-hidden data-active="" viewBox={viewBox} style={size ?? undefined}>
        {track && <path d={track.path} />}
      </TrackSvg>
    </>
  )
}
