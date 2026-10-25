import { type Color, ColorPicker, parseColor } from "@ark-ui/react/color-picker"
import { Portal } from "@ark-ui/react/portal"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { colorPicker } from "@isbatak/panda-ds/recipes"
import { type ReactNode, useState } from "react"
import { css, cx } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { getRawToken, listTokens, resolveReferences } from "../lib/theme-meta"
import { Icon, IconButton, ResetIcon, TextInput, Toggle, ToggleItem } from "./ui"

/**
 * DS Manager-style color picker for tokens and color properties, built on Ark UI's color picker and styled by the
 * design system's own `colorPicker` recipe. "Tokens" picks a token reference; "Custom" picks a raw color.
 */

const { withProvider, withContext } = createSlotRecipeContext(colorPicker)

const Root = withProvider(ColorPicker.Root, "root")
const Positioner = withContext(ColorPicker.Positioner, "positioner")
const Content = withContext(ColorPicker.Content, "content")
const Area = withContext(ColorPicker.Area, "area")
const AreaBackground = withContext(ColorPicker.AreaBackground, "areaBackground")
const AreaThumb = withContext(ColorPicker.AreaThumb, "areaThumb")
const ChannelSlider = withContext(ColorPicker.ChannelSlider, "channelSlider")
const ChannelSliderTrack = withContext(ColorPicker.ChannelSliderTrack, "channelSliderTrack")
const ChannelSliderThumb = withContext(ColorPicker.ChannelSliderThumb, "channelSliderThumb")
const TransparencyGrid = withContext(ColorPicker.TransparencyGrid, "transparencyGrid")
const ChannelInput = withContext(ColorPicker.ChannelInput, "channelInput")
const EyeDropperTrigger = withContext(ColorPicker.EyeDropperTrigger, "eyeDropperTrigger")
const FormatSelect = withContext(ColorPicker.FormatSelect, "formatSelect")
const View = withContext(ColorPicker.View, "view")

/* -------------------------------------------------------------------------------------------------
 * Colors
 * -----------------------------------------------------------------------------------------------*/

let probeCanvas: CanvasRenderingContext2D | null | undefined

/** Resolves any CSS color (tokens, `var(...)`, `color-mix`) to a picker color, using the studio's own tokens */
export function toColor(value: string): Color {
  const fallback = parseColor("#000000")
  if (!value) return fallback
  const probe = document.createElement("span")
  probe.style.color = resolveReferences(value)
  document.body.append(probe)
  const computed = getComputedStyle(probe).color
  probe.remove()
  probeCanvas ??= document.createElement("canvas").getContext("2d", { willReadFrequently: true })
  if (!probeCanvas) return fallback
  probeCanvas.clearRect(0, 0, 1, 1)
  probeCanvas.fillStyle = computed
  probeCanvas.fillRect(0, 0, 1, 1)
  const [r, g, b, a] = probeCanvas.getImageData(0, 0, 1, 1).data
  return parseColor(`rgba(${r}, ${g}, ${b}, ${Math.round((a! / 255) * 100) / 100})`)
}

/** CSS a swatch can paint for a stored value: token names and references become variables */
export function paintable(value: string) {
  if (!value || value.startsWith("#") || value.includes("(") || value.startsWith("{")) return resolveReferences(value)
  const [name, opacity] = value.split("/")
  // colorPalette.* only exists inside components; preview it with the default gray palette
  const token = name!.replace(/^colorPalette\./, "gray.")
  return resolveReferences(opacity ? `{colors.${token}/${opacity}}` : `{colors.${token}}`)
}

const toStored = (color: Color) => (color.getChannelValue("alpha") < 1 ? color.toString("rgba") : color.toString("hex"))

const RECENT_KEY = "panda-studio:recent-colors"

function readRecent(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) ?? "[]") as string[]
  } catch {
    return []
  }
}

function pushRecent(value: string) {
  const next = [value, ...readRecent().filter((color) => color !== value)].slice(0, 12)
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(next))
  } catch {}
}

