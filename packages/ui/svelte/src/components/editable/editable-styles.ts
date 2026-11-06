import type { editable } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useEditableStyles, provideEditableStyles] = createContext<() => ReturnType<typeof editable>>()
