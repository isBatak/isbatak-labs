"use client"

import { Toc } from "@isbatak/react-ui/toc"
import { useRef } from "react"
import { Grid } from "styled-system/jsx"

import { DemoArticle } from "./demo-article"

const items = [
  { value: "toc-track-introduction", depth: 1 },
  { value: "toc-track-installation", depth: 1 },
  { value: "toc-track-usage", depth: 1 },
  { value: "toc-track-props", depth: 2 },
  { value: "toc-track-events", depth: 2 },
  { value: "toc-track-styling", depth: 1 },
]

export function TocTrackDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const getScrollEl = () => ref.current

  return (
    <Grid gridTemplateColumns="minmax(0, 1fr) 11rem" gap="8" w="full">
      <DemoArticle prefix="toc-track" ref={ref} />
      <Toc.Root items={items} scrollEl={getScrollEl} variant="track">
        <Toc.List>
          <Toc.Track scrollEl={getScrollEl} />
          <Toc.Indicator />
          <Toc.Item item={{ value: "toc-track-introduction", depth: 1 }}>
            <Toc.Link href="#toc-track-introduction">Introduction</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-track-installation", depth: 1 }}>
            <Toc.Link href="#toc-track-installation">Installation</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-track-usage", depth: 1 }}>
            <Toc.Link href="#toc-track-usage">Usage</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-track-props", depth: 2 }}>
            <Toc.Link href="#toc-track-props">Props</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-track-events", depth: 2 }}>
            <Toc.Link href="#toc-track-events">Events</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-track-styling", depth: 1 }}>
            <Toc.Link href="#toc-track-styling">Styling</Toc.Link>
          </Toc.Item>
        </Toc.List>
      </Toc.Root>
    </Grid>
  )
}
