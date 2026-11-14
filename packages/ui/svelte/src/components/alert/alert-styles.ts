import type { alert } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useAlertStyles, provideAlertStyles] = createContext<() => ReturnType<typeof alert>>()

export const [useAlertStatus, provideAlertStatus] =
  createContext<() => "info" | "warning" | "success" | "error" | "neutral">()
