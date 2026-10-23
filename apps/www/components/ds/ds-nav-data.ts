import { components, styles } from "#site/content"

export interface DsNavItem {
  title: string
  permalink: string
}

export interface DsNavGroup {
  title: string
  items: DsNavItem[]
}

export type DsSection = "components" | "styles"

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

export function dsNavGroups(section: DsSection): DsNavGroup[] {
  return section === "styles" ? styleGroups() : componentGroups()
}
