import { Input } from "./primitives"
import type { SampleProps } from "./types"

export function InputSample(props: SampleProps) {
  return <Input placeholder="you@example.com" {...props} />
}
