import type { radioGroup } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useRadioGroupStyles, provideRadioGroupStyles] = createContext<() => ReturnType<typeof radioGroup>>()
