import { defineStyles } from "@pandacss/dev"

export const segmentVars = defineStyles({
  "--segment-radius": "radii.l2",
  "--segment-padding": "spacing.1",
  "--segment-indicator-bg": {
    base: "colors.bg.panel",
    _dark: "colors.bg.emphasized",
  },
  "--segment-indicator-shadow": "shadows.xs",
})

export const segmentItem = defineStyles({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  fontWeight: "medium",
  color: "fg.muted",
  userSelect: "none",
  cursor: "pointer",
  transitionProperty: "color",
  transitionDuration: "fast",
  _hover: {
    color: "fg",
  },
  _disabled: {
    opacity: "0.5",
    cursor: "not-allowed",
  },
})

export const segmentIndicator = defineStyles({
  pos: "absolute",
  width: "var(--width)",
  height: "var(--height)",
  top: "var(--top)",
  left: "var(--left)",
  zIndex: -1,
  bg: "var(--segment-indicator-bg)",
  shadow: "var(--segment-indicator-shadow)",
  borderRadius: "var(--segment-radius)",
})

export const segmentSizes = {
  "2xs": {
    root: defineStyles({
      "--segment-height": "sizes.6",
      "--segment-item-height": "sizes.4.5",
    }),
    item: defineStyles({
      textStyle: "2xs",
      px: "2",
      gap: "1",
      _iconStart: { iconPullStart: "0.5" },
      _iconEnd: { iconPullEnd: "0.5" },
    }),
  },
  xs: {
    root: defineStyles({
      "--segment-height": "sizes.8",
      "--segment-item-height": "sizes.5",
    }),
    item: defineStyles({
      textStyle: "xs",
      px: "2.5",
      gap: "1",
      _iconStart: { iconPullStart: "0.5" },
      _iconEnd: { iconPullEnd: "0.5" },
    }),
  },
  sm: {
    root: defineStyles({
      "--segment-height": "sizes.9",
      "--segment-item-height": "sizes.6",
    }),
    item: defineStyles({
      textStyle: "sm",
      px: "3",
      gap: "2",
      _iconStart: { iconPullStart: "0.5" },
      _iconEnd: { iconPullEnd: "0.5" },
    }),
  },
  md: {
    root: defineStyles({
      "--segment-height": "sizes.10",
      "--segment-item-height": "sizes.8",
    }),
    item: defineStyles({
      textStyle: "sm",
      px: "4",
      gap: "2",
      _iconStart: { iconPullStart: "1" },
      _iconEnd: { iconPullEnd: "1" },
    }),
  },
  lg: {
    root: defineStyles({
      "--segment-height": "sizes.11",
      "--segment-item-height": "sizes.9",
    }),
    item: defineStyles({
      textStyle: "md",
      px: "4.5",
      gap: "3",
      _iconStart: { iconPullStart: "1" },
      _iconEnd: { iconPullEnd: "1" },
    }),
  },
}

export const segmentFitted = {
  list: defineStyles({ display: "flex" }),
  item: defineStyles({ flex: 1, textAlign: "center" }),
}

export const segmentJustify = {
  start: defineStyles({ justifyContent: "flex-start" }),
  center: defineStyles({ justifyContent: "center" }),
  end: defineStyles({ justifyContent: "flex-end" }),
}

