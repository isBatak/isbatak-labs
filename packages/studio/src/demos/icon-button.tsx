import { IconButton } from "@isbatak/react-ui/button"

import { PlusIcon } from "./primitives"
import type { SampleProps } from "./types"

export function IconButtonSample(props: SampleProps) {
  return (
    <IconButton aria-label="Add" {...props}>
      <PlusIcon />
    </IconButton>
  )
}
