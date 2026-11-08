import type { dialog } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useDialogStyles, provideDialogStyles] = createContext<() => ReturnType<typeof dialog>>()
