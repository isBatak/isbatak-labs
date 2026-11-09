import type { actionBar } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useActionBarStyles, provideActionBarStyles] = createContext<() => ReturnType<typeof actionBar>>()
