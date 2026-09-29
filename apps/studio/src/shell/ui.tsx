import { type ComponentProps, type ReactNode, createContext, use } from "react"
import { css, cx } from "styled-system/css"
import { styled } from "styled-system/jsx"

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

const control = css({
  h: "7",
  w: "full",
  minW: "0",
  px: "2",
  textStyle: "xs",
  bg: "bg",
  borderWidth: "1px",
  borderColor: "border",
  borderRadius: "md",
  outline: "0",
  _focusVisible: { borderColor: "blue.500", boxShadow: "0 0 0 1px {colors.blue.500}" },
  _placeholder: { color: "fg.subtle" },
})

export function TextInput(props: ComponentProps<"input">) {
  return <input type="text" spellCheck={false} autoComplete="off" {...props} className={cx(control, props.className)} />
}

export function NativeSelect(props: ComponentProps<"select">) {
  return <select {...props} className={cx(control, css({ pe: "6" }), props.className)} />
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
  cursor: "pointer",
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
  color: "fg.muted",
  borderRadius: "sm",
  cursor: "pointer",
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
