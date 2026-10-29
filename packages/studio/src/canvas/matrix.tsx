import { type CSSProperties, type MouseEvent, type PointerEvent, useEffect, useRef } from "react"
import { css } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { components } from "../components"
import { demos } from "../demos"
import { scopeMatches } from "../lib/doc"
import type { CanvasMessage, Cell, ComponentId } from "../lib/messages"
import { orderedValues, primaryVariant, stateLabel, stateProps } from "../lib/states"
import { recipes } from "../lib/theme-meta"
import { findPart } from "./selection"

const STATE = "state"

interface Axis {
  name: string
  values: string[]
}

type Combo = Record<string, string>

const combinations = (axes: Axis[]) =>
  axes.reduce<Combo[]>(
    (combos, axis) => combos.flatMap((combo) => axis.values.map((value) => ({ ...combo, [axis.name]: value }))),
    [{}],
  )

const spanOf = (axes: Axis[], level: number) =>
  axes.slice(level + 1).reduce((total, axis) => total * axis.values.length, 1)

const toProps = (variants: Combo) =>
  Object.fromEntries(
    Object.entries(variants).map(([key, value]) => [key, value === "true" ? true : value === "false" ? false : value]),
  )

const sameCell = (a: Cell | undefined, b: Cell) =>
  !!a && a.state === b.state && JSON.stringify(a.variants) === JSON.stringify(b.variants)

const frame = css({
  display: "grid",
  gap: "2",
  w: "max-content",
  minW: "full",
  alignItems: "stretch",
})

const label = css({
  display: "flex",
  alignItems: "center",
  gap: "1",
  px: "2",
  py: "1",
  borderRadius: "md",
  textStyle: "xs",
  fontFamily: "mono",
  color: "fg.muted",
  whiteSpace: "nowrap",
  cursor: "button",
  _hover: { bg: "bg.muted", color: "fg" },
  "&[data-active]": { bg: "bg.emphasized", color: "fg", fontWeight: "medium" },
  "& b": { fontWeight: "semibold", color: "fg" },
})

const columnLabel = css({ justifySelf: "center", alignSelf: "end" })

const rowLabel = css({ alignSelf: "center", justifySelf: "end" })

const columnGroup = css({ display: "flex", flexDirection: "column", alignItems: "center", gap: "1" })

const rowGroup = css({ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "1" })

const bracket = css({ flexShrink: "0", alignSelf: "stretch", borderColor: "border.emphasized", borderWidth: "1px" })

const columnBracket = css({ h: "2", borderBottomWidth: "0", borderTopRadius: "md" })

const rowBracket = css({ w: "2", borderEndWidth: "0", borderStartRadius: "md" })

const cell = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: "4",
  bg: "bg",
  borderRadius: "lg",
  borderWidth: "1px",
  borderColor: "border.muted",
  cursor: "button",
  transition: "opacity 0.15s",
  _hover: { borderColor: "border" },
  "&[data-dimmed]": { opacity: "0.3" },
  "&[data-selected]": { outline: "2px solid", outlineColor: "blue.500", outlineOffset: "1px" },
})

