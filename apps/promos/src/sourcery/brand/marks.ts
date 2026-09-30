export const PALETTE = {
  k: "#140b24",
  v: "#8b5cf6",
  l: "#c4b5fd",
  d: "#6d28d9",
  p: "#db2777",
  h: "#f472b6",
  y: "#fbbf24",
  w: "#ffffff",
} as const

type Ink = keyof typeof PALETTE

export const SHADOW = { fill: "#8b5cf6", opacity: 0.45 } as const

export const GRADIENT = [
  { offset: 0, color: "#a78bfa" },
  { offset: 0.55, color: "#8b5cf6" },
  { offset: 1, color: "#db2777" },
] as const

export interface Box {
  x: number
  y: number
  w: number
  h: number
}

export interface Run extends Box {
  fill: string
  spark: number | undefined
}

export interface Letter {
  blocks: Box[]
  lines: Box[]
}

interface Grid {
  w: number
  h: number
  c: (Ink | "")[][]
}

const grid = (w: number, h: number): Grid => ({ w, h, c: Array.from({ length: h }, () => Array(w).fill("")) })
const get = (g: Grid, x: number, y: number) => (x >= 0 && y >= 0 && x < g.w && y < g.h ? g.c[y]![x]! : "")
const set = (g: Grid, x: number, y: number, v: Ink) => {
  if (x >= 0 && y >= 0 && x < g.w && y < g.h) g.c[y]![x] = v
}

function each(g: Grid, fn: (x: number, y: number) => void) {
  for (let y = 0; y < g.h; y++) for (let x = 0; x < g.w; x++) fn(x, y)
}

function inside(points: [number, number][], x: number, y: number) {
  let hit = false
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [xi, yi] = points[i]!
    const [xj, yj] = points[j]!
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit
  }
  return hit
}

const poly = (g: Grid, points: [number, number][], v: Ink) =>
  each(g, (x, y) => {
    if (inside(points, x + 0.5, y + 0.5)) set(g, x, y, v)
  })

const ellipse = (g: Grid, cx: number, cy: number, rx: number, ry: number, v: Ink) =>
  each(g, (x, y) => {
    if (((x + 0.5 - cx) / rx) ** 2 + ((y + 0.5 - cy) / ry) ** 2 <= 1) set(g, x, y, v)
  })

const stamp = (g: Grid, rows: string[], x0: number, y0: number) =>
  rows.forEach((row, y) =>
    [...row].forEach((ch, x) => {
      if (ch !== ".") set(g, x0 + x, y0 + y, ch as Ink)
    }),
  )

function outline(g: Grid) {
  const add: [number, number][] = []
  each(g, (x, y) => {
    if (get(g, x, y)) return
    const near = [get(g, x + 1, y), get(g, x - 1, y), get(g, x, y + 1), get(g, x, y - 1)]
    if (near.some((c) => c && c !== "k")) add.push([x, y])
  })
  add.forEach(([x, y]) => set(g, x, y, "k"))
}

function shadeRows(g: Grid) {
  for (let y = 0; y < g.h; y++) {
    const xs: number[] = []
    for (let x = 0; x < g.w; x++) if (get(g, x, y) === "v") xs.push(x)
    if (xs.length > 1) set(g, xs[0]!, y, "l")
    if (xs.length > 2) set(g, xs[xs.length - 1]!, y, "d")
  }
}

const POINTER = [
  "k.......",
  "kk......",
  "kwk.....",
  "kwwk....",
  "kwwwk...",
  "kwwwwk..",
  "kwwwwwk.",
  "kwwwwwwk",
  "kwwwkkkk",
  "kwkwwk..",
  "kk.kwwk.",
  "....kwwk",
  ".....kk.",
]

const STAR = [".y.", "yyy", ".y."]

