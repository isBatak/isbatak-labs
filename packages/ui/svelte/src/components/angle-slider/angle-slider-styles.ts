import type { angleSlider } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useAngleSliderStyles, provideAngleSliderStyles] = createContext<() => ReturnType<typeof angleSlider>>()
