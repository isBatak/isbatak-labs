<script module lang="ts">
  import type { ConditionalValue } from "@isbatak/panda-ds/types"

  import type { GridProps } from "../grid"

  export type SimpleGridProps = Omit<GridProps, "columns" | "minChildWidth"> & {
    columns?: ConditionalValue<number> | undefined
    minChildWidth?: ConditionalValue<string | number> | undefined
  }

  const breakpoints = ["base", "sm", "md", "lg", "xl", "2xl"] as const

  const toRecord = (value: unknown): Record<string, unknown> => {
    if (Array.isArray(value)) return Object.fromEntries(value.map((item, index) => [breakpoints[index], item]))
    if (typeof value === "object" && value !== null) return value as Record<string, unknown>
    return { base: value }
  }
</script>

<script lang="ts">
  import { token } from "@isbatak/panda-ds/tokens"
  import type { Token } from "@isbatak/panda-ds/types"

  import type { Component } from "svelte"

  import { Grid } from "../grid"

  const DivGrid = Grid as Component<GridProps<"div">, {}, "ref">

  let { ref = $bindable(), columns, minChildWidth, style, ...props }: SimpleGridProps = $props()

  const widthColumns = (width: string | number) => {
    const size = typeof width === "number" ? `${width}px` : token(`sizes.${width}` as Token, width)
    return `repeat(auto-fit, minmax(${size}, 1fr))`
  }

  const countColumns = (count: number) => `repeat(${count}, minmax(0, 1fr))`

  function columnVars(value: unknown, toColumns: (value: never) => string) {
    const record = toRecord(value)
    let template = "none"
    const vars: string[] = []
    for (const breakpoint of breakpoints) {
      const breakpointValue = record[breakpoint]
      if (breakpointValue !== undefined && breakpointValue !== null) template = toColumns(breakpointValue as never)
      vars.push(`--simple-grid-columns-${breakpoint}: ${template}`)
    }
    return vars.join("; ")
  }

  const vars = $derived(
    minChildWidth !== undefined
      ? columnVars(minChildWidth, widthColumns)
      : columns !== undefined
        ? columnVars(columns, countColumns)
        : undefined,
  )
</script>

<DivGrid
  bind:ref
  templateColumns={vars
    ? {
        base: "var(--simple-grid-columns-base)",
        sm: "var(--simple-grid-columns-sm)",
        md: "var(--simple-grid-columns-md)",
        lg: "var(--simple-grid-columns-lg)",
        xl: "var(--simple-grid-columns-xl)",
        "2xl": "var(--simple-grid-columns-2xl)",
      }
    : undefined}
  style={[vars, style].filter(Boolean).join("; ") || undefined}
  {...props}
/>
