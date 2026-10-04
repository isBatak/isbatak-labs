import { dataAttr } from "@zag-js/dom-query"
import type { NormalizeProps, PropTypes } from "@zag-js/types"
import { parts } from "./masonry.anatomy"
import * as dom from "./masonry.dom"
import type { MasonryApi, MasonryService } from "./masonry.types"
import { clamp, toLength } from "./masonry.utils"

const AUTO_FILL_COLUMNS = "repeat(auto-fill, minmax(min(var(--masonry-min-column-width), 100%), 1fr))"
const FIXED_COLUMNS = "repeat(var(--masonry-columns, 4), minmax(0, 1fr))"

export function connect<T extends PropTypes>(service: MasonryService, normalize: NormalizeProps<T>): MasonryApi<T> {
  const { context, prop, scope, send } = service
  const layout = context.get("layout")
  const measured = layout !== null
  const minColumnWidth = prop("minColumnWidth")

  return {
    columns: layout?.columns ?? 0,
    measured,

    reflow() {
      send({ type: "REFLOW" })
    },

    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        id: dom.getRootId(scope),
        dir: prop("dir"),
        "data-measured": dataAttr(measured),
        style: {
          "--masonry-columns": prop("columns"),
          "--masonry-min-column-width": minColumnWidth,
          display: "grid",
          gridTemplateColumns: minColumnWidth ? AUTO_FILL_COLUMNS : FIXED_COLUMNS,
          gridTemplateRows: layout ? `${layout.height}px` : undefined,
          alignItems: "start",
          gap: toLength(prop("gap")),
          position: measured ? "relative" : undefined,
        },
      })
    },

    getItemProps(props) {
      const span = props.span ?? 1
      const itemLayout = layout?.items[props.value]

      return normalize.element({
        ...parts.item.attrs,
        id: dom.getItemId(scope, props.value),
        dir: prop("dir"),
        "data-value": props.value,
        "data-span": span,
        "data-column": itemLayout?.column,
        "data-ownedby": dom.getRootId(scope),
        style: itemLayout
          ? {
              position: "absolute",
              top: `${itemLayout.top}px`,
              insetInlineStart: 0,
              insetInlineEnd: 0,
              gridColumn: `${itemLayout.column + 1} / span ${itemLayout.span}`,
              gridRow: "1",
            }
          : {
              alignSelf: "start",
              gridColumn: layout ? `span ${clamp(span, 1, layout.columns)}` : undefined,
              gridRow: layout ? "1" : undefined,
              visibility: layout ? "hidden" : undefined,
            },
      })
    },
  }
}
