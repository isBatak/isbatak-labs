"use client"

import { useDocVariant } from "./doc-variant"
import { createPreference } from "./preference"
import { FRAMEWORK_KEY, type FrameworkId, defaultVariant, frameworkIds } from "./variant"

export type { FrameworkId }

const useFrameworkPreference = createPreference(FRAMEWORK_KEY, frameworkIds, defaultVariant.framework)

export function useFramework() {
  const [preference, setPreference] = useFrameworkPreference()
  const { variant, setVariant } = useDocVariant()

  const setFramework = (framework: FrameworkId) => {
    setPreference(framework)
    setVariant({ framework })
  }

  return { framework: variant?.framework ?? preference, setFramework }
}
