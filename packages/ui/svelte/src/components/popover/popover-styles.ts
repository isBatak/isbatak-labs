import type { popover } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [usePopoverStyles, providePopoverStyles] = createContext<() => ReturnType<typeof popover>>()
