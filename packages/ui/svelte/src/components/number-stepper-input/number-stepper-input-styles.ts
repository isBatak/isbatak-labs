import type { numberStepperInput } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useNumberStepperInputStyles, provideNumberStepperInputStyles] =
  createContext<() => ReturnType<typeof numberStepperInput>>()
