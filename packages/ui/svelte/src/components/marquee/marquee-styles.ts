import type { marquee } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useMarqueeStyles, provideMarqueeStyles] = createContext<() => ReturnType<typeof marquee>>()
