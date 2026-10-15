import { dataAttr } from "@zag-js/dom-query"
import type { NormalizeProps, PropTypes } from "@zag-js/types"
import { parts } from "./masonry.anatomy"
import * as dom from "./masonry.dom"
import type { Layout, MasonryApi, MasonryController, MasonryProps } from "./masonry.types"
import { clamp, computeLayout, isLayoutEqual, toLength } from "./masonry.utils"

const AUTO_FILL_COLUMNS = "repeat(auto-fill, minmax(min(var(--masonry-min-column-width), 100%), 1fr))"
const FIXED_COLUMNS = "repeat(var(--masonry-columns, 4), minmax(0, 1fr))"

export function createMasonry(): MasonryController {
  let getProps: (() => MasonryProps) | undefined
  let onLayout: ((layout: Layout) => void) | undefined
  let current: Layout | null = null
  let frame = 0

  function layoutNow() {
    const props = getProps?.()
    const rootEl = props && dom.getRootEl(props)
    if (!props || !rootEl) return

    const next = computeLayout(
      dom.measureItems(props),
      dom.getColumnCount(rootEl),
      dom.getRowGap(rootEl),
      props.sequential ?? false,
    )
    if (isLayoutEqual(next, current)) return

    current = next
    onLayout?.(next)
    props.onLayoutChange?.({ columns: next.columns, height: next.height })
  }

  function reflow() {
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(layoutNow)
  }

  function mount(nextGetProps: () => MasonryProps, nextOnLayout: (layout: Layout) => void) {
    getProps = nextGetProps
    onLayout = nextOnLayout
    const props = nextGetProps()
    const rootEl = dom.getRootEl(props)
    if (!rootEl || !window.ResizeObserver || !window.MutationObserver) {
      reflow()
      return () => cancelAnimationFrame(frame)
    }

    let rootWidth = -1
    const resizeObserver = new ResizeObserver((entries) => {
      const resized = entries.some((entry) => {
        if (entry.target !== rootEl) return true
        const width = entry.contentRect.width
        if (width === rootWidth) return false
        rootWidth = width
        return true
      })
      if (resized) layoutNow()
    })

    const mutationObserver = new MutationObserver((mutations) => {
      const latest = nextGetProps()
      for (const node of mutations.flatMap((mutation) => Array.from(mutation.removedNodes))) {
        if (dom.isItemEl(latest, node)) resizeObserver.unobserve(node)
      }
      for (const node of mutations.flatMap((mutation) => Array.from(mutation.addedNodes))) {
        if (dom.isItemEl(latest, node) && node.parentNode === rootEl) resizeObserver.observe(node)
      }
      layoutNow()
    })

    resizeObserver.observe(rootEl)
    for (const el of dom.getItemEls(props)) resizeObserver.observe(el)
    mutationObserver.observe(rootEl, { childList: true })
    reflow()

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      mutationObserver.disconnect()
      current = null
      getProps = undefined
      onLayout = undefined
    }
  }

  function connect<P extends PropTypes>(
    props: MasonryProps,
    layout: Layout | null,
    normalize: NormalizeProps<P>,
  ): MasonryApi<P> {
    const measured = layout !== null
    const minColumnWidth = props.minColumnWidth

    return {
      columns: layout?.columns ?? 0,
      measured,
      reflow,

      getRootProps() {
        return normalize.element({
          ...parts.root.attrs(props.id),
          id: dom.getRootId(props),
          dir: props.dir,
          "data-measured": dataAttr(measured),
          style: {
            "--masonry-columns": props.columns,
            "--masonry-min-column-width": minColumnWidth,
            display: "grid",
            gridTemplateColumns: minColumnWidth ? AUTO_FILL_COLUMNS : FIXED_COLUMNS,
            gridTemplateRows: layout ? `${layout.height}px` : undefined,
            alignItems: "start",
            gap: toLength(props.gap),
            position: measured ? "relative" : undefined,
          },
        })
      },

      getItemProps(itemProps) {
        const span = itemProps.span ?? 1
        const itemLayout = layout?.items[itemProps.value]

        return normalize.element({
          ...parts.item.attrs(props.id),
          id: dom.getItemId(props, itemProps.value),
          dir: props.dir,
          "data-value": itemProps.value,
          "data-span": span,
          "data-column": itemLayout?.column,
          "data-ownedby": dom.getRootId(props),
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

  return { connect, mount, reflow }
}
