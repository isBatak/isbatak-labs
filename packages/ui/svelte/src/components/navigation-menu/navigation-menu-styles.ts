import type { navigationMenu } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useNavigationMenuStyles, provideNavigationMenuStyles] =
  createContext<() => ReturnType<typeof navigationMenu>>()
