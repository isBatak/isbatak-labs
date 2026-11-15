import { defineSlotRecipe } from "@pandacss/dev"

export const imageCropperSlotRecipe = defineSlotRecipe({
  className: "image-cropper",
  description: "Crop area over an image with resize handles, zoom, rotation and flip, for avatars and uploads",
  slots: ["root", "viewport", "image", "selection", "handle", "grid"],
  base: {
    root: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "4",
      width: "full",
      color: "fg",
      "--image-cropper-overlay": "colors.blackAlpha.600",
      "--image-cropper-line": "colors.whiteAlpha.600",
      "--image-cropper-line-active": "colors.whiteAlpha.900",
      "--image-cropper-grid-line": "colors.whiteAlpha.500",
    },
    viewport: {
      position: "relative",
      overflow: "hidden",
      width: "full",
      aspectRatio: "wide",
      borderRadius: "l2",
      _disabled: {
        cursor: "move",
      },
    },
    image: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "full",
      height: "full",
      objectFit: "contain",
      transformOrigin: "center center",
      pointerEvents: "none",
      userSelect: "none",
      backfaceVisibility: "hidden",
    },
    selection: {
      boxSizing: "content-box",
      boxShadow: "0 0 0 100vmax var(--image-cropper-overlay)",
      borderWidth: "var(--image-cropper-line-width)",
      borderStyle: "solid",
      borderColor: "var(--image-cropper-line)",
      cursor: "move",
      outline: "0",
      backfaceVisibility: "hidden",
      transitionProperty: "border-color",
      transitionDuration: "fast",
      "&[data-shape=circle]": {
        borderRadius: "full",
      },
      _focusVisible: {
        borderColor: "white",
      },
      _dragging: {
        cursor: "grabbing",
        borderColor: "var(--image-cropper-line-active)",
      },
      _disabled: {
        cursor: "inherit",
      },
    },
    handle: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "var(--image-cropper-handle-size)",
      minHeight: "var(--image-cropper-handle-size)",
      "--image-cropper-handle-offset":
        "calc(var(--image-cropper-handle-indicator) / 2 - var(--image-cropper-line-width))",
      touchAction: "none",
      _disabled: {
        display: "none",
      },
      "& > *": {
        boxSize: "var(--image-cropper-handle-indicator)",
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: "0",
        filter: "drop-shadow(0 1px 2px {colors.blackAlpha.600})",
        transitionProperty: "opacity, scale",
        transitionDuration: "fast",
      },
      "&:is([data-placement=nw], [data-placement=ne], [data-placement=se], [data-placement=sw]):hover > *": {
        scale: "1.1",
      },
      "&[data-placement=nw] > *": {
        borderTopWidth: "var(--image-cropper-handle-width)",
        borderInlineStartWidth: "var(--image-cropper-handle-width)",
        translate: "var(--image-cropper-handle-offset) var(--image-cropper-handle-offset)",
      },
      "&[data-placement=ne] > *": {
        borderTopWidth: "var(--image-cropper-handle-width)",
        borderInlineEndWidth: "var(--image-cropper-handle-width)",
        translate: "calc(var(--image-cropper-handle-offset) * -1) var(--image-cropper-handle-offset)",
      },
      "&[data-placement=se] > *": {
        borderBottomWidth: "var(--image-cropper-handle-width)",
        borderInlineEndWidth: "var(--image-cropper-handle-width)",
        translate: "calc(var(--image-cropper-handle-offset) * -1) calc(var(--image-cropper-handle-offset) * -1)",
      },
      "&[data-placement=sw] > *": {
        borderBottomWidth: "var(--image-cropper-handle-width)",
        borderInlineStartWidth: "var(--image-cropper-handle-width)",
        translate: "var(--image-cropper-handle-offset) calc(var(--image-cropper-handle-offset) * -1)",
      },
      "&:is([data-placement=n], [data-placement=s], [data-placement=e], [data-placement=w]) > *": {
        bg: "white",
        borderRadius: "full",
        opacity: "0",
      },
      "&:is([data-placement=n], [data-placement=s]) > *": {
        width: "var(--image-cropper-handle-indicator)",
        height: "var(--image-cropper-handle-width)",
      },
      "&:is([data-placement=e], [data-placement=w]) > *": {
        width: "var(--image-cropper-handle-width)",
        height: "var(--image-cropper-handle-indicator)",
      },
      "&:is([data-placement=n], [data-placement=s], [data-placement=e], [data-placement=w]):hover > *": {
        opacity: "1",
      },
    },
    grid: {
      position: "absolute",
      pointerEvents: "none",
      opacity: "0",
      transitionProperty: "opacity",
      transitionDuration: "moderate",
      borderColor: "var(--image-cropper-grid-line)",
      borderStyle: "solid",
      borderWidth: "0",
      "&[data-axis=horizontal]": {
        borderBlockWidth: "1px",
      },
      "&[data-axis=vertical]": {
        borderInlineWidth: "1px",
      },
      "&:is([data-dragging], [data-panning])": {
        opacity: "1",
      },
    },
  },
  variants: {
    variant: {
      subtle: {
        viewport: {
          bg: "bg.muted",
        },
      },
      outline: {
        viewport: {
          bg: "bg",
          borderWidth: "1px",
          borderColor: "border",
        },
      },
    },
    size: {
      sm: {
        root: {
          "--image-cropper-line-width": "1px",
          "--image-cropper-handle-size": "sizes.5",
          "--image-cropper-handle-indicator": "sizes.3",
          "--image-cropper-handle-width": "2px",
        },
      },
      md: {
        root: {
          "--image-cropper-line-width": "2px",
          "--image-cropper-handle-size": "sizes.6",
          "--image-cropper-handle-indicator": "sizes.4",
          "--image-cropper-handle-width": "3px",
        },
      },
      lg: {
        root: {
          "--image-cropper-line-width": "2px",
          "--image-cropper-handle-size": "sizes.8",
          "--image-cropper-handle-indicator": "sizes.5",
          "--image-cropper-handle-width": "4px",
        },
      },
    },
  },
  defaultVariants: {
    variant: "subtle",
    size: "md",
  },
})
