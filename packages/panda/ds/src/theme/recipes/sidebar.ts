import { defineSlotRecipe } from "@pandacss/dev"
import { buttonRecipe } from "./button"
import { separatorRecipe } from "./separator"

const itemText = {
  color: "fg",
  textStyle: "sm",
  fontWeight: "medium",
  textAlign: "start",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
} as const

const elementBase = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: "0",
} as const

export const sidebarSlotRecipe = defineSlotRecipe({
  className: "sidebar",
  description:
    "App navigation column with sections of nav links and menu buttons; mark the active link with aria-current=page and set colorPalette for its indicator",
  slots: [
    "root",
    "section",
    "sectionTitle",
    "sectionContent",
    "separator",
    "navItem",
    "navItemStartElement",
    "navItemEndElement",
    "navItemText",
    "menuItem",
    "menuItemStartElement",
    "menuItemEndElement",
    "menuItemText",
    "menuItemTextTitle",
    "menuItemTextDescription",
  ],
  base: {
    root: {
      "--sidebar-width": "sizes.60",
      colorPalette: "gray",
      display: "flex",
      flexDirection: "column",
      flexShrink: "0",
      transitionProperty: "width",
      transitionDuration: "moderate",
    },
    section: {
      display: "flex",
      flexDirection: "column",
    },
    sectionTitle: {
      display: "flex",
      alignItems: "center",
      color: "fg.muted",
      fontWeight: "medium",
      whiteSpace: "nowrap",
      px: "var(--sidebar-section-title-padding-x)",
    },
    sectionContent: {
      display: "flex",
      flexDirection: "column",
    },
    navItem: {
      ...buttonRecipe.base,
      ...itemText,
      display: "inline-flex",
      bg: "transparent",
      textDecoration: "none",
      _hover: {
        bg: "bg.muted",
      },
      _currentPage: {
        _before: {
          content: '""',
          position: "absolute",
          insetInlineStart: "var(--sidebar-indicator-start)",
          insetInlineEnd: "var(--sidebar-indicator-end)",
          top: "50%",
          transform: "translateY(-50%)",
          h: "calc(100% - {spacing.2})",
          w: "1",
          bg: "colorPalette.solid",
          borderStartRadius: "var(--sidebar-indicator-start-radius)",
          borderEndRadius: "var(--sidebar-indicator-end-radius)",
        },
      },
    },
    navItemStartElement: elementBase,
    navItemEndElement: elementBase,
    navItemText: {
      ...itemText,
      transitionProperty: "opacity, width",
      transitionDuration: "moderate",
    },
    menuItem: {
      ...buttonRecipe.base,
      textAlign: "start",
      px: "var(--sidebar-menu-item-padding-x)",
      py: "var(--sidebar-menu-item-padding-y)",
      _hover: {
        bg: "bg.muted",
      },
      _selected: {
        bg: "bg.emphasized",
      },
      _current: {
        bg: "bg.emphasized",
      },
    },
    menuItemStartElement: elementBase,
    menuItemEndElement: elementBase,
    menuItemText: {
      ...itemText,
      display: "inline-flex",
      flexDirection: "column",
      transitionProperty: "opacity, width",
      transitionDuration: "moderate",
    },
    menuItemTextTitle: itemText,
    menuItemTextDescription: {
      color: "fg.muted",
      textStyle: "xs",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    separator: {
      ...separatorRecipe.base,
      ...separatorRecipe.variants?.orientation.horizontal,
      ...separatorRecipe.variants?.variant.solid,
      ...separatorRecipe.variants?.size.sm,
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          "--sidebar-width-compact": "sizes.12",
          "--sidebar-nav-item-gap": "spacing.1.5",
          "--sidebar-menu-item-padding-x": "spacing.1",
          "--sidebar-menu-item-padding-y": "spacing.1",
        },
        navItem: {
          h: "9",
          px: "2",
          _icon: {
            boxSize: "4",
          },
        },
        menuItem: {
          gap: "2",
          _icon: {
            boxSize: "5",
          },
        },
        menuItemText: {
          px: "1",
        },
      },
      md: {
        root: {
          "--sidebar-width-compact": "sizes.14",
          "--sidebar-nav-item-gap": "spacing.2",
          "--sidebar-menu-item-padding-x": "spacing.2",
          "--sidebar-menu-item-padding-y": "spacing.2",
        },
        navItem: {
          h: "10",
          px: "2",
          _icon: {
            boxSize: "5",
          },
        },
        menuItem: {
          gap: "2",
          _icon: {
            boxSize: "5",
          },
        },
        menuItemText: {
          px: "1",
        },
      },
    },
    variant: {
      plain: {
        root: {
          py: "3",
          gap: "3",
        },
        section: {
          px: "2",
        },
        sectionTitle: {
          "--sidebar-section-title-padding-x": "spacing.2",
        },
        separator: {
          mx: "3",
        },
      },
      subtle: {
        root: {
          gap: "2",
        },
        section: {
          bg: "bg.subtle",
          borderRadius: "l3",
          p: "1",
        },
        sectionTitle: {
          "--sidebar-section-title-padding-x": "spacing.3",
        },
      },
    },
    indicatorPlacement: {
      start: {
        root: {
          "--sidebar-indicator-start": "calc({spacing.2} * -1)",
          "--sidebar-indicator-end": "auto",
          "--sidebar-indicator-start-radius": "0",
          "--sidebar-indicator-end-radius": "radii.sm",
        },
      },
      end: {
        root: {
          "--sidebar-indicator-start": "auto",
          "--sidebar-indicator-end": "calc({spacing.2} * -1)",
          "--sidebar-indicator-start-radius": "radii.sm",
          "--sidebar-indicator-end-radius": "0",
        },
      },
    },
    compact: {
      false: {
        root: {
          w: "var(--sidebar-width)",
        },
        navItem: {
          justifyContent: "flex-start",
          gap: "var(--sidebar-nav-item-gap)",
        },
        navItemEndElement: {
          opacity: "1",
          w: "max-content",
        },
        navItemText: {
          opacity: "1",
          w: "full",
        },
        menuItemText: {
          opacity: "1",
          w: "full",
        },
        sectionTitle: {
          textStyle: "xs",
          justifyContent: "flex-start",
          h: "7",
        },
      },
      true: {
        root: {
          w: "var(--sidebar-width-compact)",
        },
        navItem: {
          justifyContent: "center",
          gap: "0",
        },
        navItemEndElement: {
          opacity: "0",
          w: "0",
        },
        navItemText: {
          opacity: "0",
          w: "0",
        },
        menuItemText: {
          opacity: "0",
          w: "0",
        },
        section: {
          gap: "2",
        },
        sectionTitle: {
          "--sidebar-section-title-padding-x": "0",
          textStyle: "2xs",
          justifyContent: "center",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "plain",
    indicatorPlacement: "start",
    compact: false,
  },
  staticCss: [{ compact: ["*"] }],
})
