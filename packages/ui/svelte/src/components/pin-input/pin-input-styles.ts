import type { pinInput } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [usePinInputStyles, providePinInputStyles] = createContext<() => ReturnType<typeof pinInput>>()
