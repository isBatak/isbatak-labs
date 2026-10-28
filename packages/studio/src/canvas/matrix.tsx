import { type MouseEvent, type PointerEvent, useEffect, useRef } from "react"
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
  cursor: "pointer",
  _hover: { bg: "bg.muted", color: "fg" },
  "&[data-active]": { bg: "bg.emphasized", color: "fg", fontWeight: "medium" },
  "& b": { fontWeight: "semibold", color: "fg" },
})

const columnLabel = css({ justifyContent: "center", borderBottomWidth: "1px", borderColor: "border.muted" })

const rowLabel = css({ justifyContent: "flex-end", borderEndWidth: "1px", borderColor: "border.muted" })

const cell = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: "4",
  bg: "bg",
  borderRadius: "lg",
  borderWidth: "1px",
  borderColor: "border.muted",
  cursor: "pointer",
  transition: "opacity 0.15s",
  _hover: { borderColor: "border" },
  "&[data-dimmed]": { opacity: "0.3" },
  "&[data-selected]": { outline: "2px solid #3b82f6", outlineOffset: "1px" },
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

  return (
    <styled.div overflowX="auto" pb="4">
      <div
        ref={grid}
        className={frame}
        style={{ gridTemplateColumns: `repeat(${rowAxes.length}, auto) repeat(${columns.length}, max-content)` }}
      >
        {columnAxes.flatMap((axis, level) => {
          const span = spanOf(columnAxes, level)
          return columns
            .filter((_, index) => index % span === 0)
            .map((combo, index) => {
              const value = combo[axis.name]!
              return (
                <button
                  type="button"
                  key={`${axis.name}-${index}`}
                  className={`${label} ${columnLabel}`}
                  data-active={isActive(axis.name, value) || undefined}
                  style={{
                    gridRow: level + 1,
                    gridColumn: `${rowAxes.length + index * span + 1} / span ${span}`,
                  }}
                  onClick={() => select(axis.name, value)}
                >
                  {axisLabel(axis.name, value)}
                </button>
              )
            })
        })}
        {rowAxes.flatMap((axis, level) => {
          const span = spanOf(rowAxes, level)
          return rows
            .filter((_, index) => index % span === 0)
            .map((combo, index) => {
              const value = combo[axis.name]!
              return (
                <button
                  type="button"
                  key={`${axis.name}-${index}`}
                  className={`${label} ${rowLabel}`}
                  data-active={isActive(axis.name, value) || undefined}
                  style={{ gridColumn: level + 1, gridRow: `${headerRows + index * span + 1} / span ${span}` }}
                  onClick={() => select(axis.name, value)}
                >
                  {axisLabel(axis.name, value)}
                </button>
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
