import { type JSX, createMemo, splitProps } from "solid-js"
import { token } from "@isbatak/panda-ds/tokens"
import type { ConditionalValue, Token } from "@isbatak/panda-ds/types"

import { Grid, type GridProps } from "../grid"

const breakpoints = ["base", "sm", "md", "lg", "xl", "2xl"] as const

export interface SimpleGridProps extends Omit<GridProps, "columns" | "minChildWidth"> {
  columns?: ConditionalValue<number> | undefined
  minChildWidth?: ConditionalValue<string | number> | undefined
}

const toRecord = (value: unknown): Record<string, unknown> => {
  if (Array.isArray(value)) return Object.fromEntries(value.map((item, index) => [breakpoints[index], item]))
  if (typeof value === "object" && value !== null) return value as Record<string, unknown>
  return { base: value }
}

const widthColumns = (width: string | number) => {
  const size = typeof width === "number" ? `${width}px` : token(`sizes.${width}` as Token, width)
  return `repeat(auto-fit, minmax(${size}, 1fr))`
}

const countColumns = (count: number) => `repeat(${count}, minmax(0, 1fr))`

function columnVars(value: unknown, toColumns: (value: never) => string) {
  const record = toRecord(value)
  let columns = "none"
  const vars: Record<string, string> = {}
  for (const breakpoint of breakpoints) {
    const breakpointValue = record[breakpoint]
    if (breakpointValue !== undefined && breakpointValue !== null) columns = toColumns(breakpointValue as never)
    vars[`--simple-grid-columns-${breakpoint}`] = columns
  }
  return vars as JSX.CSSProperties
}

export function SimpleGrid(props: SimpleGridProps) {
  const [local, rest] = splitProps(props, ["columns", "minChildWidth", "style"])
  const vars = createMemo(() =>
    local.minChildWidth !== undefined
      ? columnVars(local.minChildWidth, widthColumns)
      : local.columns !== undefined
        ? columnVars(local.columns, countColumns)
        : undefined,
  )

  return (
    <Grid
      templateColumns={
        vars()
          ? {
              base: "var(--simple-grid-columns-base)",
              sm: "var(--simple-grid-columns-sm)",
              md: "var(--simple-grid-columns-md)",
              lg: "var(--simple-grid-columns-lg)",
              xl: "var(--simple-grid-columns-xl)",
              "2xl": "var(--simple-grid-columns-2xl)",
            }
          : undefined
      }
      {...rest}
      style={vars() ? { ...vars(), ...(local.style as JSX.CSSProperties | undefined) } : local.style}
    />
  )
}
