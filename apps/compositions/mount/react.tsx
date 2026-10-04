import type { ComponentType } from "react"
import { examples as sources } from "virtual:examples"
import { setCurrentExample } from "./example-state"

const scoped = (id: string, Example: ComponentType) =>
  function ScopedExample() {
    setCurrentExample(id)
    return <Example />
  }

const scopeAll = (entries: Record<string, ComponentType>) =>
  Object.fromEntries(Object.entries(entries).map(([id, Example]) => [id, scoped(id, Example)]))

export const examples = { zag: scopeAll(sources.zag), ark: scopeAll(sources.ark) }
export { resetSnapshot, setControls, type ExampleControls } from "./example-state"
