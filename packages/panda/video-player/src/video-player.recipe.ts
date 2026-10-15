import type { SlotRecipeDefinition } from "@isbatak/panda-ds/types"
import { anatomy } from "@isbatak/zag-video-player/anatomy"
import { defineSlotRecipe } from "@pandacss/dev"
import type { SlotRecipeConfig } from "@pandacss/types"

export const videoPlayerSlots = anatomy.keys()

type VideoPlayerStyles = SlotRecipeDefinition<(typeof videoPlayerSlots)[number]>

const range = {
  appearance: "none",
  height: "1",
  borderRadius: "full",
  bg: "linear-gradient(to right, white var(--progress, 0%), rgb(255 255 255 / 0.3) var(--progress, 0%))",
  cursor: "pointer",
  focusVisibleRing: "outside",
  "&::-webkit-slider-thumb": {
    appearance: "none",
    width: "3",
    height: "3",
    borderRadius: "full",
    bg: "white",
  },
  "&::-moz-range-thumb": {
    width: "3",
    height: "3",
    border: "none",
    borderRadius: "full",
    bg: "white",
  },
} as const

const trigger = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "9",
  height: "9",
  borderRadius: "full",
  color: "white",
  cursor: "pointer",
  _hover: { bg: "rgb(255 255 255 / 0.2)" },
  focusVisibleRing: "inside",
} as const

export const videoPlayerRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "video-player",
  jsx: ["VideoPlayer", /VideoPlayer\.\w+/],
  slots: videoPlayerSlots,
  base: {
    root: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: { base: "1fr", lg: "minmax(0, 1fr) 22rem" },
      gridTemplateRows: { base: "auto", lg: "minmax(0, auto)" },
      gap: "4",
      width: "full",
      "&[data-fullscreen]": {
        gridTemplateColumns: "minmax(0, 1fr)",
        bg: "black",
      },
    },
    video: {
      width: "full",
      aspectRatio: "16 / 9",
      borderRadius: "xl",
      bg: "black",
      objectFit: "contain",
      cursor: "pointer",
      gridColumn: "1",
    },
    controls: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      gridColumn: "1",
      gridRow: "2",
      px: "3",
      py: "2",
      borderRadius: "xl",
      bg: "gray.900",
      color: "white",
    },
    playTrigger: {
      ...trigger,
      "&[data-state=playing]::before": { content: '"❚❚"', fontSize: "xs" },
      "&[data-state=paused]::before": { content: '"▶"', fontSize: "sm" },
    },
    seek: {
      ...range,
      flex: "1",
    },
    time: {
      textStyle: "xs",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
    },
    muteTrigger: {
      ...trigger,
      "&[data-state=unmuted]::before": { content: '"🔊"', fontSize: "sm" },
      "&[data-state=muted]::before": { content: '"🔇"', fontSize: "sm" },
    },
    volume: {
      ...range,
      width: "20",
    },
    fullscreenTrigger: {
      ...trigger,
      "&::before": { content: '"⛶"', fontSize: "md" },
    },
    transcript: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "1",
      gridColumn: { base: "1", lg: "2" },
      gridRow: { base: "auto", lg: "1 / span 2" },
      maxHeight: { base: "64", lg: "none" },
      height: { lg: "0" },
      minHeight: { lg: "full" },
      overflowY: "auto",
      p: "2",
      borderWidth: "1px",
      borderRadius: "xl",
      bg: "bg",
      scrollbarWidth: "thin",
    },
    cue: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "3",
      px: "3",
      py: "2",
      borderRadius: "lg",
      textStyle: "sm",
      color: "fg.muted",
      cursor: "pointer",
      transitionProperty: "background-color, color",
      transitionDuration: "fast",
      _hover: { bg: "bg.muted" },
      focusVisibleRing: "inside",
      "&::before": {
        content: "attr(data-time)",
        color: "fg.subtle",
        fontVariantNumeric: "tabular-nums",
      },
      "&[data-active]": {
        bg: "bg.muted",
        color: "fg",
        boxShadow: "inset 3px 0 0 {colors.fg}",
        fontWeight: "medium",
      },
    },
    followTrigger: {
      position: "sticky",
      bottom: "2",
      alignSelf: "center",
      px: "3",
      py: "1.5",
      borderRadius: "full",
      bg: "gray.900",
      color: "white",
      textStyle: "xs",
      cursor: "pointer",
      boxShadow: "md",
      focusVisibleRing: "outside",
      "&[hidden]": { display: "none" },
    },
  } satisfies VideoPlayerStyles["base"],
})
