import type { PropType } from "vue"

export const patternProps = (keys: readonly string[], booleans: readonly string[] = []) =>
  Object.fromEntries(
    keys.map((key) => [key, booleans.includes(key) ? Boolean : (null as unknown as PropType<unknown>)]),
  )
