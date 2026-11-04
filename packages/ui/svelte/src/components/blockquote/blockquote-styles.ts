import type { blockquote } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useBlockquoteStyles, provideBlockquoteStyles] = createContext<() => ReturnType<typeof blockquote>>()
