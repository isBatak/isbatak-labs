import type { ratingGroup } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useRatingGroupStyles, provideRatingGroupStyles] = createContext<() => ReturnType<typeof ratingGroup>>()
