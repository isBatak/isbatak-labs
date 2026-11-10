import type { steps } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useStepsStyles, provideStepsStyles] = createContext<() => ReturnType<typeof steps>>()