/** Base colors the page-level semantic tokens (bg, fg, border) point at in one color mode ("Light" and "Dark") */
function paletteColors(mode: "base" | "_dark") {
  const names: string[] = []
  for (const entry of listTokens("colors", { semantic: true })) {
    if (!/^(bg|fg|border)(\.|$)/.test(entry.name)) continue
    const value = typeof entry.value === "string" ? entry.value : entry.value[mode]
    const match = value?.match(/^\{colors\.([^}/]+)\}$/)
    if (match && !names.includes(match[1]!)) names.push(match[1]!)
  }
  return names.filter((name) => getRawToken("colors", name))
}

const lightColors = paletteColors("base")
const darkColors = paletteColors("_dark")

/* -------------------------------------------------------------------------------------------------
 * Swatches
 * -----------------------------------------------------------------------------------------------*/

const swatchButton = css({
  w: "5",
  h: "5",
  borderRadius: "sm",
  cursor: "pointer",
  boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.12)",
  transition: "transform 0.1s",
  _hover: { transform: "scale(1.15)" },
  _selected: { outline: "2px solid", outlineColor: "blue.500", outlineOffset: "1px" },
})

function Swatch(props: { color: string; title: string; selected?: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      className={swatchButton}
      style={{ background: props.color }}
      title={props.title}
      aria-label={props.title}
      aria-selected={props.selected}
      onClick={props.onClick}
    />
  )
}

