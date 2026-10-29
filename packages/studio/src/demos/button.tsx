import { Button } from "@isbatak/react-ui/button"

import { PlusIcon } from "./primitives"
import type { SampleProps } from "./types"

export function ButtonSample(props: SampleProps) {
  return <Button {...props}>{props.icon ? <PlusIcon /> : "Button"}</Button>
}
