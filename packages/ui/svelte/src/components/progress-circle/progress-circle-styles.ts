import type { ProgressCircleVariantProps, progressCircle } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useProgressCircleStyles, provideProgressCircleStyles] =
  createContext<() => ReturnType<typeof progressCircle>>()
export const [useProgressCircleProps, provideProgressCircleProps, hasProgressCircleProps] =
  createContext<() => ProgressCircleVariantProps>()
