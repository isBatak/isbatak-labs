import { type Component, components, icons, styles } from "#site/content"
import { iconNames } from "@isbatak/icons"

import type { IconName } from "../ui/icon"
import type { DsSection } from "./ds-sections"

export type { DsSection }

export interface DsNavNode {
  id: string
  title: string
  icon: IconName
  permalink?: string
  children?: DsNavNode[]
}

interface NavSource {
  title: string
  permalink: string
  icon?: string
}

const isIconName = (name: string | undefined): name is IconName => iconNames.some((icon) => icon === name)

const toLeaf = ({ title, permalink, icon }: NavSource, fallback: IconName): DsNavNode => ({
  id: permalink,
  title,
  permalink,
  icon: isIconName(icon) ? icon : fallback,
})

const categoryIcons: Record<Component["category"], IconName> = {
  Layout: "grid",
  Typography: "text-direction",
  Buttons: "pointer",
  "Date & Time": "calendar",
  Forms: "edit",
  Collections: "folder",
  Overlays: "window-restore",
  Navigation: "map-pin",
  Disclosure: "collapse",
  Feedback: "bell",
  "Data Display": "chart-pie",
}

function componentNodes(): DsNavNode[] {
  const groups = new Map<Component["category"], DsNavNode[]>()
  const visible = components.filter((component) => !component.hidden).toSorted((a, b) => a.title.localeCompare(b.title))
  for (const item of visible)
    groups.set(item.category, [...(groups.get(item.category) ?? []), toLeaf(item, "components")])
  return [...groups]
    .toSorted(([a], [b]) => a.localeCompare(b))
    .map(([title, children]) => ({ id: `category:${title}`, title, icon: categoryIcons[title], children }))
}

function styleNodes(): DsNavNode[] {
  return [
    { id: "/ds/styles", title: "Overview", permalink: "/ds/styles", icon: "home" },
    ...styles
      .toSorted((a, b) => a.order - b.order || a.title.localeCompare(b.title))
      .map((style) => toLeaf(style, "contrast")),
  ]
}

function iconNodes(): DsNavNode[] {
  return icons.toSorted((a, b) => a.order - b.order).map((doc) => toLeaf(doc, "star"))
}

const sectionNodes: Record<DsSection, () => DsNavNode[]> = {
  components: componentNodes,
  styles: styleNodes,
  icons: iconNodes,
}

export function dsNavNodes(section: DsSection): DsNavNode[] {
  return sectionNodes[section]()
}
