import type { carousel } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useCarouselStyles, provideCarouselStyles] = createContext<() => ReturnType<typeof carousel>>()
