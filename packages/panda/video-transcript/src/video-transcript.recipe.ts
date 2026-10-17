import type { SlotRecipeDefinition } from "@isbatak/panda-ds/types"
import { anatomy } from "@isbatak/zag-video-transcript/anatomy"
import { defineSlotRecipe } from "@pandacss/dev"
import type { SlotRecipeConfig } from "@pandacss/types"

export const videoTranscriptSlots = anatomy.keys()

type VideoTranscriptStyles = SlotRecipeDefinition<(typeof videoTranscriptSlots)[number]>

export const videoTranscriptRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "video-transcript",
  jsx: ["VideoTranscript", /VideoTranscript\.\w+/],
  slots: videoTranscriptSlots,
  base: {
    root: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "1",
      maxHeight: { base: "64", lg: "none" },
      height: { lg: "0" },
      minHeight: { lg: "full" },
      overflowY: "auto",
      p: "2",
      borderWidth: "1px",
      borderRadius: "2xl",
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
        fontWeight: "medium",
        boxShadow: "inset 3px 0 0 var(--accent)",
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
  } satisfies VideoTranscriptStyles["base"],
  variants: {
    variant: {
      accent: {
        root: { "--accent": "{colors.purple.500}" },
      },
      neutral: {
        root: { "--accent": "{colors.fg}" },
      },
    },
    size: {
      sm: {
        cue: { textStyle: "xs" },
      },
      md: {
        cue: { textStyle: "sm" },
      },
      lg: {
        cue: { textStyle: "md" },
      },
    },
  } satisfies VideoTranscriptStyles["variants"],
  defaultVariants: {
    variant: "accent",
    size: "md",
  },
})
