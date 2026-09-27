import type { slider } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useSliderStyles, provideSliderStyles] = createContext<() => ReturnType<typeof slider>>()