function drawHat() {
  const g = grid(24, 24)
  poly(
    g,
    [
      [5, 18],
      [9.5, 9],
      [12, 4.5],
      [14.5, 2.2],
      [18, 1.8],
      [21, 3.5],
      [17, 3.6],
      [15.2, 5.5],
      [14.8, 9],
      [17, 18],
    ],
    "v",
  )
  shadeRows(g)
  for (let y = 13; y <= 14; y++)
    for (let x = 0; x < g.w; x++) {
      const c = get(g, x, y)
      if (c === "v" || c === "d") set(g, x, y, "p")
      if (c === "l") set(g, x, y, "h")
    }
  ellipse(g, 11, 18, 10, 2.8, "v")
  each(g, (x, y) => {
    if (y >= 19 && get(g, x, y) === "v") set(g, x, y, "d")
  })
  each(g, (x, y) => {
    if (y === 15 && get(g, x, y) === "v" && get(g, x, y - 1) === "") set(g, x, y, "l")
  })
  outline(g)
  stamp(g, STAR, 10, 8)
  set(g, 11, 9, "w")
  set(g, 13, 5, "y")
  stamp(g, STAR, 2, 4)
  set(g, 21, 8, "y")
  set(g, 1, 11, "y")
  stamp(g, POINTER, 15, 11)
  return g
}

function runs(g: Grid): Run[] {
  const out: Run[] = []
  let sparks = 0
  for (let y = 0; y < g.h; y++) {
    let x = 0
    while (x < g.w) {
      const c = get(g, x, y)
      if (!c) {
        x++
        continue
      }
      let e = x + 1
      while (e < g.w && get(g, e, y) === c) e++
      out.push({ x, y, w: e - x, h: 1, fill: PALETTE[c], spark: c === "y" ? sparks++ % 3 : undefined })
      x = e
    }
  }
  return out
}

export const HAT = { size: 24, runs: runs(drawHat()) } as const

const ANSI: Record<string, string[]> = {
  S: ["███████╗", "██╔════╝", "███████╗", "╚════██║", "███████║", "╚══════╝"],
  O: [" ██████╗ ", "██╔═══██╗", "██║   ██║", "██║   ██║", "╚██████╔╝", " ╚═════╝ "],
  U: ["██╗   ██╗", "██║   ██║", "██║   ██║", "██║   ██║", "╚██████╔╝", " ╚═════╝ "],
  R: ["██████╗ ", "██╔══██╗", "██████╔╝", "██╔══██╗", "██║  ██║", "╚═╝  ╚═╝"],
  C: [" ██████╗", "██╔════╝", "██║     ", "██║     ", "╚██████╗", " ╚═════╝"],
  E: ["███████╗", "██╔════╝", "█████╗  ", "██╔══╝  ", "███████╗", "╚══════╝"],
  Y: ["██╗   ██╗", "╚██╗ ██╔╝", " ╚████╔╝ ", "  ╚██╔╝  ", "   ██║   ", "   ╚═╝   "],
}

const GAP = 0.17
const STROKE = 0.12
const MID_X = 0.5
const MID_Y = 1
const HI = MID_X + GAP + STROKE / 2
const LO = MID_X - GAP - STROKE / 2
const TOP = MID_Y - GAP - STROKE / 2
const BOTTOM = MID_Y + GAP + STROKE / 2

