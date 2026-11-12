import { defineSlotRecipe } from "@pandacss/dev"

export const cardSlotRecipe = defineSlotRecipe({
  className: "card",
  description: "Container for displaying content related to a single subject with header, body and footer",
  slots: ["root", "header", "body", "footer", "title", "description"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: "0",
      wordWrap: "break-word",
      borderRadius: "l3",
      color: "fg",
      textAlign: "start",
      bg: "var(--card-bg)",
    },
    title: {
      fontWeight: "semibold",
    },
    description: {
      color: "fg.muted",
      fontSize: "sm",
    },
    header: {
      paddingInline: "var(--card-padding)",
      paddingTop: "var(--card-padding)",
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
    },
    body: {
      padding: "var(--card-padding)",
      flex: "1",
      display: "flex",
      flexDirection: "column",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      paddingInline: "var(--card-padding)",
      paddingBottom: "var(--card-padding)",
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          "--card-padding": "spacing.4",
        },
        title: {
          textStyle: "md",
        },
      },
      md: {
        root: {
          "--card-padding": "spacing.6",
        },
        title: {
          textStyle: "lg",
        },
      },
      lg: {
        root: {
          "--card-padding": "spacing.7",
        },
        title: {
          textStyle: "xl",
        },
      },
    },
    variant: {
      elevated: {
        root: {
          "--card-bg": "colors.bg.panel",
          "--card-bg-hover": "colors.bg.muted",
          boxShadow: "md",
        },
      },
      outline: {
        root: {
          "--card-bg": "colors.bg.panel",
          "--card-bg-hover": "colors.bg.muted",
          borderWidth: "1px",
          borderColor: "border",
        },
      },
      subtle: {
        root: {
          "--card-bg": "colors.bg.muted",
          "--card-bg-hover": "colors.bg.emphasized",
        },
      },
    },
    interactive: {
      true: {
        root: {
          cursor: "button",
          transition: "backgrounds",
          _hover: {
            bg: "var(--card-bg-hover)",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
})
