import { ariaAttr, dataAttr, isComposingEvent, isLeftClick } from "@zag-js/dom-query"
import { parts } from "./search-input.anatomy"
import * as dom from "./search-input.dom"
import type { Connect, IntlTranslations, SearchInputProps, SearchInputState } from "./search-input.types"

const defaultTranslations: IntlTranslations = {
  clearTrigger: "Clear search",
}

export function getInitialState(props: Pick<SearchInputProps, "defaultValue">): SearchInputState {
  return {
    value: props.defaultValue ?? "",
  }
}

export const connect: Connect = (props, state, setState, normalize) => {
  const dir = props.dir ?? "ltr"
  const value = props.value ?? state.value
  const empty = value === ""
  const disabled = !!props.disabled
  const readOnly = !!props.readOnly
  const invalid = !!props.invalid
  const interactive = !disabled && !readOnly
  const translations = { ...defaultTranslations, ...props.translations }

  function setValue(next: string) {
    if (next === value) return
    if (props.value === undefined) setState({ value: next })
    props.onValueChange?.({ value: next })
  }

  function focus() {
    dom.getInputEl(props)?.focus({ preventScroll: true })
  }

  function clearValue() {
    setValue("")
    focus()
  }

  const commonAttrs = {
    dir,
    "data-disabled": dataAttr(disabled),
    "data-readonly": dataAttr(readOnly),
    "data-invalid": dataAttr(invalid),
    "data-empty": dataAttr(empty),
  }

  return {
    value,
    empty,
    setValue,
    clearValue,
    focus,

    getRootProps() {
      return normalize.element({
        ...parts.root.attrs(props.id),
        ...commonAttrs,
        id: dom.getRootId(props),
      })
    },

    getLabelProps() {
      return normalize.label({
        ...parts.label.attrs(props.id),
        ...commonAttrs,
        id: dom.getLabelId(props),
        htmlFor: dom.getInputId(props),
        "data-required": dataAttr(props.required),
      })
    },

    getControlProps() {
      return normalize.element({
        ...parts.control.attrs(props.id),
        ...commonAttrs,
      })
    },

    getIconProps() {
      return normalize.element({
        ...parts.icon.attrs(props.id),
        ...commonAttrs,
        "aria-hidden": true,
        onPointerDown(event) {
          if (!isLeftClick(event)) return
          event.preventDefault()
        },
        onClick(event) {
          if (event.defaultPrevented || disabled) return
          focus()
        },
      })
    },

    getInputProps() {
      return normalize.input({
        ...parts.input.attrs(props.id),
        ...commonAttrs,
        id: dom.getInputId(props),
        type: "search",
        name: props.name,
        form: props.form,
        value,
        disabled,
        readOnly,
        required: props.required,
        autoComplete: "off",
        enterKeyHint: "search",
        "aria-invalid": ariaAttr(invalid),
        onChange(event) {
          setValue(event.currentTarget.value)
        },
        onKeyDown(event) {
          if (event.defaultPrevented || isComposingEvent(event)) return
          if (event.key !== "Escape" || empty || !interactive) return
          event.preventDefault()
          setValue("")
        },
      })
    },

    getClearTriggerProps() {
      return normalize.button({
        ...parts.clearTrigger.attrs(props.id),
        ...commonAttrs,
        id: dom.getClearTriggerId(props),
        type: "button",
        tabIndex: -1,
        disabled,
        hidden: empty || readOnly,
        "aria-label": translations.clearTrigger,
        "aria-controls": dom.getInputId(props),
        onPointerDown(event) {
          if (!isLeftClick(event)) return
          event.preventDefault()
        },
        onClick(event) {
          if (event.defaultPrevented || !interactive) return
          clearValue()
        },
      })
    },
  }
}
