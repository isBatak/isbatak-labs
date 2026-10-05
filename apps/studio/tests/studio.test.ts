import { generateCss } from "../src/lib/css"
import { emptyDoc, listRules, setRule, setSemanticToken, setToken } from "../src/lib/doc"
import { toPresetObject } from "../src/lib/export"
import { cssVarName, longhand, partFromClassList, resolveStyleValue } from "../src/lib/theme-meta"

describe("theme-meta", () => {
  test("css variable names follow Panda's escaping", () => {
    expect(cssVarName("colors", ["colorPalette", "focusRing"])).toBe("--colors-color-palette-focus-ring")
    expect(cssVarName("spacing", ["2.5"])).toBe("--spacing-2\\.5")
    expect(cssVarName("colors", ["bg", "DEFAULT"])).toBe("--colors-bg")
  })

  test("resolves token names, opacity modifiers and raw values", () => {
    expect(resolveStyleValue("colors", "blue.500")).toBe("var(--colors-blue-500)")
    expect(resolveStyleValue("colors", "colorPalette.solid/90")).toBe(
      "color-mix(in oklab, var(--colors-color-palette-solid) 90%, transparent)",
    )
    expect(resolveStyleValue("spacing", "2.5")).toBe("var(--spacing-2\\.5)")
    expect(resolveStyleValue("spacing", "13px")).toBe("13px")
  })

  test("maps shorthands and class names back to recipe parts", () => {
    expect(longhand("px")).toBe("paddingInline")
    expect(longhand("bg")).toBe("background")
    expect(partFromClassList(["accordion__itemTrigger", "accordion__itemTrigger--size_md"])).toEqual({
      recipe: "accordion",
      slot: "itemTrigger",
    })
    expect(partFromClassList(["button", "button--variant_solid"])).toEqual({ recipe: "button", slot: undefined })
    expect(partFromClassList(["switch__thumb"])).toEqual({ recipe: "swittch", slot: "thumb" })
  })
})

describe("doc", () => {
  const target = { recipe: "button", scope: "variant:outline", state: "hover" }

  test("empty values remove edits", () => {
    const doc = setRule(setRule(emptyDoc(), target, "background", "blue.100"), target, "background", "")
    expect(listRules(doc)).toEqual([])
    expect(setToken(setToken(emptyDoc(), "colors.gray.500", "#777"), "colors.gray.500", undefined).tokens).toEqual({})
  })
})

describe("generateCss", () => {
  test("puts edits into Panda's cascade layers", () => {
    let doc = setToken(emptyDoc(), "colors.gray.500", "#777777")
    doc = setSemanticToken(doc, "colors.bg", "_dark", "{colors.gray.900/50}")
    doc = setRule(doc, { recipe: "button", scope: "variant:outline", state: "hover" }, "background", "blue.100")
    doc = setRule(doc, { recipe: "accordion", slot: "itemTrigger", scope: "base", state: "" }, "paddingInline", "2.5")

    expect(generateCss(doc)).toMatchInlineSnapshot(`
      "@layer tokens {
        :where(:root, :host) {
          --colors-gray-500: #777777;
        }
        .dark {
          --colors-bg: color-mix(in oklab, var(--colors-gray-900) 50%, transparent);
        }
      }
      @layer recipes.variants {
        .button--variant_outline:is(:hover, [data-hover]) {
          background: var(--colors-blue-100);
        }
      }
      @layer recipes.slots.base {
        .accordion__itemTrigger {
          padding-inline: var(--spacing-2\\.5);
        }
      }
      "
    `)
  })
})

describe("toPresetObject", () => {
  test("keeps unedited conditions and nests DEFAULT tokens", () => {
    const doc = setSemanticToken(emptyDoc(), "colors.bg", "base", "#fafaf9")
    expect(toPresetObject(doc).semanticTokens.colors.bg.DEFAULT.value).toEqual({
      base: "#fafaf9",
      _dark: "{colors.black}",
    })
  })

  test("reuses the key the recipe already uses so Panda's merge replaces it", () => {
    const doc = setRule(
      emptyDoc(),
      { recipe: "button", scope: "variant:outline", state: "hover" },
      "background",
      "blue.100",
    )
    expect(toPresetObject(doc).recipes.button.variants.variant.outline).toEqual({ _hover: { bg: "blue.100" } })
  })

  test("keeps dotted token names as one key", () => {
    const doc = setToken(emptyDoc(), "spacing.2.5", "0.7rem")
    expect(toPresetObject(doc).tokens.spacing).toEqual({ "2.5": { value: "0.7rem" } })
  })
})
