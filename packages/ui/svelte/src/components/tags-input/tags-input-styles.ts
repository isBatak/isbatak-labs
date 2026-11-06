import type { tagsInput } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useTagsInputStyles, provideTagsInputStyles] = createContext<() => ReturnType<typeof tagsInput>>()
