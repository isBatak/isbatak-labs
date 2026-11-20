import type { command } from "@isbatak/panda-ds/recipes"
import { createContext, getContext, setContext } from "svelte"

import type { CommandItem, UseCommandCollectionReturn } from "./command-store"
import type { UseCommandReturn } from "./use-command.svelte"

export const [useCommandStyles, provideCommandStyles] = createContext<() => ReturnType<typeof command>>()

const [getCommandContext, setCommandContext] = createContext<UseCommandReturn<any>>()

export function useCommandContext<T extends CommandItem = CommandItem>(): UseCommandReturn<T> {
  return getCommandContext()
}

export const provideCommandContext = setCommandContext

export interface CommandProviderContextValue {
  readonly value: UseCommandCollectionReturn<any>
  labelId: string
}

const providerKey = Symbol("CommandProviderContext")
const closeKey = Symbol("CommandCloseContext")

export const getCommandProvider = () => getContext<CommandProviderContextValue | undefined>(providerKey)
export const setCommandProvider = (value: CommandProviderContextValue) => setContext(providerKey, value)

export const getCommandClose = () => getContext<VoidFunction | undefined>(closeKey)
export const setCommandClose = (value: VoidFunction) => setContext(closeKey, value)
