import type { timeline } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useTimelineStyles, provideTimelineStyles] = createContext<() => ReturnType<typeof timeline>>()
