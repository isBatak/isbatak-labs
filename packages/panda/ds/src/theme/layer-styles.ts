import { defineLayerStyles } from "@pandacss/dev"

export const layerStyles = defineLayerStyles({
  "fill.muted": {
    value: {
      background: "colorPalette.muted",
      color: "colorPalette.fg",
    },
  },
  "fill.subtle": {
    value: {
      background: "colorPalette.subtle",
      color: "colorPalette.fg",
    },
  },
  "fill.surface": {
    value: {
      background: "colorPalette.subtle",
      color: "colorPalette.fg",
      boxShadow: "0 0 0px 1px var(--shadow-color)",
      boxShadowColor: "colorPalette.muted",
    },
  },
  "fill.solid": {
    value: {
      background: "colorPalette.solid",
      color: "colorPalette.contrast",
    },
  },
  "outline.subtle": {
    value: {
      color: "colorPalette.fg",
      boxShadow: "inset 0 0 0px 1px var(--shadow-color)",
      boxShadowColor: "colorPalette.subtle",
    },
  },
  "outline.solid": {
    value: {
      borderWidth: "1px",
      borderColor: "colorPalette.solid",
      color: "colorPalette.fg",
    },
  },
  "indicator.bottom": {
    value: {
      position: "relative",
      "--indicator-color-fallback": "colors.colorPalette.solid",
      _before: {
        content: '""',
        position: "absolute",
        bottom: "var(--indicator-offset-y, 0)",
        insetInline: "var(--indicator-offset-x, 0)",
        height: "var(--indicator-thickness, 2px)",
        background: "var(--indicator-color, var(--indicator-color-fallback))",
      },
    },
  },
  "indicator.top": {
    value: {
      position: "relative",
      "--indicator-color-fallback": "colors.colorPalette.solid",
      _before: {
        content: '""',
        position: "absolute",
        top: "var(--indicator-offset-y, 0)",
        insetInline: "var(--indicator-offset-x, 0)",
        height: "var(--indicator-thickness, 2px)",
        background: "var(--indicator-color, var(--indicator-color-fallback))",
      },
    },
  },
  "indicator.start": {
    value: {
      position: "relative",
      "--indicator-color-fallback": "colors.colorPalette.solid",
      _before: {
        content: '""',
        position: "absolute",
        insetInlineStart: "var(--indicator-offset-x, 0)",
        insetBlock: "var(--indicator-offset-y, 0)",
        width: "var(--indicator-thickness, 2px)",
        background: "var(--indicator-color, var(--indicator-color-fallback))",
      },
    },
  },
  "indicator.end": {
    value: {
      position: "relative",
      "--indicator-color-fallback": "colors.colorPalette.solid",
      _before: {
        content: '""',
        position: "absolute",
        insetInlineEnd: "var(--indicator-offset-x, 0)",
        insetBlock: "var(--indicator-offset-y, 0)",
        width: "var(--indicator-thickness, 2px)",
        background: "var(--indicator-color, var(--indicator-color-fallback))",
      },
    },
  },
  imageOutline: {
    description:
      "Use on images and avatars. Draws a faint 1px line just inside the edge, black in light mode and white in dark mode, so pale images don't blend into the page. Doesn't take up space or shift layout. Set --image-outline-opacity (0–1, default 0.1) to change its strength.",
    value: {
      outlineWidth: "1px",
      outlineStyle: "solid",
      outlineOffset: "-1px",
      outlineColor: "color-mix(in srgb, {colors.black} calc(var(--image-outline-opacity, 0.1) * 100%), transparent)",
      _dark: {
        outlineColor: "color-mix(in srgb, {colors.white} calc(var(--image-outline-opacity, 0.1) * 100%), transparent)",
      },
    },
  },
  iconGlaze: {
    description:
      "Use on single-color app icons and icon tiles. Keeps the face flat and adds a thin, soft bevel of light around the edge (bright on top, fainter on the bottom, shaded on the sides) plus a drop shadow, so a flat tile reads as a lit, rounded object. Uses both ::before and ::after. Keeps its own background, so set the tile color with bg. The glyph stays above the effect, and overflow is hidden so the light follows any corner shape (pair it with cornerShape: squircle). Set --icon-glaze-intensity (0–2, default 1) to change its strength.",
    value: {
      position: "relative",
      isolation: "isolate",
      overflow: "hidden",
      boxShadow: [
        "inset 0 1px 0 0 color-mix(in srgb, {colors.white} calc(var(--icon-glaze-intensity, 1) * 55%), transparent)",
        "inset 0 -1px 0 0 color-mix(in srgb, {colors.white} calc(var(--icon-glaze-intensity, 1) * 30%), transparent)",
        "inset 0 0 0 0.5px color-mix(in srgb, {colors.white} calc(var(--icon-glaze-intensity, 1) * 20%), transparent)",
        "0 1px 1px color-mix(in srgb, {colors.black} calc(var(--icon-glaze-intensity, 1) * 10%), transparent)",
        "0 0.5em 1em -0.5em color-mix(in srgb, {colors.black} calc(var(--icon-glaze-intensity, 1) * 35%), transparent)",
      ].join(", "),
      _before: {
        content: '""',
        position: "absolute",
        inset: "0",
        zIndex: "-1",
        borderRadius: "inherit",
        pointerEvents: "none",
        backgroundImage: [
          "linear-gradient(180deg, color-mix(in srgb, {colors.white} calc(var(--icon-glaze-intensity, 1) * 60%), transparent) 0%, transparent 12%)",
          "linear-gradient(0deg, color-mix(in srgb, {colors.white} calc(var(--icon-glaze-intensity, 1) * 35%), transparent) 0%, transparent 10%)",
          "linear-gradient(90deg, color-mix(in srgb, {colors.black} calc(var(--icon-glaze-intensity, 1) * 14%), transparent) 0%, transparent 10%, transparent 90%, color-mix(in srgb, {colors.black} calc(var(--icon-glaze-intensity, 1) * 14%), transparent) 100%)",
        ].join(", "),
      },
      _after: {
        content: '""',
        position: "absolute",
        inset: "3.5%",
        zIndex: "-1",
        borderRadius: "inherit",
        pointerEvents: "none",
        background: "inherit",
        filter: "blur({blurs.sm})",
      },
    },
  },
  frostGlaze: {
    description:
      "Use on panels that sit over a photo or colorful background, like an icon folder, a widget or a floating toolbar. Frosts the backdrop with a blur and a white tint, then adds a bright rim along the top, fainter rims on the sides and bottom, a soft glow under the top edge and a drop shadow, so the panel reads as a sheet of glass. Pairs with iconGlaze tiles. Set --frost-glaze-intensity (0–2, default 1) to change the light, and bg to tint the glass.",
    value: {
      backgroundColor: "color-mix(in srgb, {colors.white} 18%, transparent)",
      backdropFilter: "blur({blurs.2xl}) saturate(160%)",
      boxShadow: [
        "inset 0 1px 0 0 color-mix(in srgb, {colors.white} calc(var(--frost-glaze-intensity, 1) * 60%), transparent)",
        "inset 0 -1px 0 0 color-mix(in srgb, {colors.white} calc(var(--frost-glaze-intensity, 1) * 22%), transparent)",
        "inset 1px 0 0 0 color-mix(in srgb, {colors.white} calc(var(--frost-glaze-intensity, 1) * 18%), transparent)",
        "inset -1px 0 0 0 color-mix(in srgb, {colors.white} calc(var(--frost-glaze-intensity, 1) * 18%), transparent)",
        "inset 0 1.5em 2em -1.5em color-mix(in srgb, {colors.white} calc(var(--frost-glaze-intensity, 1) * 28%), transparent)",
        "inset 0 -1em 1.5em -1em color-mix(in srgb, {colors.black} calc(var(--frost-glaze-intensity, 1) * 8%), transparent)",
        "0 0.75em 2em -0.75em color-mix(in srgb, {colors.black} calc(var(--frost-glaze-intensity, 1) * 30%), transparent)",
      ].join(", "),
    },
  },
  disabled: {
    value: {
      opacity: "0.5",
      cursor: "not-allowed",
    },
  },
  none: {
    value: {},
  },
})