export function Matrix(props: {
  id: ComponentId
  states: string[]
  scope: string
  condition: string
  selectedCell: Cell | undefined
  post: (message: CanvasMessage) => void
}) {
  const recipe = recipes[components[props.id].recipe]!
  const { Sample } = demos[props.id]
  const primary = primaryVariant(recipe)
  const variantNames = Object.keys(recipe.variantMap).sort((a, b) => Number(b === primary) - Number(a === primary))
  const axes: Axis[] = [
    { name: STATE, values: props.states },
    ...variantNames.map((name) => ({ name, values: orderedValues(recipe, name) })),
  ]
  const rowAxes = axes.filter((_, index) => index % 2 === 0)
  const columnAxes = axes.filter((_, index) => index % 2 === 1)
  const rows = combinations(rowAxes)
  const columns = combinations(columnAxes)
  const headerRows = columnAxes.length
  const grid = useRef<HTMLDivElement>(null)

  useEffect(() => {
    grid.current
      ?.querySelector("[data-matrix-cell]:not([data-dimmed])")
      ?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" })
  }, [props.scope, props.condition])

  const select = (name: string, value: string) =>
    name === STATE
      ? props.post({ type: "select-state", condition: value })
      : props.post({ type: "select-scope", scope: `${name}:${value}` })

  const isActive = (name: string, value: string) =>
    name === STATE ? props.condition === value && value !== "" : props.scope === `${name}:${value}`

  const axisLabel = (name: string, value: string) =>
    name === STATE ? (
      <span>{stateLabel(value)}</span>
    ) : (
      <span>
        <b>{name}</b>: {value}
      </span>
    )

  const axisButton = (name: string, value: string, className: string, style?: CSSProperties, key?: string) => (
    <button
      type="button"
      key={key}
      className={className}
      data-active={isActive(name, value) || undefined}
      style={style}
      onClick={() => select(name, value)}
    >
      {axisLabel(name, value)}
    </button>
  )

  return (
    <styled.div overflowX="auto" pb="4">
      <div
        ref={grid}
        className={frame}
        style={{ gridTemplateColumns: `repeat(${rowAxes.length + columns.length}, max-content)` }}
      >
        {columnAxes.flatMap((axis, level) => {
          const span = spanOf(columnAxes, level)
          return columns
            .filter((_, index) => index % span === 0)
            .map((combo, index) => {
              const value = combo[axis.name]!
              const placement = {
                gridRow: level + 1,
                gridColumn: `${rowAxes.length + index * span + 1} / span ${span}`,
              }
              return level < columnAxes.length - 1 ? (
                <div key={`${axis.name}-${index}`} className={columnGroup} style={placement}>
                  {axisButton(axis.name, value, label)}
                  <span className={`${bracket} ${columnBracket}`} />
                </div>
              ) : (
                axisButton(axis.name, value, `${label} ${columnLabel}`, placement, `${axis.name}-${index}`)
              )
            })
        })}
        {rowAxes.flatMap((axis, level) => {
          const span = spanOf(rowAxes, level)
          return rows
            .filter((_, index) => index % span === 0)
            .map((combo, index) => {
              const value = combo[axis.name]!
              const placement = { gridColumn: level + 1, gridRow: `${headerRows + index * span + 1} / span ${span}` }
              return level < rowAxes.length - 1 ? (
                <div key={`${axis.name}-${index}`} className={rowGroup} style={placement}>
                  {axisButton(axis.name, value, label)}
                  <span className={`${bracket} ${rowBracket}`} />
                </div>
              ) : (
                axisButton(axis.name, value, `${label} ${rowLabel}`, placement, `${axis.name}-${index}`)
              )
            })
        })}
        {rows.flatMap((row, rowIndex) =>
          columns.map((column, columnIndex) => {
            const { [STATE]: state = "", ...variants } = { ...row, ...column }
            const current: Cell = { variants, state }
            const dimmed = !scopeMatches(props.scope, variants) || (props.condition !== "" && state !== props.condition)
            const choose = (event: MouseEvent | PointerEvent) => {
              if (event.metaKey || event.ctrlKey) return
              event.preventDefault()
              event.stopPropagation()
            }
            return (
              <div
                key={`${rowIndex}-${columnIndex}`}
                className={cell}
                data-matrix-cell=""
                data-dimmed={dimmed || undefined}
                data-selected={sameCell(props.selectedCell, current) || undefined}
                style={{ gridRow: headerRows + rowIndex + 1, gridColumn: rowAxes.length + columnIndex + 1 }}
                onPointerDownCapture={choose}
                onClickCapture={(event) => {
                  choose(event)
                  if (event.metaKey || event.ctrlKey) return
                  props.post({ type: "select-cell", cell: current, part: findPart(event.target)?.part })
                }}
              >
                <Sample {...toProps(variants)} {...stateProps(state)} />
              </div>
            )
          }),
        )}
      </div>
    </styled.div>
  )
}
