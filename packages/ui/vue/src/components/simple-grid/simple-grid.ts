import { token } from "@isbatak/panda-ds/tokens"
import type { ConditionalValue, Token } from "@isbatak/panda-ds/types"
import { type CSSProperties, type FunctionalComponent, type PropType, computed, defineComponent, h } from "vue"

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
  return vars as CSSProperties
}

export const SimpleGrid = defineComponent({
  name: "SimpleGrid",
  inheritAttrs: false,
  props: {
    columns: [Number, Object, Array] as PropType<SimpleGridProps["columns"]>,
    minChildWidth: [String, Number, Object, Array] as PropType<SimpleGridProps["minChildWidth"]>,
  },
  setup(props, { attrs, slots }) {
    const vars = computed(() =>
      props.minChildWidth !== undefined
        ? columnVars(props.minChildWidth, widthColumns)
        : props.columns !== undefined
          ? columnVars(props.columns, countColumns)
          : undefined,
    )
    return () =>
      h(
        Grid,
        {
          templateColumns: vars.value
            ? {
                base: "var(--simple-grid-columns-base)",
                sm: "var(--simple-grid-columns-sm)",
                md: "var(--simple-grid-columns-md)",
                lg: "var(--simple-grid-columns-lg)",
                xl: "var(--simple-grid-columns-xl)",
                "2xl": "var(--simple-grid-columns-2xl)",
              }
            : undefined,
          ...attrs,
          style: [vars.value, attrs.style],
        },
        slots,
      )
  },
}) as unknown as FunctionalComponent<SimpleGridProps>
