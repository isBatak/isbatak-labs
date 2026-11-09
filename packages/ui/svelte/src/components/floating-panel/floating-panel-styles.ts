import type { floatingPanel } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useFloatingPanelStyles, provideFloatingPanelStyles] =
  createContext<() => ReturnType<typeof floatingPanel>>()
