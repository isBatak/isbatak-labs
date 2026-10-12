import { css } from "../styled-system/css/index.js"

export const textFlipClasses = {
  story: css({ display: "grid", justifyItems: "start", gap: "6" }),
  heading: css({ textStyle: "4xl", fontWeight: "semibold", letterSpacing: "tight" }),
  actions: css({ display: "flex", gap: "2" }),
  button: css({
    px: "3",
    py: "1.5",
    borderWidth: "1px",
    borderRadius: "l2",
    textStyle: "sm",
    cursor: "pointer",
    _hover: { bg: "bg.muted" },
  }),
  status: css({ color: "fg.muted", textStyle: "sm" }),
}

export function formatTextFlip(index: number, count: number, playing: boolean) {
  return `Item ${index + 1} of ${count}, ${playing ? "playing" : "paused"}`
}
