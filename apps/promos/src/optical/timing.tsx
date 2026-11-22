import { createContext, useContext } from "react"

import type { Timing } from "./theme"

const TimingContext = createContext<Timing | null>(null)

export const TimingProvider = TimingContext.Provider

export function useTiming() {
  const timing = useContext(TimingContext)
  if (!timing) throw new Error("useTiming must be used inside TimingProvider")
  return timing
}
