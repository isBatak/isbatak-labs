import type { tone } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

import type { ToneType } from "./detect-tone"

export const [useToneStyles, provideToneStyles] = createContext<() => ReturnType<typeof tone>>()

export const [useToneContext, provideToneContext] = createContext<() => ToneType>()
