import type { breadcrumb } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useBreadcrumbStyles, provideBreadcrumbStyles] = createContext<() => ReturnType<typeof breadcrumb>>()
