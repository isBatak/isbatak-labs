import type { ComponentType } from "react"

import { TableDemo } from "./basic"
import { TableBordersDemo } from "./borders"
import { TableInteractiveDemo } from "./interactive"
import { TableSizesDemo } from "./sizes"
import { TableStickyDemo } from "./sticky"

export const tableDemos: Record<string, ComponentType> = {
  table: TableDemo,
  "table/borders": TableBordersDemo,
  "table/interactive": TableInteractiveDemo,
  "table/sizes": TableSizesDemo,
  "table/sticky": TableStickyDemo,
}
