import { iconNames } from "@isbatak/icons"
import { input } from "@isbatak/panda-ds/recipes"
import { css, cx } from "../styled-system/css/index.js"

/**
 * Class names rather than components: the React, Solid, Svelte and Vue storybooks can all use plain class names,
 * while a component would need one implementation per framework. Svelte also has no Panda `styled` helpers.
 */
export const iconClasses = {
  row: css({ display: "flex", alignItems: "center", gap: "4" }),
  stack: css({ display: "grid", justifyItems: "start", gap: "4" }),
  small: css({ textStyle: "sm" }),
  large: css({ textStyle: "2xl" }),
  error: css({ display: "flex", alignItems: "center", gap: "2", color: "fg.error" }),
  gallery: css({ display: "grid", gap: "4" }),
  search: cx(input({ size: "sm" }), css({ maxW: "xs" })),
  empty: css({ textStyle: "sm", color: "fg.muted" }),
  grid: css({ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(6rem, 1fr))", gap: "2" }),
  cell: css({
    display: "grid",
    justifyItems: "center",
    gap: "2",
    py: "3",
    borderRadius: "l2",
    _hover: { bg: "bg.muted" },
  }),
  name: css({ textStyle: "xs", color: "fg.muted", textAlign: "center" }),
}

export function filterIconNames(query: string) {
  const term = query.trim().toLowerCase()
  return iconNames.filter((name) => name.includes(term))
}
