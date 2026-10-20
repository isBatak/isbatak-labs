"use client"

import { Toc } from "@isbatak/react-ui/toc"
import { Grid } from "styled-system/jsx"

const items = [
  { value: "toc-sizes-introduction", depth: 1 },
  { value: "toc-sizes-installation", depth: 1 },
  { value: "toc-sizes-usage", depth: 1 },
  { value: "toc-sizes-props", depth: 2 },
  { value: "toc-sizes-events", depth: 2 },
  { value: "toc-sizes-styling", depth: 1 },
]

export function TocSizesDemo() {
  return (
    <Grid gridTemplateColumns="repeat(2, 11rem)" gap="10">
      <Toc.Root items={items} defaultActiveIds={["toc-sizes-props"]} size="sm">
        <Toc.Title>Small</Toc.Title>
        <Toc.List>
          <Toc.Indicator />
          <Toc.Item item={{ value: "toc-sizes-introduction", depth: 1 }}>
            <Toc.Link href="#toc-sizes-introduction">Introduction</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-sizes-installation", depth: 1 }}>
            <Toc.Link href="#toc-sizes-installation">Installation</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-sizes-usage", depth: 1 }}>
            <Toc.Link href="#toc-sizes-usage">Usage</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-sizes-props", depth: 2 }}>
            <Toc.Link href="#toc-sizes-props">Props</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-sizes-events", depth: 2 }}>
            <Toc.Link href="#toc-sizes-events">Events</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-sizes-styling", depth: 1 }}>
            <Toc.Link href="#toc-sizes-styling">Styling</Toc.Link>
          </Toc.Item>
        </Toc.List>
      </Toc.Root>
      <Toc.Root items={items} defaultActiveIds={["toc-sizes-props"]} size="md">
        <Toc.Title>Medium</Toc.Title>
        <Toc.List>
          <Toc.Indicator />
          <Toc.Item item={{ value: "toc-sizes-introduction", depth: 1 }}>
            <Toc.Link href="#toc-sizes-introduction">Introduction</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-sizes-installation", depth: 1 }}>
            <Toc.Link href="#toc-sizes-installation">Installation</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-sizes-usage", depth: 1 }}>
            <Toc.Link href="#toc-sizes-usage">Usage</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-sizes-props", depth: 2 }}>
            <Toc.Link href="#toc-sizes-props">Props</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-sizes-events", depth: 2 }}>
            <Toc.Link href="#toc-sizes-events">Events</Toc.Link>
          </Toc.Item>
          <Toc.Item item={{ value: "toc-sizes-styling", depth: 1 }}>
            <Toc.Link href="#toc-sizes-styling">Styling</Toc.Link>
          </Toc.Item>
        </Toc.List>
      </Toc.Root>
    </Grid>
  )
}
