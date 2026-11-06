import type { passwordInput } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [usePasswordInputStyles, providePasswordInputStyles] =
  createContext<() => ReturnType<typeof passwordInput>>()
