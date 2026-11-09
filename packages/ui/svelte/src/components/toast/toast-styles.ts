import type { toast } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useToastStyles, provideToastStyles] = createContext<() => ReturnType<typeof toast>>()
