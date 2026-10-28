import { defineRecipe } from "@pandacss/dev"

export const inputElementRecipe = defineRecipe({
  className: "input-element",
  description: "Icon or element placed inside an input's border, at the start or end",
  base: {
    position: "absolute",
    zIndex: "2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    h: "full",
    color: "fg.muted",
    textStyle: "sm",
  },
  variants: {
    size: {
      xs: {
        px: "2",
        _icon: {
          boxSize: "3.5",
        },
      },
      sm: {
        px: "2",
        _icon: {
          boxSize: "4",
        },
      },
      md: {
        px: "2.5",
        _icon: {
          boxSize: "4",
        },
      },
      lg: {
        px: "3",
        _icon: {
          boxSize: "5",
        },
      },
    },
    placement: {
      start: {
        insetInlineStart: "0",
      },
      end: {
        insetInlineEnd: "0",
      },
    },
  },
  defaultVariants: {
    size: "md",
    placement: "start",
  },
})
