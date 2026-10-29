import { Avatar } from "./primitives"
import type { SampleProps } from "./types"

export function AvatarSample(props: SampleProps) {
  return (
    <Avatar.Root {...props}>
      <Avatar.Fallback>IB</Avatar.Fallback>
    </Avatar.Root>
  )
}
