import { ariaAttr, dataAttr, getDocument, getEventKey, isLeftClick, trackPointerMove } from "@zag-js/dom-query"
import type { NormalizeProps, PropTypes } from "@zag-js/types"
import { clampValue } from "@zag-js/utils"
import { parts } from "./code-preview.anatomy"
import * as dom from "./code-preview.dom"
import type {
  CodePreviewApi,
  CodePreviewController,
  CodePreviewProps,
  CodePreviewState,
  IntlTranslations,
  SetState,
} from "./code-preview.types"

const defaultTranslations: IntlTranslations = {
  resizer: "Resize preview",
  themeTrigger: "Toggle preview theme",
  dirTrigger: "Toggle right-to-left",
  copyTrigger: "Copy code",
}

export function getInitialState(props: Pick<CodePreviewProps, "defaultOpen">): CodePreviewState {
  return {
    open: props.defaultOpen ?? false,
    theme: null,
    previewDir: null,
    copied: false,
    width: null,
    percent: 100,
    dragging: false,
  }
}

export function createCodePreview(): CodePreviewController {
  let copiedTimer: ReturnType<typeof setTimeout> | undefined
  let stopDrag: (() => void) | undefined

  function destroy() {
    clearTimeout(copiedTimer)
    stopDrag?.()
  }

  function connect<T extends PropTypes>(
    props: CodePreviewProps,
    state: CodePreviewState,
    setState: SetState,
    normalize: NormalizeProps<T>,
  ): CodePreviewApi<T> {
    const dir = props.dir ?? "ltr"
    const previewDir = state.previewDir ?? dir
    const minWidth = props.minWidth ?? 240
    const step = props.step ?? 16
    const translations = { ...defaultTranslations, ...props.translations }
    const open = state.open
    const previewLocale =
      previewDir === dir
        ? (props.locale ?? "en-US")
        : previewDir === "rtl"
          ? (props.rtlLocale ?? "ar")
          : (props.ltrLocale ?? "en-US")

    function setOpen(next: boolean) {
      if (next === open) return
      setState({ open: next })
      props.onOpenChange?.({ open: next })
    }

    function toggleTheme() {
      const current = state.theme ?? dom.getInheritedTheme(props)
      setState({ theme: current === "dark" ? "light" : "dark" })
    }

    function toggleDir() {
      setState({ previewDir: previewDir === "rtl" ? "ltr" : "rtl" })
    }

    async function copy() {
      const source = props.code ?? dom.getContentEl(props)?.textContent ?? ""
      try {
        await navigator.clipboard.writeText(source)
      } catch {
        return
      }
      clearTimeout(copiedTimer)
      setState({ copied: true })
      copiedTimer = setTimeout(() => setState({ copied: false }), props.copiedTimeout ?? 2000)
    }

    function resetWidth() {
      setState({ width: null, percent: 100 })
    }

    function setWidth(width: number) {
      const stageEl = dom.getStageEl(props)
      const resizerEl = dom.getResizerEl(props)
      if (!stageEl || !resizerEl) return
      const max = stageEl.clientWidth - resizerEl.offsetWidth
      const clamped = Math.round(clampValue(width, Math.min(minWidth, max), max))
      if (clamped >= max) resetWidth()
      else setState({ width: clamped, percent: Math.round((clamped / max) * 100) })
    }

    return {
      open,
      setOpen,
      theme: state.theme,
      toggleTheme,
      previewDir,
      previewLocale,
      toggleDir,
      copied: state.copied,
      copy,
      width: state.width,
      setWidth,
      resetWidth,

      getRootProps() {
        return normalize.element({
          ...parts.root.attrs(props.id),
          id: dom.getRootId(props),
          dir,
          "data-state": open ? "open" : "closed",
        })
      },

      getStageProps() {
        return normalize.element({
          ...parts.stage.attrs(props.id),
          id: dom.getStageId(props),
          dir,
          "data-dragging": dataAttr(state.dragging),
          style: {
            "--preview-width": state.width === null ? undefined : `${state.width}px`,
          },
        })
      },

      getPreviewProps() {
        return normalize.element({
          ...parts.preview.attrs(props.id),
          id: dom.getPreviewId(props),
          dir: previewDir,
          className: state.theme ?? undefined,
          "data-theme": state.theme ?? undefined,
        })
      },

      getResizerProps() {
        return normalize.element({
          ...parts.resizer.attrs(props.id),
          id: dom.getResizerId(props),
          dir,
          role: "separator",
          tabIndex: 0,
          "aria-label": translations.resizer,
          "aria-controls": dom.getPreviewId(props),
          "aria-orientation": "vertical",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": state.percent,
          "data-dragging": dataAttr(state.dragging),
          style: {
            touchAction: "none",
            userSelect: "none",
          },
          onPointerDown(event) {
            const previewEl = dom.getPreviewEl(props)
            if (!previewEl || !isLeftClick(event)) return
            event.preventDefault()
            const startX = event.clientX
            const startWidth = previewEl.offsetWidth
            const direction = dir === "rtl" ? -1 : 1
            stopDrag?.()
            setState({ dragging: true })
            stopDrag = trackPointerMove(getDocument(event.currentTarget), {
              onPointerMove({ point }) {
                setWidth(startWidth + (point.x - startX) * direction)
              },
              onPointerUp() {
                setState({ dragging: false })
                stopDrag?.()
                stopDrag = undefined
              },
            })
          },
          onKeyDown(event) {
            const width = dom.getPreviewEl(props)?.offsetWidth ?? 0
            const key = getEventKey(event, { dir })
            if (key === "ArrowLeft") setWidth(width - step)
            else if (key === "ArrowRight") setWidth(width + step)
            else if (key === "Home") setWidth(minWidth)
            else if (key === "End") resetWidth()
            else return
            event.preventDefault()
          },
          onDoubleClick() {
            resetWidth()
          },
        })
      },

      getContentProps() {
        return normalize.element({
          ...parts.content.attrs(props.id),
          id: dom.getContentId(props),
          dir,
          hidden: !open,
          "data-state": open ? "open" : "closed",
        })
      },

      getToolbarProps() {
        return normalize.element({
          ...parts.toolbar.attrs(props.id),
          dir,
        })
      },

      getTriggerProps() {
        return normalize.button({
          ...parts.trigger.attrs(props.id),
          id: dom.getTriggerId(props),
          dir,
          type: "button",
          "aria-controls": dom.getContentId(props),
          "aria-expanded": open,
          "data-state": open ? "open" : "closed",
          onClick() {
            setOpen(!open)
          },
        })
      },

      getThemeTriggerProps() {
        return normalize.button({
          ...parts.themeTrigger.attrs(props.id),
          dir,
          type: "button",
          "aria-label": translations.themeTrigger,
          "data-theme": state.theme ?? undefined,
          onClick() {
            toggleTheme()
          },
        })
      },

      getDirTriggerProps() {
        return normalize.button({
          ...parts.dirTrigger.attrs(props.id),
          dir,
          type: "button",
          "aria-label": translations.dirTrigger,
          "aria-pressed": ariaAttr(previewDir === "rtl") ?? false,
          "data-dir": previewDir,
          onClick() {
            toggleDir()
          },
        })
      },

      getCopyTriggerProps() {
        return normalize.button({
          ...parts.copyTrigger.attrs(props.id),
          dir,
          type: "button",
          "aria-label": translations.copyTrigger,
          "data-copied": dataAttr(state.copied),
          onClick() {
            void copy()
          },
        })
      },
    }
  }

  return { connect, destroy }
}
