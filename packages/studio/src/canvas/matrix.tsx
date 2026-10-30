import { type CSSProperties, type MouseEvent, type PointerEvent, useEffect, useRef } from "react"
import { css, cx } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { scopeMatches } from "../lib/doc"
import type { CanvasMessage, Cell, ComponentId } from "../lib/messages"
import { stateProps } from "../lib/states"
import { type RecipeMeta, recipes } from "../lib/theme-meta"
import { components } from "../components"
import { type Axis, formatAxisValue, resolveAxes } from "../component-matrix/axes"
import { type ComponentMatrix, STATE } from "../component-matrix/define-component-matrix"
import { findPart } from "./selection"

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
  !!a && a.matrix === b.matrix && a.state === b.state && JSON.stringify(a.variants) === JSON.stringify(b.variants)

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
  "& b": { fontWeight: "semibold", color: "fg" },
})

const selectable = css({
  cursor: "button",
  _hover: { bg: "bg.muted", color: "fg" },
  "&[data-active]": { bg: "bg.emphasized", color: "fg", fontWeight: "medium" },
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
  // Overlays (menus, popovers, drawers) render open in the cell's flow instead of floating
  "& [data-slot=positioner]": {
    position: "relative !important",
    inset: "auto !important",
    transform: "none !important",
    minW: "0 !important",
    w: "auto !important",
    h: "auto !important",
    zIndex: "auto !important",
  },
  "& [data-slot=content]": { animation: "none !important" },
})

interface SelectionProps {
  scope: string
  condition: string
  selectedCell: Cell | undefined
  post: (message: CanvasMessage) => void
}

export function Matrix(props: SelectionProps & { id: ComponentId; states: string[] }) {
  const { recipe: key, matrices } = components[props.id]
  const recipe = recipes[key]!
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    root.current
      ?.querySelector("[data-matrix-cell]:not([data-dimmed])")
      ?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" })
  }, [props.scope, props.condition])

  return (
    <styled.div ref={root} display="flex" flexDirection="column" gap="10">
      {matrices.map((matrix, index) => (
        <MatrixGrid key={index} {...props} matrix={matrix} index={index} recipe={recipe} />
      ))}
    </styled.div>
  )
}

function MatrixGrid(
  props: SelectionProps & { matrix: ComponentMatrix; index: number; recipe: RecipeMeta; states: string[] },
) {
  const { matrix, recipe } = props
  const { x: columnAxes, y: rowAxes, fixed } = resolveAxes(matrix, recipe, props.states)
  const rows = combinations(rowAxes)
  const columns = combinations(columnAxes)
  const headerRows = columnAxes.length

  const selectableAxis = (name: string) => name === STATE || !!recipe.variantMap[name]

  const select = (name: string, value: string) => {
    if (name === STATE) props.post({ type: "select-state", condition: value })
    else props.post({ type: "select-scope", scope: `${name}:${value}` })
  }

  const isActive = (name: string, value: string) =>
    name === STATE ? props.condition === value && value !== "" : props.scope === `${name}:${value}`

  const axisLabel = (axis: Axis, value: string) =>
    axis.config.showPropName ? (
      <span>
        <b>{axis.name}</b>: {formatAxisValue(axis, value)}
      </span>
    ) : (
      <span>{formatAxisValue(axis, value)}</span>
    )

  const axisButton = (axis: Axis, value: string, className: string, style?: CSSProperties, key?: string) =>
    selectableAxis(axis.name) ? (
      <button
        type="button"
        key={key}
        className={cx(className, selectable)}
        data-active={isActive(axis.name, value) || undefined}
        style={style}
        onClick={() => select(axis.name, value)}
      >
        {axisLabel(axis, value)}
      </button>
    ) : (
      <span key={key} className={className} style={style}>
        {axisLabel(axis, value)}
      </span>
    )

  return (
    <styled.section display="flex" flexDirection="column" gap="4">
      {matrix.title && (
        <styled.h2 textStyle="sm" fontWeight="semibold" color="fg">
          {matrix.title}
        </styled.h2>
      )}
      <styled.div overflowX="auto" pb="4">
        <div
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
                    {axisButton(axis, value, label)}
                    <span className={`${bracket} ${columnBracket}`} />
                  </div>
                ) : (
                  axisButton(axis, value, `${label} ${columnLabel}`, placement, `${axis.name}-${index}`)
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
                    {axisButton(axis, value, label)}
                    <span className={`${bracket} ${rowBracket}`} />
                  </div>
                ) : (
                  axisButton(axis, value, `${label} ${rowLabel}`, placement, `${axis.name}-${index}`)
                )
              })
          })}
          {rows.flatMap((row, rowIndex) =>
            columns.map((column, columnIndex) => {
              const { [STATE]: state = fixed[STATE] ?? "", ...values } = { ...fixed, ...row, ...column }
              const variants = Object.fromEntries(
                Object.entries(values)
                  .filter(([name]) => recipe.variantMap[name])
                  .map(([name, value]) => [name, String(value)]),
              )
              const current: Cell = { matrix: props.index, variants, state }
              const dimmed =
                !scopeMatches(props.scope, variants) || (props.condition !== "" && state !== props.condition)
              const choose = (event: MouseEvent | PointerEvent) => {
                if (event.metaKey || event.ctrlKey) return
                event.preventDefault()
                event.stopPropagation()
              }
              return (
                <div
                  key={`${rowIndex}-${columnIndex}`}
                  className={cx(cell, matrix.container)}
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
                  {matrix.render({ ...toProps(values), ...stateProps(state) })}
                </div>
              )
            }),
          )}
        </div>
      </styled.div>
    </styled.section>
  )
}
