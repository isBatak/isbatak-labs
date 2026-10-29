import { Kbd } from "./primitives"
import type { SampleProps } from "./types"

export function KbdSample(props: SampleProps) {
  return <Kbd {...props}>⌘ K</Kbd>
}
