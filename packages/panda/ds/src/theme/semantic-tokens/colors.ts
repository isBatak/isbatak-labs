import { defineSemanticTokens } from "@pandacss/dev"

export const colors = defineSemanticTokens.colors({
  bg: {
    DEFAULT: {
      description: "Page background",
      value: {
        base: "{colors.white}",
        _dark: "{colors.black}",
      },
    },
    subtle: {
      description: "Faint surface for secondary areas like sidebars, table stripes and code blocks",
      value: {
        base: "{colors.gray.50}",
        _dark: "{colors.gray.950}",
      },
    },
    muted: {
      description: "Low-emphasis fill for hovered rows, ghost button hover and tracks",
      value: {
        base: "{colors.gray.100}",
        _dark: "{colors.gray.900}",
      },
    },
    emphasized: {
      description: "Stronger neutral fill for pressed or selected states",
      value: {
        base: "{colors.gray.200}",
        _dark: "{colors.gray.800}",
      },
    },
    inverted: {
      description: "Inverted surface, for tooltips and high-contrast chips",
      value: {
        base: "{colors.black}",
        _dark: "{colors.white}",
      },
    },
    panel: {
      description: "Raised surfaces: cards, popovers, menus, dialogs",
      value: {
        base: "{colors.white}",
        _dark: "{colors.gray.950}",
      },
    },
    error: {
      description: "Tinted background for error alerts and callouts",
      value: {
        base: "{colors.red.50}",
        _dark: "{colors.red.950}",
      },
    },
    warning: {
      description: "Tinted background for warning alerts and callouts",
      value: {
        base: "{colors.orange.50}",
        _dark: "{colors.orange.950}",
      },
    },
    success: {
      description: "Tinted background for success alerts and callouts",
      value: {
        base: "{colors.green.50}",
        _dark: "{colors.green.950}",
      },
    },
    info: {
      description: "Tinted background for info alerts and callouts",
      value: {
        base: "{colors.blue.50}",
        _dark: "{colors.blue.950}",
      },
    },
  },
  fg: {
    DEFAULT: {
      description: "Primary text and icons",
      value: {
        base: "{colors.black}",
        _dark: "{colors.gray.50}",
      },
    },
    muted: {
      description: "Secondary text: descriptions, helper text, metadata",
      value: {
        base: "{colors.gray.600}",
        _dark: "{colors.gray.400}",
      },
    },
    subtle: {
      description: "Lowest-emphasis text: placeholders, disabled labels, hints",
      value: {
        base: "{colors.gray.400}",
        _dark: "{colors.gray.500}",
      },
    },
    inverted: {
      description: "Text on bg.inverted",
      value: {
        base: "{colors.gray.50}",
        _dark: "{colors.black}",
      },
    },
    error: {
      description: "Error text, e.g. field error messages",
      value: {
        base: "{colors.red.500}",
        _dark: "{colors.red.400}",
      },
    },
    warning: {
      description: "Warning text",
      value: {
        base: "{colors.orange.600}",
        _dark: "{colors.orange.300}",
      },
    },
    success: {
      description: "Success text",
      value: {
        base: "{colors.green.600}",
        _dark: "{colors.green.300}",
      },
    },
    info: {
      description: "Info text",
      value: {
        base: "{colors.blue.600}",
        _dark: "{colors.blue.300}",
      },
    },
  },
  border: {
    DEFAULT: {
      description: "Default border for inputs, cards and dividers",
      value: {
        base: "{colors.gray.200}",
        _dark: "{colors.gray.800}",
      },
    },
    muted: {
      description: "Softer border for separators inside panels",
      value: {
        base: "{colors.gray.100}",
        _dark: "{colors.gray.900}",
      },
    },
    subtle: {
      description: "Faintest hairline, for low-contrast dividers",
      value: {
        base: "{colors.gray.50}",
        _dark: "{colors.gray.950}",
      },
    },
    emphasized: {
      description: "Stronger border for hovered inputs or emphasized outlines",
      value: {
        base: "{colors.gray.300}",
        _dark: "{colors.gray.700}",
      },
    },
    inverted: {
      description: "Border on bg.inverted",
      value: {
        base: "{colors.gray.800}",
        _dark: "{colors.gray.200}",
      },
    },
    error: {
      description: "Border for invalid fields and error callouts",
      value: {
        base: "{colors.red.500}",
        _dark: "{colors.red.400}",
      },
    },
    warning: {
      description: "Border for warning callouts",
      value: {
        base: "{colors.orange.500}",
        _dark: "{colors.orange.400}",
      },
    },
    success: {
      description: "Border for success callouts",
      value: {
        base: "{colors.green.500}",
        _dark: "{colors.green.400}",
      },
    },
    info: {
      description: "Border for info callouts",
      value: {
        base: "{colors.blue.500}",
        _dark: "{colors.blue.400}",
      },
    },
  },
  gray: {
    contrast: {
      value: {
        base: "{colors.white}",
        _dark: "{colors.black}",
      },
    },
    fg: {
      value: {
        base: "{colors.gray.800}",
        _dark: "{colors.gray.200}",
      },
    },
    subtle: {
      value: {
        base: "{colors.gray.100}",
        _dark: "{colors.gray.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.gray.200}",
        _dark: "{colors.gray.800}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.gray.300}",
        _dark: "{colors.gray.700}",
      },
    },
    solid: {
      value: {
        base: "{colors.gray.900}",
        _dark: "{colors.white}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.gray.400}",
        _dark: "{colors.gray.400}",
      },
    },
    border: {
      value: {
        base: "{colors.gray.200}",
        _dark: "{colors.gray.800}",
      },
    },
  },
  red: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.red.700}",
        _dark: "{colors.red.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.red.100}",
        _dark: "{colors.red.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.red.200}",
        _dark: "{colors.red.800}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.red.300}",
        _dark: "{colors.red.700}",
      },
    },
    solid: {
      value: {
        base: "{colors.red.600}",
        _dark: "{colors.red.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.red.500}",
        _dark: "{colors.red.500}",
      },
    },
    border: {
      value: {
        base: "{colors.red.500}",
        _dark: "{colors.red.400}",
      },
    },
  },
  orange: {
    contrast: {
      value: {
        base: "white",
        _dark: "black",
      },
    },
    fg: {
      value: {
        base: "{colors.orange.700}",
        _dark: "{colors.orange.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.orange.100}",
        _dark: "{colors.orange.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.orange.200}",
        _dark: "{colors.orange.800}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.orange.300}",
        _dark: "{colors.orange.700}",
      },
    },
    solid: {
      value: {
        base: "{colors.orange.600}",
        _dark: "{colors.orange.500}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.orange.500}",
        _dark: "{colors.orange.500}",
      },
    },
    border: {
      value: {
        base: "{colors.orange.500}",
        _dark: "{colors.orange.400}",
      },
    },
  },
  green: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.green.700}",
        _dark: "{colors.green.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.green.100}",
        _dark: "{colors.green.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.green.200}",
        _dark: "{colors.green.800}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.green.300}",
        _dark: "{colors.green.700}",
      },
    },
    solid: {
      value: {
        base: "{colors.green.600}",
        _dark: "{colors.green.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.green.500}",
        _dark: "{colors.green.500}",
      },
    },
    border: {
      value: {
        base: "{colors.green.500}",
        _dark: "{colors.green.400}",
      },
    },
  },
  blue: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.blue.700}",
        _dark: "{colors.blue.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.blue.100}",
        _dark: "{colors.blue.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.blue.200}",
        _dark: "{colors.blue.800}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.blue.300}",
        _dark: "{colors.blue.700}",
      },
    },
    solid: {
      value: {
        base: "{colors.blue.600}",
        _dark: "{colors.blue.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.blue.500}",
        _dark: "{colors.blue.500}",
      },
    },
    border: {
      value: {
        base: "{colors.blue.500}",
        _dark: "{colors.blue.400}",
      },
    },
  },
  yellow: {
    contrast: {
      value: {
        base: "black",
        _dark: "black",
      },
    },
    fg: {
      value: {
        base: "{colors.yellow.800}",
        _dark: "{colors.yellow.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.yellow.100}",
        _dark: "{colors.yellow.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.yellow.200}",
        _dark: "{colors.yellow.800}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.yellow.300}",
        _dark: "{colors.yellow.700}",
      },
    },
    solid: {
      value: {
        base: "{colors.yellow.300}",
        _dark: "{colors.yellow.300}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.yellow.500}",
        _dark: "{colors.yellow.500}",
      },
    },
    border: {
      value: {
        base: "{colors.yellow.500}",
        _dark: "{colors.yellow.500}",
      },
    },
  },
  teal: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.teal.700}",
        _dark: "{colors.teal.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.teal.100}",
        _dark: "{colors.teal.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.teal.200}",
        _dark: "{colors.teal.800}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.teal.300}",
        _dark: "{colors.teal.700}",
      },
    },
    solid: {
      value: {
        base: "{colors.teal.600}",
        _dark: "{colors.teal.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.teal.500}",
        _dark: "{colors.teal.500}",
      },
    },
    border: {
      value: {
        base: "{colors.teal.500}",
        _dark: "{colors.teal.400}",
      },
    },
  },
  purple: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.purple.700}",
        _dark: "{colors.purple.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.purple.100}",
        _dark: "{colors.purple.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.purple.200}",
        _dark: "{colors.purple.800}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.purple.300}",
        _dark: "{colors.purple.700}",
      },
    },
    solid: {
      value: {
        base: "{colors.purple.600}",
        _dark: "{colors.purple.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.purple.500}",
        _dark: "{colors.purple.500}",
      },
    },
    border: {
      value: {
        base: "{colors.purple.500}",
        _dark: "{colors.purple.400}",
      },
    },
  },
  pink: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.pink.700}",
        _dark: "{colors.pink.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.pink.100}",
        _dark: "{colors.pink.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.pink.200}",
        _dark: "{colors.pink.800}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.pink.300}",
        _dark: "{colors.pink.700}",
      },
    },
    solid: {
      value: {
        base: "{colors.pink.600}",
        _dark: "{colors.pink.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.pink.500}",
        _dark: "{colors.pink.500}",
      },
    },
    border: {
      value: {
        base: "{colors.pink.500}",
        _dark: "{colors.pink.400}",
      },
    },
  },
  cyan: {
    contrast: {
      value: {
        base: "white",
        _dark: "white",
      },
    },
    fg: {
      value: {
        base: "{colors.cyan.700}",
        _dark: "{colors.cyan.300}",
      },
    },
    subtle: {
      value: {
        base: "{colors.cyan.100}",
        _dark: "{colors.cyan.900}",
      },
    },
    muted: {
      value: {
        base: "{colors.cyan.200}",
        _dark: "{colors.cyan.800}",
      },
    },
    emphasized: {
      value: {
        base: "{colors.cyan.300}",
        _dark: "{colors.cyan.700}",
      },
    },
    solid: {
      value: {
        base: "{colors.cyan.600}",
        _dark: "{colors.cyan.600}",
      },
    },
    focusRing: {
      value: {
        base: "{colors.cyan.500}",
        _dark: "{colors.cyan.500}",
      },
    },
    border: {
      value: {
        base: "{colors.cyan.500}",
        _dark: "{colors.cyan.400}",
      },
    },
  },
  prose: {
    body: {
      value: "{colors.fg}",
    },
    heading: {
      value: "{colors.fg}",
    },
    lead: {
      value: "{colors.fg.muted}",
    },
    link: {
      value: "{colors.fg}",
    },
    linkDecoration: {
      value: "{colors.border.emphasized}",
    },
    bold: {
      value: "{colors.fg}",
    },
    counter: {
      value: "{colors.fg.muted}",
    },
    bullet: {
      value: "{colors.fg.subtle}",
    },
    hrBorder: {
      value: "{colors.border}",
    },
    quote: {
      value: "{colors.fg}",
    },
    quoteBorder: {
      value: "{colors.border}",
    },
    caption: {
      value: "{colors.fg.muted}",
    },
    kbd: {
      value: "{colors.fg}",
    },
    code: {
      value: "{colors.fg}",
    },
    codeBg: {
      value: "{colors.bg.muted}",
    },
    preCode: {
      value: "{colors.fg}",
    },
    preBg: {
      value: "{colors.bg.subtle}",
    },
    thBorder: {
      value: "{colors.border}",
    },
    tdBorder: {
      value: "{colors.border.muted}",
    },
  },
})
