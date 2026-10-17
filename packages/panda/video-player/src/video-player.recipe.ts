import type { SlotRecipeDefinition } from "@isbatak/panda-ds/types"
import { anatomy } from "@isbatak/zag-video-player/anatomy"
import { defineKeyframes, defineSlotRecipe } from "@pandacss/dev"
import type { CssKeyframes, SlotRecipeConfig } from "@pandacss/types"
import { icons } from "./video-player.icons"

export const videoPlayerSlots = [
  ...anatomy.keys(),
  "row",
  "spacer",
  "previewThumb",
  "previewText",
  "previewTime",
] as const

type VideoPlayerStyles = SlotRecipeDefinition<(typeof videoPlayerSlots)[number]>

export const videoPlayerKeyframes: CssKeyframes = defineKeyframes({
  "video-player-flash": {
    "0%": { opacity: "0.9", scale: "0.8" },
    "100%": { opacity: "0", scale: "1.3" },
  },
})

const icon = (image: string) => ({
  content: '""',
  display: "block",
  width: "full",
  height: "full",
  bg: "currentColor",
  mask: `${image} center / contain no-repeat`,
})

const trigger = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "none",
  width: "var(--control-size)",
  height: "var(--control-size)",
  p: "1.5",
  borderRadius: "full",
  color: "white",
  cursor: "pointer",
  opacity: "0.9",
  transitionProperty: "opacity, background-color",
  transitionDuration: "fast",
  _hover: { opacity: "1", bg: "rgb(255 255 255 / 0.18)" },
  focusVisibleRing: "inside",
  "&[hidden]": { display: "none" },
} as const

const slider = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "var(--control-size)",
  cursor: "pointer",
} as const

const sliderTrack = {
  position: "relative",
  flex: "1",
  height: "1",
  borderRadius: "full",
  bg: "rgb(255 255 255 / 0.3)",
} as const

const sliderRange = {
  position: "absolute",
  insetBlock: "0",
  insetInlineStart: "0",
  width: "var(--value-percent)",
  borderRadius: "inherit",
  bg: "var(--accent)",
} as const

const sliderThumb = {
  position: "absolute",
  top: "50%",
  left: "var(--value-percent)",
  translate: "-50% -50%",
  width: "3.5",
  height: "3.5",
  borderRadius: "full",
  bg: "var(--accent)",
  boxShadow: "0 0 0 3px rgb(255 255 255 / 0.25)",
  focusVisibleRing: "outside",
} as const

