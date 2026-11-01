import { components, icons, styles } from "#site/content"

import type { DsSection } from "./ds-sections"

export type { DsSection }

export interface DsNavItem {
  title: string
  permalink: string
}

export interface DsNavGroup {
  title: string
  items: DsNavItem[]
}

const toItem = ({ title, permalink }: DsNavItem): DsNavItem => ({ title, permalink })

function componentGroups(): DsNavGroup[] {
  const groups = new Map<string, DsNavItem[]>()
  const visible = components.filter((component) => !component.hidden).toSorted((a, b) => a.title.localeCompare(b.title))
  for (const item of visible) groups.set(item.category, [...(groups.get(item.category) ?? []), toItem(item)])
  return [...groups].toSorted(([a], [b]) => a.localeCompare(b)).map(([title, items]) => ({ title, items }))
}

function styleGroups(): DsNavGroup[] {
  return [
    {
      title: "Styles",
      items: [
        { title: "Overview", permalink: "/ds/styles" },
        ...styles.toSorted((a, b) => a.order - b.order || a.title.localeCompare(b.title)).map(toItem),
      ],
    },
  ]
}

function iconGroups(): DsNavGroup[] {
  return [{ title: "Icons", items: icons.toSorted((a, b) => a.order - b.order).map(toItem) }]
}

const sectionGroups: Record<DsSection, () => DsNavGroup[]> = {
  components: componentGroups,
  styles: styleGroups,
  icons: iconGroups,
}

export function dsNavGroups(section: DsSection): DsNavGroup[] {
  return sectionGroups[section]()
}
