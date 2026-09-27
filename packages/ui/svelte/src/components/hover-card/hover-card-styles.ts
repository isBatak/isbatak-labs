import type { hoverCard } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useHoverCardStyles, provideHoverCardStyles] = createContext<() => ReturnType<typeof hoverCard>>()
