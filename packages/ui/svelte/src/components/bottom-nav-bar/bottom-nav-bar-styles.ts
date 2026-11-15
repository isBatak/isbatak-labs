import type { bottomNavBar } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useBottomNavBarStyles, provideBottomNavBarStyles] = createContext<() => ReturnType<typeof bottomNavBar>>()
