import {
  type ComponentProps,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { Portal } from "@ark-ui/react/portal"
import { createListCollection, Select } from "@isbatak/react-ui/select"
import { css, cx } from "styled-system/css"
import { styled } from "styled-system/jsx"
import { input } from "styled-system/recipes"

/** Compact controls for the studio chrome */

export const PanelTitle = styled("h3", {
  base: { textStyle: "xs", fontWeight: "semibold", color: "fg", px: "4", pt: "4", pb: "2" },
})

export const Muted = styled("p", {
  base: { textStyle: "xs", color: "fg.muted" },
})

export function PanelSection(props: { title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <styled.section borderBottomWidth="1px" borderColor="border.muted" pb="3">
      <styled.div display="flex" alignItems="center" justifyContent="space-between" pe="3">
        <PanelTitle>{props.title}</PanelTitle>
        {props.action}
      </styled.div>
      <styled.div display="flex" flexDirection="column" gap="2" px="4">
        {props.children}
      </styled.div>
    </styled.section>
  )
}

/** Studio fields use the design system's own subtle input: filled, borderless, 28px tall */
const control = cx(input({ variant: "subtle", size: "2xs" }), css({ _placeholder: { color: "fg.subtle" } }))

export function TextInput(props: ComponentProps<"input">) {
  return <input type="text" spellCheck={false} autoComplete="off" {...props} className={cx(control, props.className)} />
}

export interface SelectOption {
  value: string
  label: string
  group?: string
}

export function SelectInput(props: {
  "aria-label": string
  options: SelectOption[]
  value: string | undefined
  onValueChange: (value: string) => void
  placeholder?: string
  variant?: "subtle" | "ghost"
  className?: string
}) {
  const collection = useMemo(
    () => createListCollection({ items: props.options, groupBy: (item) => item.group ?? "" }),
    [props.options],
  )
  return (
    <Select.Root
      collection={collection}
      value={props.value === undefined ? [] : [props.value]}
      onValueChange={(details) => {
        const [value] = details.value
        if (value !== undefined) props.onValueChange(value)
      }}
      positioning={{ sameWidth: false }}
      variant={props.variant ?? "subtle"}
      size="xs"
      className={props.className}
    >
      <Select.Control>
        <Select.Trigger aria-label={props["aria-label"]}>
          <Select.ValueText placeholder={props.placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content minW="40">
            {collection.group().map(([group, items]) => (
              <Select.ItemGroup key={group}>
                {group && <Select.ItemGroupLabel>{group}</Select.ItemGroupLabel>}
                {items.map((item) => (
                  <Select.Item key={item.value} item={item}>
                    <Select.ItemText>{item.label}</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

export const dot = css({ w: "1.5", h: "1.5", borderRadius: "full", bg: "blue.500", flexShrink: "0" })

const iconButton = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  w: "7",
  h: "7",
  borderRadius: "md",
  color: "fg.muted",
  cursor: "button",
  _hover: { bg: "bg.muted", color: "fg" },
  _disabled: { opacity: "0.4", cursor: "not-allowed", _hover: { bg: "transparent" } },
  "& svg": { w: "4", h: "4" },
})

export function IconButton(props: ComponentProps<"button"> & { label: string }) {
  const { label, ...rest } = props
  return <button type="button" aria-label={label} title={label} {...rest} className={cx(iconButton, rest.className)} />
}

export function Icon(props: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {props.children}
    </svg>
  )
}

export function UndoIcon() {
  return (
    <Icon>
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
    </Icon>
  )
}

export function RedoIcon() {
  return (
    <Icon>
      <path d="m15 14 5-5-5-5" />
      <path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13" />
    </Icon>
  )
}

export function ResetIcon() {
  return (
    <Icon>
      <path d="M18 6 6 18M6 6l12 12" />
    </Icon>
  )
}

export function ComponentIcon() {
  return (
    <Icon>
      <path d="M12 2 9.5 4.5 12 7l2.5-2.5zM12 17l-2.5 2.5L12 22l2.5-2.5zM4.5 9.5 2 12l2.5 2.5L7 12zM19.5 9.5 17 12l2.5 2.5L22 12z" />
    </Icon>
  )
}

export function SunIcon() {
  return (
    <Icon>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </Icon>
  )
}

export function MoonIcon() {
  return (
    <Icon>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </Icon>
  )
}

export function SearchIcon() {
  return (
    <Icon>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </Icon>
  )
}

export function LayersIcon() {
  return (
    <Icon>
      <path d="m12 2 10 5-10 5L2 7z" />
      <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
    </Icon>
  )
}

/** Small segmented toggle used for Demo/Matrix, Light/Dark and inspector tabs */
export function Toggle<T extends string>(props: {
  value: T
  onChange: (value: T) => void
  children: ReactNode
  "aria-label": string
}) {
  return (
    <styled.div
      role="radiogroup"
      aria-label={props["aria-label"]}
      display="inline-flex"
      gap="0.5"
      p="0.5"
      bg="bg.muted"
      borderRadius="md"
    >
      <ToggleContext value={{ value: props.value, onChange: props.onChange as (value: string) => void }}>
        {props.children}
      </ToggleContext>
    </styled.div>
  )
}

const ToggleContext = createContext<{ value: string; onChange: (value: string) => void }>({
  value: "",
  onChange: () => {},
})

const toggleItem = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "1.5",
  h: "6",
  px: "2.5",
  textStyle: "xs",
  fontWeight: "medium",
  whiteSpace: "nowrap",
  color: "fg.muted",
  borderRadius: "sm",
  cursor: "button",
  _checked: { bg: "bg", color: "fg", shadow: "xs" },
  "& svg": { w: "3.5", h: "3.5" },
})

export function ToggleItem(props: { value: string; children: ReactNode }) {
  const context = use(ToggleContext)
  const checked = context.value === props.value
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      data-checked={checked ? "" : undefined}
      className={toggleItem}
      onClick={() => context.onChange(props.value)}
    >
      {props.children}
    </button>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Resizing
 * -----------------------------------------------------------------------------------------------*/

/** A size in pixels, clamped and remembered in the browser */
export function useStoredSize(key: string, initial: number, min: number, max: number) {
  const [size, setSize] = useState(() => {
    try {
      const stored = Number(localStorage.getItem(`panda-studio:${key}`))
      return stored ? Math.min(max, Math.max(min, stored)) : initial
    } catch {
      return initial
    }
  })
  const update = useCallback(
    (next: number) => {
      const clamped = Math.round(Math.min(max, Math.max(min, next)))
      setSize(clamped)
      try {
        localStorage.setItem(`panda-studio:${key}`, String(clamped))
      } catch {}
    },
    [key, min, max],
  )
  return [size, update] as const
}

const resizeHandle = css({
  position: "absolute",
  zIndex: "1",
  touchAction: "none",
  _after: { content: '""', position: "absolute", bg: "transparent", transition: "background 0.15s" },
  _hover: { _after: { bg: "blue.500" } },
  "&[data-dragging]": { _after: { bg: "blue.500" } },
  "&[data-orientation=vertical]": {
    top: "0",
    bottom: "0",
    right: "-1",
    w: "2",
    cursor: "col-resize",
    _after: { inset: "0", mx: "auto", w: "0.5" },
  },
  "&[data-orientation=horizontal]": {
    left: "0",
    right: "0",
    top: "-1",
    h: "2",
    cursor: "row-resize",
    _after: { inset: "0", my: "auto", h: "0.5" },
  },
})

/**
 * Drag handle on the edge of a panel. `vertical` sits on the right edge and resizes width; `horizontal` sits on the
 * top edge and resizes height (dragging up grows the panel). Arrow keys resize by 16px.
 */
export function ResizeHandle(props: {
  orientation: "vertical" | "horizontal"
  size: number
  onResize: (size: number) => void
  label: string
}) {
  const { orientation, size, onResize } = props
  const [dragging, setDragging] = useState(false)
  const vertical = orientation === "vertical"

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      aria-label={props.label}
      aria-valuenow={size}
      tabIndex={0}
      data-orientation={orientation}
      data-dragging={dragging ? "" : undefined}
      className={resizeHandle}
      onPointerDown={(event) => {
        event.preventDefault()
        const start = vertical ? event.clientX : event.clientY
        const startSize = size
        const target = event.currentTarget
        target.setPointerCapture(event.pointerId)
        setDragging(true)
        const onMove = (move: PointerEvent) => {
          const delta = (vertical ? move.clientX : move.clientY) - start
          onResize(vertical ? startSize + delta : startSize - delta)
        }
        const onUp = () => {
          setDragging(false)
          target.removeEventListener("pointermove", onMove)
          target.removeEventListener("pointerup", onUp)
          target.removeEventListener("pointercancel", onUp)
        }
        target.addEventListener("pointermove", onMove)
        target.addEventListener("pointerup", onUp)
        target.addEventListener("pointercancel", onUp)
      }}
      onKeyDown={(event) => {
        const grow = vertical ? "ArrowRight" : "ArrowUp"
        const shrink = vertical ? "ArrowLeft" : "ArrowDown"
        if (event.key === grow) onResize(size + 16)
        else if (event.key === shrink) onResize(size - 16)
        else return
        event.preventDefault()
      }}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Floating editors
 * -----------------------------------------------------------------------------------------------*/

export const floating = css({
  position: "fixed",
  top: "16",
  w: "19rem",
  zIndex: "popover",
  bg: "bg.panel",
  borderRadius: "xl",
  boxShadow: "lg",
  borderWidth: "1px",
  borderColor: "border.muted",
  overflow: "hidden",
})

export const panelHeader = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2",
  h: "11",
  ps: "4",
  pe: "2",
  borderBottomWidth: "1px",
  borderColor: "border.muted",
  textStyle: "sm",
  fontWeight: "semibold",
})

export function useEscape(onClose: () => void) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])
}

const numberField = css({
  display: "flex",
  alignItems: "center",
  gap: "1.5",
  minW: "0",
  "& > span": {
    flexShrink: "0",
    minW: "4",
    textStyle: "xs",
    color: "fg.muted",
    cursor: "ew-resize",
    userSelect: "none",
    touchAction: "none",
  },
})

const decimalsOf = (value: number) => String(value).split(".")[1]?.length ?? 0

export function NumberField(props: {
  label: string
  value: number
  min?: number
  max?: number
  suffix?: string
  step?: number
  handle?: string
  onChange: (value: number) => void
}) {
  const [draft, setDraft] = useState(String(props.value))
  useEffect(() => setDraft(String(props.value)), [props.value])
  const step = props.step ?? 1
  const decimals = Math.max(decimalsOf(step), decimalsOf(props.value))
  const clamp = (value: number) => Math.min(props.max ?? Infinity, Math.max(props.min ?? -Infinity, value))
  const snap = (value: number) => Number(clamp(value).toFixed(decimals))

  const scrub = (event: ReactPointerEvent<HTMLSpanElement>) => {
    const startX = event.clientX
    const start = props.value
    const target = event.currentTarget
    target.setPointerCapture(event.pointerId)
    const move = (moveEvent: PointerEvent) => {
      const factor = moveEvent.shiftKey ? 10 : 1
      props.onChange(snap(start + Math.round((moveEvent.clientX - startX) / 2) * step * factor))
    }
    const up = () => {
      target.removeEventListener("pointermove", move)
      target.removeEventListener("pointerup", up)
    }
    target.addEventListener("pointermove", move)
    target.addEventListener("pointerup", up)
  }

  return (
    <label className={cx(numberField)}>
      <span onPointerDown={scrub}>{props.handle ?? (props.suffix ? "" : props.label)}</span>
      <TextInput
        aria-label={props.label}
        inputMode="decimal"
        value={draft}
        onChange={(event) => {
          setDraft(event.target.value)
          const parsed = Number.parseFloat(event.target.value)
          if (!Number.isNaN(parsed)) props.onChange(clamp(parsed))
        }}
        onKeyDown={(event) => {
          if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return
          event.preventDefault()
          const direction = event.key === "ArrowUp" ? 1 : -1
          props.onChange(snap(props.value + direction * step * (event.shiftKey ? 10 : 1)))
        }}
      />
      {props.suffix && <span>{props.suffix}</span>}
    </label>
  )
}

export function CloseIcon() {
  return (
    <Icon>
      <path d="M18 6 6 18M6 6l12 12" />
    </Icon>
  )
}
