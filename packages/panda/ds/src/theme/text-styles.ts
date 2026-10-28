import { defineTextStyles } from "@pandacss/dev"

export const textStyles = defineTextStyles({
  "2xs": {
    description: "Tiny annotations like badge counts and keyboard hints",
    value: {
      fontSize: "2xs",
      lineHeight: "0.75rem",
    },
  },
  xs: {
    description: "Dense UI text: captions, helper text, small controls, table metadata",
    value: {
      fontSize: "xs",
      lineHeight: "1rem",
    },
  },
  sm: {
    description: "Default UI text for controls, menus, tables and form fields",
    value: {
      fontSize: "sm",
      lineHeight: "1.25rem",
    },
  },
  md: {
    description: "Body copy and comfortable reading text",
    value: {
      fontSize: "md",
      lineHeight: "1.5rem",
    },
  },
  lg: {
    description: "Lead paragraphs and small section titles",
    value: {
      fontSize: "lg",
      lineHeight: "1.75rem",
    },
  },
  xl: {
    description: "Card and panel titles",
    value: {
      fontSize: "xl",
      lineHeight: "1.875rem",
    },
  },
  "2xl": {
    description: "Section headings",
    value: {
      fontSize: "2xl",
      lineHeight: "2rem",
    },
  },
  "3xl": {
    description: "Page titles",
    value: {
      fontSize: "3xl",
      lineHeight: "2.375rem",
    },
  },
  "4xl": {
    description: "Large page titles",
    value: {
      fontSize: "4xl",
      lineHeight: "2.75rem",
      letterSpacing: "-0.025em",
    },
  },
  "5xl": {
    description: "Hero headings",
    value: {
      fontSize: "5xl",
      lineHeight: "3.75rem",
      letterSpacing: "-0.025em",
    },
  },
  "6xl": {
    description: "Display headings for landing pages",
    value: {
      fontSize: "6xl",
      lineHeight: "4.5rem",
      letterSpacing: "-0.025em",
    },
  },
  "7xl": {
    description: "Largest display headings",
    value: {
      fontSize: "7xl",
      lineHeight: "5.75rem",
      letterSpacing: "-0.025em",
    },
  },
  none: {
    description: "Resets text style, for opting out of a recipe's default",
    value: {},
  },
  label: {
    description: "Form labels and emphasized short UI text",
    value: {
      fontSize: "sm",
      lineHeight: "1.25rem",
      fontWeight: "medium",
    },
  },
  overline: {
    description: "Uppercase eyebrow text above headings or section groups",
    value: {
      fontSize: "xs",
      lineHeight: "1rem",
      textTransform: "uppercase",
      letterSpacing: "widest",
    },
  },
})
