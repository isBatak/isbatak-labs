import { ark } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { ReactElement, ReactNode } from "react"
import type { AnyRecord, PartElement } from "./types"

export const capitalize = (name: string) => name.charAt(0).toUpperCase() + name.slice(1)

export const pascal = (name: string) => name.split("-").map(capitalize).join("")

export function split(props: AnyRecord, keys: readonly PropertyKey[] = []) {
  const own: AnyRecord = {}
  const local: AnyRecord = {}
  for (const key in props) {
    ;(keys.includes(key) ? own : local)[key] = props[key]
  }
  return [own, local] as const
}

export function renderPart(
  api: AnyRecord,
  part: string,
  tag: PartElement,
  props: AnyRecord,
  local: AnyRecord,
  extra?: ReactNode,
) {
  const name = capitalize(part)
  const Element = (typeof tag === "string" ? ark[tag] : tag) as (props: AnyRecord) => ReactElement
  const merged = mergeProps(api[`get${name}Props`](props), local)
  const state = api[`get${name}State`]?.(props)
  if (extra === undefined) return <Element {...merged} state={state} />
  return (
    <Element {...merged} state={state}>
      {extra}
      {local.children}
    </Element>
  )
}
