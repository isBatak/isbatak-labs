import type { LayerNode } from "../lib/messages"
import { partFromClassList } from "../lib/theme-meta"

/**
 * Builds the Component Layers tree from the rendered canvas: every element styled by a recipe part becomes a node
 * under the nearest ancestor that is also a part. Siblings with the same part (three accordion items, a demo shown
 * in several sections) are merged into one node whose children combine theirs.
 */

interface Instance {
  recipe: string
  slot: string | undefined
  children: Instance[]
}

function collect(element: Element, out: Instance[]) {
  for (const child of Array.from(element.children)) {
    const part = partFromClassList(child.classList)
    if (part) {
      const instance: Instance = { recipe: part.recipe, slot: part.slot, children: [] }
      collect(child, instance.children)
      out.push(instance)
    } else {
      collect(child, out)
    }
  }
  return out
}

function merge(instances: Instance[]): LayerNode[] {
  const groups = new Map<string, Instance[]>()
  for (const instance of instances) {
    const key = `${instance.recipe}|${instance.slot ?? ""}`
    groups.set(key, [...(groups.get(key) ?? []), instance])
  }
  return Array.from(groups.values()).map((group) => ({
    recipe: group[0]!.recipe,
    slot: group[0]!.slot,
    children: merge(group.flatMap((instance) => instance.children)),
  }))
}

export function collectLayers(root: Element): LayerNode[] {
  return merge(collect(root, []))
}
