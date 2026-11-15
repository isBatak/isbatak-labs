import { useFocusVisible } from "@ark-ui/solid/interaction"
import { Slider, useSliderContext } from "@ark-ui/solid/slider"
import { type ComponentProps, createEffect, createSignal, For, type JSX, on, Show, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { slider } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(slider)

export const SliderRoot = withProvider(Slider.Root, "root", { forwardProps: ["orientation"] })
export type SliderRootProps = ComponentProps<typeof SliderRoot>

export const SliderRootProvider = withProvider(Slider.RootProvider, "root", { forwardProps: ["orientation"] })
export type SliderRootProviderProps = ComponentProps<typeof SliderRootProvider>

export const SliderLabel = withContext(Slider.Label, "label")
export type SliderLabelProps = ComponentProps<typeof SliderLabel>

export const SliderValueText = withContext(Slider.ValueText, "valueText")
export type SliderValueTextProps = ComponentProps<typeof SliderValueText>

export const SliderControl = withContext(Slider.Control, "control")
export type SliderControlProps = ComponentProps<typeof SliderControl>

export const SliderTrack = withContext(Slider.Track, "track")
export type SliderTrackProps = ComponentProps<typeof SliderTrack>

export const SliderRange = withContext(Slider.Range, "range")
export type SliderRangeProps = ComponentProps<typeof SliderRange>

const StyledSliderThumb = withContext(Slider.Thumb, "thumb")
export type SliderThumbProps = ComponentProps<typeof StyledSliderThumb>

function isUnderText(thumb: HTMLElement | undefined) {
  const root = thumb?.closest("[data-slider-root]")
  if (!thumb || !root) return false
  const thumbRect = thumb.getBoundingClientRect()
  return Array.from(root.querySelectorAll("[data-slider-label], [data-slider-value-text]")).some((text) => {
    const rect = text.getBoundingClientRect()
    return (
      thumbRect.left < rect.right &&
      thumbRect.right > rect.left &&
      thumbRect.top < rect.bottom &&
      thumbRect.bottom > rect.top
    )
  })
}

export function SliderThumb(props: SliderThumbProps) {
  const [local, rest] = splitProps(props, ["ref"])
  const focusVisible = useFocusVisible()
  const slider = useSliderContext()
  const [underText, setUnderText] = createSignal(false)
  let thumbEl: HTMLDivElement | undefined

  createEffect(
    on(
      () => slider().value,
      () => setUnderText(isUnderText(thumbEl)),
    ),
  )

  const setRef = (el: HTMLDivElement) => {
    thumbEl = el
    if (typeof local.ref === "function") (local.ref as (el: HTMLDivElement) => void)(el)
  }

  return (
    <StyledSliderThumb
      ref={setRef}
      data-focus-visible={focusVisible() ? "" : undefined}
      data-under-text={underText() ? "" : undefined}
      {...rest}
    />
  )
}

export const SliderHiddenInput = Slider.HiddenInput
export type SliderHiddenInputProps = ComponentProps<typeof SliderHiddenInput>

export const SliderMarkerGroup = withContext(Slider.MarkerGroup, "markerGroup")
export type SliderMarkerGroupProps = ComponentProps<typeof SliderMarkerGroup>

export const SliderMarker = withContext(Slider.Marker, "marker")
export type SliderMarkerProps = ComponentProps<typeof SliderMarker>

export const SliderMarkerIndicator = withContext("div", "markerIndicator")
export type SliderMarkerIndicatorProps = ComponentProps<typeof SliderMarkerIndicator>

export const SliderMarkerLabel = withContext("span", "markerLabel")
export type SliderMarkerLabelProps = ComponentProps<typeof SliderMarkerLabel>

export const SliderDraggingIndicator = withContext(Slider.DraggingIndicator, "draggingIndicator")
export type SliderDraggingIndicatorProps = ComponentProps<typeof SliderDraggingIndicator>

export const SliderContext = Slider.Context
export type SliderContextProps = Slider.ContextProps

export type SliderThumbsProps = Omit<SliderThumbProps, "index">

export function SliderThumbs(props: SliderThumbsProps) {
  const slider = useSliderContext()
  return (
    <For each={slider().value}>
      {(_, index) => (
        <SliderThumb index={index()} {...props}>
          <SliderHiddenInput />
        </SliderThumb>
      )}
    </For>
  )
}

export type SliderMarksProps = SliderMarkerGroupProps & {
  marks?: Array<number | { value: number; label: JSX.Element }> | undefined
}

export function SliderMarks(props: SliderMarksProps) {
  const [local, rest] = splitProps(props, ["marks"])
  return (
    <Show when={local.marks?.length}>
      <SliderMarkerGroup {...rest}>
        <For each={local.marks}>
          {(mark) => (
            <SliderMarker value={typeof mark === "number" ? mark : mark.value}>
              <SliderMarkerIndicator />
              <Show when={typeof mark !== "number" && mark.label != null}>
                <SliderMarkerLabel>{typeof mark === "number" ? undefined : mark.label}</SliderMarkerLabel>
              </Show>
            </SliderMarker>
          )}
        </For>
      </SliderMarkerGroup>
    </Show>
  )
}
