import type { ColorMode, StudioDoc } from "./doc"

export type Page =
  | { kind: "foundation"; id: FoundationId }
  | { kind: "components" }
  | { kind: "component"; id: ComponentId }

export type FoundationId = "overview" | "color" | "typography" | "radius" | "shadow" | "spacing"

export type ComponentId = keyof typeof import("../components").components

export type View = "demo" | "matrix"

export interface Part {
  recipe: string
  slot?: string | undefined
}

/** Shell → canvas */
export interface RenderMessage {
  type: "render"
  page: Page
  view: View
  css: string
  doc: StudioDoc
  colorMode: ColorMode
  selectedPart: Part | undefined
  /** Part hovered in the Component Layers tree, outlined on the canvas */
  hoveredPart: Part | undefined
  selectedToken: string | undefined
}

/** Canvas → shell */
export type CanvasMessage =
  | { type: "ready" }
  | { type: "select-part"; part: Part }
  | { type: "select-token"; token: string }
  | { type: "navigate"; page: Page }
  | { type: "lint"; results: LintResult[] }
  | { type: "layers"; layers: LayerNode[] }

/** A recipe part rendered on the canvas, nested like the DOM. Repeated siblings are merged. */
export interface LayerNode {
  recipe: string
  slot?: string | undefined
  children: LayerNode[]
}

export interface LintResult {
  id: string
  label: string
  foreground: string
  background: string
  ratio: number
}

export const isCanvasMessage = (data: unknown): data is CanvasMessage =>
  typeof data === "object" && data !== null && "type" in data && typeof (data as { type: unknown }).type === "string"
