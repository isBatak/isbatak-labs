import { dataAttr, getByTypeahead, type TypeaheadState } from "@zag-js/dom-query"
import type { NormalizeProps, PropTypes } from "@zag-js/types"
import { parts } from "./wheel-picker.anatomy"
import type { ItemProps, WheelPickerApi, WheelPickerController, WheelPickerProps } from "./wheel-picker.types"
import {
  getCenterRow,
  getItemAt,
  getRowOf,
  getRows,
  MIDDLE,
  resolveProps,
  scrollToRow,
  stepRow,
  trackScrollEnd,
} from "./wheel-picker.utils"

const getRootId = (props: WheelPickerProps) => props.ids?.root ?? `wheel-picker:${props.id}`
const getLabelId = (props: WheelPickerProps) => props.ids?.label ?? `wheel-picker:${props.id}:label`
const getViewportId = (props: WheelPickerProps) => props.ids?.viewport ?? `wheel-picker:${props.id}:viewport`
const getViewportEl = (props: WheelPickerProps) => document.getElementById(getViewportId(props))

export function createWheelPicker(): WheelPickerController {
  let pendingRow: number | undefined
  let mounted = false
  const typeahead: TypeaheadState = { ...getByTypeahead.defaultOptions }

  function settle(props: WheelPickerProps, el: HTMLElement) {
    const { items, loop } = resolveProps(props)
    if (items.length === 0) return

    const n = items.length
    const row = getCenterRow(props, el)
    const item = getItemAt(items, row)!

    pendingRow = undefined

    if (item.disabled) {
      let next = stepRow(props, row, 1)
      if (next === row) next = stepRow(props, row, -1)
      scrollToRow(props, el, next, "smooth")
      return
    }

    if (loop && Math.abs(Math.floor(row / n) - MIDDLE) > 1) {
      scrollToRow(props, el, getRowOf(props, item.value), "instant")
    }

    if (item.value !== props.value) props.onValueChange?.({ value: item.value, item })
  }

  function connect<P extends PropTypes>(props: WheelPickerProps, normalize: NormalizeProps<P>): WheelPickerApi<P> {
    const { items, value, itemHeight, visibleCount, disabled } = resolveProps(props)
    const index = items.findIndex((item) => item.value === value)
    const selectedItem = items[index]
    const padding = ((visibleCount - 1) / 2) * itemHeight

    return {
      value,
      selectedItem,
      rows: getRows(props),

      getRootProps() {
        return normalize.element({
          ...parts.root.attrs(props.id),
          id: getRootId(props),
          "data-disabled": dataAttr(disabled),
          style: {
            position: "relative",
            userSelect: "none",
            WebkitUserSelect: "none",
            "--wheel-picker-item-height": `${itemHeight}px`,
            "--wheel-picker-visible-count": visibleCount,
          },
        })
      },

      getLabelProps() {
        return normalize.element({
          ...parts.label.attrs(props.id),
          id: getLabelId(props),
          "data-disabled": dataAttr(disabled),
          onClick() {
            if (!disabled) getViewportEl(props)?.focus({ preventScroll: true })
          },
        })
      },

      getControlProps() {
        return normalize.element({
          ...parts.control.attrs(props.id),
          "data-disabled": dataAttr(disabled),
          style: { position: "relative", isolation: "isolate" },
        })
      },

      getViewportProps() {
        return normalize.element({
          ...parts.viewport.attrs(props.id),
          id: getViewportId(props),
          role: "spinbutton",
          tabIndex: disabled ? undefined : 0,
          "aria-label": props["aria-label"],
          "aria-labelledby": props["aria-label"] ? undefined : (props["aria-labelledby"] ?? getLabelId(props)),
          "aria-valuemin": 0,
          "aria-valuemax": Math.max(0, items.length - 1),
          "aria-valuenow": Math.max(0, index),
          "aria-valuetext": selectedItem?.label,
          "aria-disabled": disabled || undefined,
          "data-disabled": dataAttr(disabled),
          style: {
            position: "relative",
            zIndex: 1,
            height: `${itemHeight * visibleCount}px`,
            overflowY: disabled ? "hidden" : "auto",
            scrollSnapType: "y mandatory",
            scrollbarWidth: "none",
            overscrollBehavior: "contain",
            paddingBlock: `${padding}px`,
            outline: "none",
          },
          onKeyDown(event) {
            if (disabled || items.length === 0) return

            const el = event.currentTarget as HTMLElement
            const from = pendingRow ?? getCenterRow(props, el)
            const n = items.length
            const copyStart = from - (from % n)

            const keyMap: Record<string, () => number> = {
              ArrowDown: () => stepRow(props, from, 1),
              ArrowUp: () => stepRow(props, from, -1),
              PageDown: () => stepRow(props, from, visibleCount - 1),
              PageUp: () => stepRow(props, from, -(visibleCount - 1)),
              Home: () => stepRow(props, copyStart - 1, 1),
              End: () => stepRow(props, copyStart + n, -1),
            }

            let row = keyMap[event.key]?.()

            if (row === undefined && getByTypeahead.isValidEvent(event)) {
              const match = getByTypeahead(
                items.filter((item) => !item.disabled).map((item) => ({ id: item.value, textContent: item.label })),
                { state: typeahead, activeId: value, key: event.key },
              )
              if (match) row = getRowOf(props, match.id, from)
            }

            if (row === undefined) return
            event.preventDefault()
            if (row === getCenterRow(props, el)) return

            pendingRow = row
            scrollToRow(props, el, row, "smooth")
            const item = getItemAt(items, row)!
            if (item.value !== value) props.onValueChange?.({ value: item.value, item })
          },
        })
      },

      getItemGroupProps() {
        return normalize.element({
          ...parts.itemGroup.attrs(props.id),
          "aria-hidden": true,
        })
      },

      getItemProps({ row }: ItemProps) {
        const item = getItemAt(items, row)!
        return normalize.element({
          ...parts.item.attrs(props.id),
          "data-value": item.value,
          "data-selected": dataAttr(item.value === value),
          "data-disabled": dataAttr(item.disabled),
          style: { height: `${itemHeight}px`, scrollSnapAlign: "center" },
        })
      },

      getHighlightProps() {
        return normalize.element({
          ...parts.highlight.attrs(props.id),
          "aria-hidden": true,
          style: {
            position: "absolute",
            insetInline: 0,
            top: `${padding}px`,
            height: `${itemHeight}px`,
            pointerEvents: "none",
          },
        })
      },

      getHiddenInputProps() {
        return normalize.input({
          type: "hidden",
          name: props.name,
          form: props.form,
          value,
          disabled,
        })
      },
    }
  }

  function restore(props: WheelPickerProps, el: HTMLElement, behavior: ScrollBehavior, fromRow?: number) {
    const current = getCenterRow(props, el)
    const row = getRowOf(props, props.value, fromRow)
    if (row !== -1 && row !== current) scrollToRow(props, el, row, behavior)
  }

  function mount(getProps: () => WheelPickerProps) {
    const el = getViewportEl(getProps())
    if (!el) return () => {}

    const stopTracking = trackScrollEnd(el, () => settle(getProps(), el))
    const observer = new ResizeObserver(() => {
      if (el.clientHeight > 0 && pendingRow === undefined) restore(getProps(), el, "instant")
    })
    observer.observe(el)

    return () => {
      stopTracking()
      observer.disconnect()
    }
  }

  function sync(props: WheelPickerProps) {
    const el = getViewportEl(props)
    if (!el || pendingRow !== undefined) return

    restore(props, el, mounted ? "smooth" : "instant", mounted ? getCenterRow(props, el) : undefined)
    mounted = true
  }

  return { connect, mount, sync }
}
