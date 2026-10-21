import type { ComponentType } from "react"

import { GridTableDemo } from "./basic"
import { GridTableInteractiveDemo } from "./interactive"
import { GridTableStickyDemo } from "./sticky"

export const gridTableDemos: Record<string, ComponentType> = {
  "grid-table": GridTableDemo,
  "grid-table/interactive": GridTableInteractiveDemo,
  "grid-table/sticky": GridTableStickyDemo,
}
