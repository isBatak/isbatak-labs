import type { actionItem } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useActionItemStyles, provideActionItemStyles] = createContext<() => ReturnType<typeof actionItem>>()
