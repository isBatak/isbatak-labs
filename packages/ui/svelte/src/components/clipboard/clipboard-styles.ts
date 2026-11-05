import type { clipboard } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useClipboardStyles, provideClipboardStyles] = createContext<() => ReturnType<typeof clipboard>>()
