import type { ComponentType } from "react"

export interface ExampleControls {
  props?: Record<string, unknown>
  recipe?: Record<string, string>
}

export declare const examples: Record<"zag" | "ark", Record<string, ComponentType>>
export declare function resetSnapshot(exampleId: string): void
export declare function setControls(exampleId: string, value: ExampleControls): void
