import type { dataList } from "@isbatak/panda-ds/recipes"
import { createContext } from "svelte"

export const [useDataListStyles, provideDataListStyles] = createContext<() => ReturnType<typeof dataList>>()
