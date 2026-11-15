import type { timer } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useTimerStyles, provideTimerStyles] = createContext<() => ReturnType<typeof timer>>()