function letter(rows: string[], x0: number): Letter {
  const blocks: Box[] = []
  const lines: Box[] = []
  const across = (x: number, y: number, a: number, b: number) => {
    lines.push({ x: x + a, y: y + MID_Y - GAP - STROKE / 2, w: b - a, h: STROKE })
    lines.push({ x: x + a, y: y + MID_Y + GAP - STROKE / 2, w: b - a, h: STROKE })
  }
  const down = (x: number, y: number, a: number, b: number) => {
    lines.push({ x: x + MID_X - GAP - STROKE / 2, y: y + a, w: STROKE, h: b - a })
    lines.push({ x: x + MID_X + GAP - STROKE / 2, y: y + a, w: STROKE, h: b - a })
  }
  rows.forEach((row, ry) => {
    const cells = [...row]
    const y = ry * 2
    let i = 0
    while (i < cells.length) {
      const x = x0 + i
      if (cells[i] === "█") {
        let e = i + 1
        while (e < cells.length && cells[e] === "█") e++
        blocks.push({ x, y, w: e - i, h: 2 })
        i = e
        continue
      }
      const c = cells[i]
      if (c === "═") across(x, y, 0, 1)
      if (c === "║") down(x, y, 0, 2)
      if (c === "╗") {
        across(x, y, 0, HI)
        down(x, y, TOP, 2)
      }
      if (c === "╔") {
        across(x, y, LO, 1)
        down(x, y, TOP, 2)
      }
      if (c === "╝") {
        across(x, y, 0, HI)
        down(x, y, 0, BOTTOM)
      }
      if (c === "╚") {
        across(x, y, LO, 1)
        down(x, y, 0, BOTTOM)
      }
      i++
    }
  })
  return { blocks, lines }
}

function banner(word: string) {
  const letters: Letter[] = []
  let x = 0
  for (const ch of word) {
    const rows = ANSI[ch]!
    letters.push(letter(rows, x))
    x += [...rows[0]!].length
  }
  return { width: x, height: 12, letters }
}

export const WORDMARK = banner("SOURCERY")

export const LOCKUP = {
  hatScale: WORDMARK.height / HAT.size,
  wordX: WORDMARK.height + 3,
  width: WORDMARK.height + 3 + WORDMARK.width,
  height: WORDMARK.height,
} as const

const n = (value: number) => +value.toFixed(3)
const rect = (box: Box, extra = "") =>
  `<rect x="${n(box.x)}" y="${n(box.y)}" width="${n(box.w)}" height="${n(box.h)}"${extra}/>`

function hatRects() {
  return HAT.runs
    .map((run) => rect(run, ` fill="${run.fill}"${run.spark === undefined ? "" : ` class="spark s${run.spark}"`}`))
    .join("")
}

const SPARK_CSS =
  ".spark{animation:twinkle 2.4s steps(1) infinite}.s1{animation-delay:-.8s}.s2{animation-delay:-1.6s}@keyframes twinkle{50%{opacity:.3}}"
const REDUCED_CSS = "@media (prefers-reduced-motion:reduce){*{animation:none!important}}"

export function hatSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${HAT.size} ${HAT.size}" shape-rendering="crispEdges" role="img" aria-label="Sourcery"><style>${SPARK_CSS}${REDUCED_CSS}</style>${hatRects()}</svg>\n`
}

export function lockupSvg() {
  const css = [
    ".hat{transform-box:fill-box;transform-origin:50% 100%;animation:pop .5s steps(5) both}",
    ".letter{animation:rise .36s steps(3) both}",
    "@keyframes pop{from{opacity:0;transform:scale(.4)}}",
    "@keyframes rise{from{opacity:0;transform:translateY(4px)}}",
    SPARK_CSS,
    REDUCED_CSS,
  ].join("")
  const stops = GRADIENT.map((stop) => `<stop offset="${stop.offset}" stop-color="${stop.color}"/>`).join("")
  const letters = WORDMARK.letters
    .map(
      (item, i) =>
        `<g class="letter" style="animation-delay:${200 + i * 70}ms"><g fill="${SHADOW.fill}" fill-opacity="${SHADOW.opacity}">${item.lines.map((box) => rect(box)).join("")}</g><g fill="url(#sourcery-gradient)">${item.blocks.map((box) => rect(box)).join("")}</g></g>`,
    )
    .join("")
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${LOCKUP.width} ${LOCKUP.height}" role="img" aria-label="Sourcery"><style>${css}</style><defs><linearGradient id="sourcery-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${WORDMARK.width}" y2="0">${stops}</linearGradient></defs><g class="hat"><g transform="scale(${LOCKUP.hatScale})" shape-rendering="crispEdges">${hatRects()}</g></g><g transform="translate(${LOCKUP.wordX} 0)">${letters}</g></svg>\n`
}
