import type { status } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useStatusStyles, provideStatusStyles] = createContext<() => ReturnType<typeof status>>()