function SwatchRow(props: { title: string; children: ReactNode }) {
  return (
    <styled.div display="flex" flexDirection="column" gap="1.5">
      <styled.span textStyle="xs" color="fg.muted">
        {props.title}
      </styled.span>
      <styled.div display="flex" flexWrap="wrap" gap="1.5">
        {props.children}
      </styled.div>
    </styled.div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Picker
 * -----------------------------------------------------------------------------------------------*/

export interface ColorTokenPickerProps {
  /** Shown in the header, e.g. `bg.subtle` or `Background` */
  label: string
  /** The value in effect (override or inherited): a raw color, `{colors.x}` reference or token name */
  value: string
  /** Write `{colors.name}` references (tokens) instead of bare token names (recipe properties) */
  references?: boolean | undefined
  onChange: (value: string) => void
  defaultOpen?: boolean | undefined
  /** The trigger, rendered as the picker's anchor */
  children: ReactNode
}

export function ColorTokenPicker(props: ColorTokenPickerProps) {
  const [open, setOpen] = useState(props.defaultOpen ?? false)
  const [color, setColor] = useState<Color>(() => toColor(props.value))
  const [tab, setTab] = useState<"tokens" | "custom">("custom")
  const [draft, setDraft] = useState(props.value)
  const [recent, setRecent] = useState(readRecent)

  const tokenValue = (name: string) => (props.references ? `{colors.${name}}` : name)
  const pickToken = (name: string) => {
    const value = tokenValue(name)
    setColor(toColor(`{colors.${name}}`))
    setDraft(value)
    props.onChange(value)
  }
  const pickRaw = (value: string) => {
    setColor(toColor(value))
    setDraft(value)
    props.onChange(value)
  }

  return (
    <Root
      size="xs"
      flex="1"
      minW="0"
      // Inspector panels render dozens of rows; only the open picker needs its content
      lazyMount
      unmountOnExit
      open={open}
      value={color}
      positioning={{ placement: "left-start", gutter: 12 }}
      onOpenChange={(details) => {
        setOpen(details.open)
        if (details.open) {
          setColor(toColor(paintable(props.value)))
          setDraft(props.value)
          setRecent(readRecent())
        }
      }}
      onValueChange={(details) => {
        setColor(details.value)
        const value = toStored(details.value)
        setDraft(value)
        props.onChange(value)
      }}
      onValueChangeEnd={(details) => {
        pushRecent(toStored(details.value))
        setRecent(readRecent())
      }}
    >
      <ColorPicker.Control className={css({ display: "flex", minW: "0" })}>
        <ColorPicker.Trigger asChild>{props.children}</ColorPicker.Trigger>
      </ColorPicker.Control>
      <Portal>
        <Positioner>
          <Content w="20rem" gap="3">
            <styled.div display="flex" alignItems="center" justifyContent="space-between">
              <styled.span textStyle="sm" fontWeight="semibold" fontFamily="mono" truncate>
                {props.label}
              </styled.span>
              <IconButton label="Close" onClick={() => setOpen(false)}>
                <ResetIcon />
              </IconButton>
            </styled.div>

            <styled.div css={{ "& > div": { w: "full", "& > button": { flex: "1", justifyContent: "center" } } }}>
              <Toggle aria-label="Color source" value={tab} onChange={setTab}>
                <ToggleItem value="tokens">Tokens</ToggleItem>
                <ToggleItem value="custom">Custom</ToggleItem>
              </Toggle>
            </styled.div>

            {tab === "custom" ? (
              <>
                <Area>
                  <AreaBackground />
                  <AreaThumb />
                </Area>
                <styled.div display="flex" gap="2" alignItems="center">
                  <EyeDropperTrigger asChild>
                    <IconButton
                      label="Pick a color from the screen"
                      className={css({ borderWidth: "1px", borderColor: "border" })}
                    >
                      <Icon>
                        <path d="m2 22 1-1h3l9-9" />
                        <path d="M3 21v-3l9-9" />
                        <path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" />
                      </Icon>
                    </IconButton>
                  </EyeDropperTrigger>
                  <styled.div display="flex" flexDirection="column" gap="2" flex="1">
                    <ChannelSlider channel="hue">
                      <ChannelSliderTrack />
                      <ChannelSliderThumb />
                    </ChannelSlider>
                    <ChannelSlider channel="alpha">
                      <TransparencyGrid size="8px" />
                      <ChannelSliderTrack />
                      <ChannelSliderThumb />
                    </ChannelSlider>
                  </styled.div>
                </styled.div>
                <styled.div display="flex" gap="1.5" alignItems="center">
                  <FormatSelect h="7" flexShrink="0" />
                  <View format="rgba" flex="1" flexDirection="row">
                    <ChannelInput
                      channel="hex"
                      flex="1"
                      h="7"
                      px="2"
                      borderWidth="1px"
                      textStyle="xs"
                      fontFamily="mono"
                    />
                    <ChannelInput channel="alpha" w="12" h="7" px="2" borderWidth="1px" textStyle="xs" />
                  </View>
                  <View format="hsla" flex="1" flexDirection="row">
                    <ChannelInput channel="hue" h="7" px="1.5" borderWidth="1px" textStyle="xs" />
                    <ChannelInput channel="saturation" h="7" px="1.5" borderWidth="1px" textStyle="xs" />
                    <ChannelInput channel="lightness" h="7" px="1.5" borderWidth="1px" textStyle="xs" />
                  </View>
                  <View format="hsba" flex="1" flexDirection="row">
                    <ChannelInput channel="hue" h="7" px="1.5" borderWidth="1px" textStyle="xs" />
                    <ChannelInput channel="saturation" h="7" px="1.5" borderWidth="1px" textStyle="xs" />
                    <ChannelInput channel="brightness" h="7" px="1.5" borderWidth="1px" textStyle="xs" />
                  </View>
                </styled.div>
                <styled.div h="1px" bg="border.muted" />
                <SwatchRow title="Light">
                  {lightColors.map((name) => (
                    <Swatch
                      key={name}
                      color={paintable(`{colors.${name}}`)}
                      title={name}
                      selected={props.value === tokenValue(name)}
                      onClick={() => pickToken(name)}
                    />
                  ))}
                </SwatchRow>
                <SwatchRow title="Dark">
                  {darkColors.map((name) => (
                    <Swatch
                      key={name}
                      color={paintable(`{colors.${name}}`)}
                      title={name}
                      selected={props.value === tokenValue(name)}
                      onClick={() => pickToken(name)}
                    />
                  ))}
                </SwatchRow>
                {recent.length > 0 && (
                  <SwatchRow title="Recent">
                    {recent.map((value) => (
                      <Swatch key={value} color={value} title={value} onClick={() => pickRaw(value)} />
                    ))}
                  </SwatchRow>
                )}
              </>
            ) : (
              <TokenGrid value={props.value} tokenValue={tokenValue} onPick={pickToken} />
            )}

            <styled.form
              display="flex"
              gap="1.5"
              onSubmit={(event) => {
                event.preventDefault()
                if (draft.trim()) pickRaw(draft.trim())
              }}
            >
              <TextInput
                aria-label={`${props.label} value`}
                value={draft}
                list={props.references ? "refs-colors" : "names-colors"}
                onChange={(event) => setDraft(event.target.value)}
                onBlur={() => draft.trim() && draft !== props.value && pickRaw(draft.trim())}
                className={css({ fontFamily: "mono" })}
              />
            </styled.form>
          </Content>
        </Positioner>
      </Portal>
    </Root>
  )
}

const tokenGrid = css({
  display: "flex",
  flexDirection: "column",
  gap: "3",
  maxH: "80",
  overflowY: "auto",
  mx: "-1",
  px: "1",
})

function TokenGrid(props: { value: string; tokenValue: (name: string) => string; onPick: (name: string) => void }) {
  const scales = new Map<string, string[]>()
  for (const entry of listTokens("colors", { semantic: false })) {
    const group = /^[a-zA-Z]+\.\d+$/.test(entry.name) ? entry.name.split(".")[0]! : "base"
    if (group === "base" && ["transparent", "current"].includes(entry.name)) continue
    scales.set(group, [...(scales.get(group) ?? []), entry.name])
  }
  const semantic = listTokens("colors", { semantic: true })

  return (
    <div className={tokenGrid}>
      {Array.from(scales.entries()).map(([group, names]) => (
        <SwatchRow key={group} title={group}>
          {names.map((name) => (
            <Swatch
              key={name}
              color={paintable(`{colors.${name}}`)}
              title={name}
              selected={props.value === props.tokenValue(name)}
              onClick={() => props.onPick(name)}
            />
          ))}
        </SwatchRow>
      ))}
      <SwatchRow title="semantic">
        {semantic.map((entry) => (
          <Swatch
            key={entry.name}
            color={`var(${entry.cssVar})`}
            title={entry.name}
            selected={props.value === props.tokenValue(entry.name)}
            onClick={() => props.onPick(entry.name)}
          />
        ))}
      </SwatchRow>
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Row trigger
 * -----------------------------------------------------------------------------------------------*/

/** `{colors.gray.50}` reads as `gray.50` in the compact row */
const displayValue = (value: string) => value.replace(/^\{colors\.([^}]+)\}$/, "$1")

const pill = css({
  display: "flex",
  alignItems: "center",
  gap: "1.5",
  flex: "1",
  minW: "0",
  h: "7",
  ps: "1",
  pe: "2",
  // Matches the subtle input the other studio fields use
  bg: "bg.muted",
  borderWidth: "1px",
  borderColor: "transparent",
  borderRadius: "l2",
  cursor: "pointer",
  textStyle: "xs",
  fontFamily: "mono",
  textAlign: "start",
  _hover: { bg: "bg.emphasized" },
  _open: { borderColor: "blue.500", boxShadow: "0 0 0 1px {colors.blue.500}" },
  "&[data-inherited] > span:last-child": { color: "fg.subtle" },
})

const pillSwatch = css({
  w: "5",
  h: "5",
  flexShrink: "0",
  borderRadius: "sm",
  boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.12)",
})

/** The swatch + value button that opens the picker, as in DS Manager's token rows */
export function ColorPill(props: { value: string; inherited: boolean; label: string } & Record<string, unknown>) {
  const { value, inherited, label, ...rest } = props
  return (
    <button
      type="button"
      {...rest}
      className={cx(pill, rest.className as string | undefined)}
      aria-label={`Edit ${label}`}
      data-inherited={inherited ? "" : undefined}
    >
      <span className={pillSwatch} style={{ background: paintable(value) }} />
      <styled.span truncate>{displayValue(value) || "not set"}</styled.span>
    </button>
  )
}
