import { css } from "../styled-system/css/index.js"

export interface MasonryTile {
  value: string
  height: number
}

const tileHeights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80]

export const createMasonryTile = (index: number): MasonryTile => ({
  value: `${index + 1}`,
  height: tileHeights[index % tileHeights.length]!,
})

export const initialMasonryTiles = Array.from({ length: 8 }, (_, index) => createMasonryTile(index))

export const nextMasonryTile = (tiles: MasonryTile[]) => createMasonryTile(Number(tiles.at(-1)?.value ?? 0))

export function formatLayout(columns: number) {
  return `Columns: ${columns}`
}

export const masonryClasses = {
  story: css({ display: "grid", gap: "3", maxWidth: "2xl" }),
  tile: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted",
    textStyle: "sm",
  }),
  image: css({ display: "block", width: "full", height: "auto" }),
  details: css({ color: "fg.muted", textStyle: "sm" }),
  summary: css({ px: "3", py: "2", color: "fg", fontWeight: "medium", cursor: "pointer" }),
  content: css({ px: "3", pb: "3" }),
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
}