export const segmentVariants = {
  enclosed: {
    list: defineStyles({
      "--segment-radius": "radii.l3",
      bg: { base: "blackAlpha.50", _dark: "whiteAlpha.100" },
      p: "var(--segment-padding)",
      gap: "0.5",
      borderRadius: "calc(var(--segment-radius) + var(--segment-padding))",
      minW: "max-content",
      textAlign: "center",
    }),
    item: defineStyles({
      height: "var(--segment-item-height)",
      minW: "var(--segment-item-height)",
      borderRadius: "var(--segment-radius)",
      "&:is([aria-selected=true], [data-selected], [data-state=checked])": {
        color: "fg",
      },
      "&:is([aria-selected=true], [data-selected], [data-state=checked])[data-ssr]": {
        bg: "var(--segment-indicator-bg)",
        shadow: "var(--segment-indicator-shadow)",
      },
    }),
  },
  line: {
    list: defineStyles({
      display: "flex",
      borderColor: "border",
      _horizontal: {
        borderBottomWidth: "1px",
      },
      _vertical: {
        borderEndWidth: "1px",
      },
    }),
    item: defineStyles({
      height: "var(--segment-height)",
      minW: "var(--segment-height)",
      _disabled: {
        _active: {
          bg: "initial",
        },
      },
      _before: {
        content: '""',
        position: "absolute",
        inset: "1",
        zIndex: -1,
        borderRadius: "var(--segment-radius)",
        bg: "transparent",
        transitionProperty: "background-color",
        transitionDuration: "fast",
      },
      transitionProperty: "color, scale",
      "&:is([aria-selected=true], [data-selected], [data-state=checked])": {
        color: "fg",
      },
      "&:hover:not([data-disabled])": {
        _before: {
          bg: "colorPalette.hover",
        },
      },
      "&:active:not([data-disabled])": {
        scale: "0.96",
        _before: {
          bg: "colorPalette.active",
        },
      },
    }),
    indicator: defineStyles({
      bg: "colorPalette.solid",
      shadow: "none",
      borderRadius: "0",
      _horizontal: {
        top: "auto",
        bottom: "-1px",
        height: "var(--indicator-thickness, {spacing.px})",
      },
      _vertical: {
        left: "auto",
        insetInlineEnd: "-1px",
        width: "var(--indicator-thickness, {spacing.px})",
      },
    }),
  },
  subtle: {
    item: defineStyles({
      height: "var(--segment-height)",
      minW: "var(--segment-height)",
      borderRadius: "var(--segment-radius)",
      "&:is([aria-selected=true], [data-selected], [data-state=checked])": {
        color: "colorPalette.fg",
      },
    }),
    indicator: defineStyles({
      bg: "colorPalette.subtle",
      shadow: "none",
    }),
  },
  outline: {
    list: defineStyles({
      "--line-thickness": "1px",
      "--line-offset": "calc(var(--line-thickness) * -1)",
      display: "flex",
      borderColor: "border",
      _horizontal: {
        _before: {
          content: '""',
          position: "absolute",
          bottom: "0px",
          width: "100%",
          borderBottomWidth: "var(--line-thickness)",
          borderBottomColor: "border",
        },
      },
      _vertical: {
        _before: {
          content: '""',
          position: "absolute",
          insetInline: "var(--line-offset)",
          height: "calc(100% - calc(var(--line-thickness) * 2))",
          borderEndWidth: "var(--line-thickness)",
          borderEndColor: "border",
        },
      },
    }),
    item: defineStyles({
      height: "var(--segment-height)",
      minW: "var(--segment-height)",
      borderWidth: "{spacing.px}",
      borderColor: "transparent",
      zIndex: 1,
      "&:is([aria-selected=true], [data-selected], [data-state=checked])": {
        color: "colorPalette.fg",
      },
      _horizontal: {
        marginBottom: "var(--line-offset)",
        _notLast: {
          marginEnd: "var(--line-offset)",
        },
      },
      _vertical: {
        marginEnd: "var(--line-offset)",
        _notLast: {
          marginBottom: "var(--line-offset)",
        },
      },
    }),
    indicator: defineStyles({
      zIndex: 0,
      bg: "currentBg",
      shadow: "none",
      borderWidth: "{spacing.px}",
      borderColor: "border",
      borderRadius: "0",
      _horizontal: {
        borderBottomColor: "transparent",
        borderTopRadius: "var(--segment-radius)",
      },
      _vertical: {
        borderEndColor: "transparent",
        borderStartRadius: "var(--segment-radius)",
      },
    }),
  },
  plain: {
    item: defineStyles({
      height: "var(--segment-height)",
      minW: "var(--segment-height)",
      borderRadius: "var(--segment-radius)",
      "&:is([aria-selected=true], [data-selected], [data-state=checked])": {
        color: "colorPalette.fg",
      },
      "&:is([aria-selected=true], [data-selected], [data-state=checked])[data-ssr]": {
        bg: "var(--segment-indicator-bg)",
        shadow: "var(--segment-indicator-shadow)",
      },
    }),
  },
}
