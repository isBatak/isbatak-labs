import { defineSlotRecipe } from "@pandacss/dev"
import { buttonRecipe } from "./button"

export const bottomNavBarSlotRecipe = defineSlotRecipe({
  className: "bottom-nav-bar",
  description:
    "Mobile tab bar pinned to the bottom of the screen with icon-and-label links; mark the active link with aria-current=page",
  slots: ["root", "item", "itemIcon", "itemLabel"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bg: "bg.panel",
      px: "3",
      pb: "[env(safe-area-inset-bottom)]",
    },
    item: {
      ...buttonRecipe.base,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1",
      flex: "1 0 0",
      minW: "0",
      maxW: "28",
      h: "12",
      px: "2",
      borderRadius: "l2",
      textDecoration: "none",
      focusVisibleRing: "inside",
      _currentPage: {
        "& [data-slot=itemIcon], & [data-slot=itemLabel]": {
          color: "fg",
        },
      },
      "&:has([data-slot=itemLabel])": {
        h: "14",
        justifyContent: "flex-start",
        pt: "2",
      },
    },
    itemIcon: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      color: "fg.muted",
      _icon: {
        boxSize: "6",
      },
    },
    itemLabel: {
      textStyle: "sm",
      fontWeight: "medium",
      color: "fg.muted",
      textAlign: "center",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxW: "full",
    },
  },
})