export const videoPlayerRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "video-player",
  jsx: ["VideoPlayer", /VideoPlayer\.\w+/],
  slots: videoPlayerSlots,
  base: {
    root: {
      display: "block",
      width: "full",
    },
    frame: {
      display: "block",
      position: "relative",
      overflow: "hidden",
      aspectRatio: "16 / 9",
      borderRadius: "3xl",
      bg: "black",
      boxShadow: "xl",
      "&:fullscreen": { borderRadius: "0", aspectRatio: "auto" },
    },
    video: {
      position: "absolute",
      inset: "0",
      width: "full",
      height: "full",
      objectFit: "contain",
      cursor: "pointer",
    },
    overlay: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "16",
      height: "16",
      translate: "-50% -50%",
      p: "4",
      borderRadius: "full",
      bg: "rgb(0 0 0 / 0.45)",
      color: "white",
      pointerEvents: "none",
      backdropFilter: "blur(6px)",
      "&::before": icon(icons.pause),
      "&[data-state=paused]": { opacity: "1" },
      "&[data-state=paused]::before": icon(icons.play),
      "&[data-state=playing]": {
        opacity: "0",
        animation: "video-player-flash 600ms ease-out",
      },
    },
    controls: {
      position: "absolute",
      insetInline: "0",
      bottom: "0",
      display: "flex",
      flexDirection: "column",
      gap: "1",
      px: "4",
      pt: "12",
      pb: "3",
      color: "white",
      bg: "linear-gradient(to top, rgb(0 0 0 / 0.7), transparent)",
      transitionProperty: "opacity",
      transitionDuration: "normal",
      "[data-part=frame][data-state=playing]:not(:hover):not(:focus-within) > &": { opacity: "0" },
    },
    playTrigger: {
      ...trigger,
      "&::before": icon(icons.play),
      "&[data-state=playing]::before": icon(icons.pause),
    },
    seekGroup: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      flex: "1",
      height: "var(--control-size)",
    },
    seek: {
      ...slider,
      flex: "1",
    },
    seekTrack: sliderTrack,
    seekRange: sliderRange,
    seekThumb: sliderThumb,
    preview: {
      position: "absolute",
      bottom: "100%",
      left: "clamp(var(--preview-half), var(--preview-x), calc(100% - var(--preview-half)))",
      "--preview-half": "{sizes.24}",
      translate: "-50% -6px",
      display: "grid",
      gap: "1.5",
      justifyItems: "center",
      width: "48",
      p: "1.5",
      borderRadius: "xl",
      bg: "rgb(30 34 44 / 0.85)",
      backdropFilter: "blur(8px)",
      color: "white",
      textStyle: "sm",
      textAlign: "center",
      pointerEvents: "none",
      "&[hidden]": { display: "none" },
    },
    previewVideo: {
      display: "block",
      width: "full",
      aspectRatio: "16 / 9",
      borderRadius: "lg",
      bg: "black",
      objectFit: "cover",
    },
    time: {
      textStyle: "xs",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      opacity: "0.9",
    },
    skipBackTrigger: {
      ...trigger,
      "&::before": icon(icons.skipBack),
    },
    skipForwardTrigger: {
      ...trigger,
      "&::before": icon(icons.skipForward),
    },
    muteTrigger: {
      ...trigger,
      "&[data-state=unmuted]::before": icon(icons.volume),
      "&[data-state=muted]::before": icon(icons.muted),
    },
    volume: {
      ...slider,
      flex: "none",
      width: "20",
    },
    volumeTrack: sliderTrack,
    volumeRange: sliderRange,
    volumeThumb: sliderThumb,
    pipTrigger: {
      ...trigger,
      "&::before": icon(icons.pip),
    },
    loopTrigger: {
      ...trigger,
      "&::before": icon(icons.loop),
      "&[data-state=off]": { opacity: "0.6" },
      "&[data-state=on]": { opacity: "1", color: "var(--accent)" },
    },
    fullscreenTrigger: {
      ...trigger,
      "&[data-state=windowed]::before": icon(icons.enterFullscreen),
      "&[data-state=fullscreen]::before": icon(icons.exitFullscreen),
    },
    row: {
      display: "flex",
      alignItems: "center",
      gap: "2",
    },
    spacer: {
      flex: "1",
    },
    previewThumb: {
      display: "block",
      position: "relative",
      width: "full",
    },
    previewText: {
      display: "block",
      textStyle: "xs",
      fontWeight: "medium",
      px: "1",
      pb: "0.5",
      minHeight: "4",
    },
    previewTime: {
      position: "absolute",
      insetInline: "0",
      bottom: "1.5",
      textAlign: "center",
      textStyle: "sm",
      fontWeight: "semibold",
      fontVariantNumeric: "tabular-nums",
      textShadow: "0 1px 3px rgb(0 0 0 / 0.8)",
    },
  } satisfies VideoPlayerStyles["base"],
  variants: {
    variant: {
      accent: {
        root: { "--accent": "{colors.purple.500}" },
      },
      neutral: {
        root: { "--accent": "{colors.white}" },
      },
    },
    size: {
      sm: {
        root: { "--control-size": "{sizes.8}" },
        controls: { px: "3", pt: "8", pb: "2" },
        time: { textStyle: "xs" },
      },
      md: {
        root: { "--control-size": "{sizes.9}" },
        controls: { px: "4", pt: "12", pb: "3" },
        playTrigger: { width: "10", height: "10" },
      },
      lg: {
        root: { "--control-size": "{sizes.11}" },
        controls: { px: "6", pt: "16", pb: "4" },
        playTrigger: { width: "12", height: "12" },
        time: { textStyle: "sm" },
      },
    },
  } satisfies VideoPlayerStyles["variants"],
  defaultVariants: {
    variant: "accent",
    size: "md",
  },
})
