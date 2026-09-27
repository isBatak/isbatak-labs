import type { tooltip } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useTooltipStyles, provideTooltipStyles] = createContext<() => ReturnType<typeof tooltip>>()
